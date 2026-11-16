// Limite de tentativas por endereço (IP). Fica na memória da função: segura rajadas e varreduras,
// mas não é um contador global (cada instância do servidor conta a sua parte).
const baldes = new Map();

function ipDe(req) {
  const f = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  return f || String(req.headers['x-real-ip'] || 'sem-ip');
}

// Devolve true se a requisição pode seguir; se não, já responde 429.
export function dentroDoLimite(req, res, nome, max, janelaMs) {
  const agora = Date.now();
  const chave = nome + ':' + ipDe(req);
  let b = baldes.get(chave);
  if (!b || agora - b.t > janelaMs) { b = { n: 0, t: agora }; baldes.set(chave, b); }
  b.n++;
  if (baldes.size > 5000) for (const [k, v] of baldes) if (agora - v.t > janelaMs) baldes.delete(k);
  if (b.n > max) {
    res.setHeader('Retry-After', String(Math.ceil((b.t + janelaMs - agora) / 1000)));
    res.status(429).json({ erro: 'muitas tentativas, aguarde um pouco' });
    return false;
  }
  return true;
}

// Conta as tentativas com chave que não existe (quem tenta adivinhar códigos erra sempre).
export function contarErro(req, nome) {
  const chave = nome + ':erro:' + ipDe(req);
  const agora = Date.now();
  let b = baldes.get(chave);
  if (!b || agora - b.t > 600000) { b = { n: 0, t: agora }; baldes.set(chave, b); }
  b.n++;
}
export function errosDemais(req, res, nome, max) {
  const b = baldes.get(nome + ':erro:' + ipDe(req));
  if (b && Date.now() - b.t <= 600000 && b.n >= max) {
    res.setHeader('Retry-After', '600');
    res.status(429).json({ erro: 'muitas tentativas, aguarde alguns minutos' });
    return true;
  }
  return false;
}
