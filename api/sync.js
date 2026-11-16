// Sincronização: guarda o caderno (notas, grifos, sermões, leitura) num arquivo privado do Vercel Blob.
// A chave é o SHA-256 do código de sincronização; o código em si nunca chega ao servidor.
import { put, get, del } from '@vercel/blob';
import { dentroDoLimite, contarErro, errosDemais } from './_limite.js';

const LIMITE = 4 * 1024 * 1024; // 4 MB

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!dentroDoLimite(req, res, 'sync', 120, 60000)) return;
  if (errosDemais(req, res, 'sync', 20)) return;
  const k = String((req.query && req.query.k) || '');
  if (!/^[a-f0-9]{64}$/.test(k)) { contarErro(req, 'sync'); return res.status(400).json({ erro: 'chave inválida' }); }
  const caminho = `sync/${k}.json`;
  try {
    if (req.method === 'GET') {
      const r = await get(caminho, { access: 'private', useCache: false });
      if (!r || r.statusCode !== 200 || !r.stream) { contarErro(req, 'sync'); return res.status(404).json({ vazio: true }); }
      const txt = await new Response(r.stream).text();
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      return res.status(200).send(txt);
    }
    if (req.method === 'PUT') {
      const corpo = typeof req.body === 'string' ? req.body : JSON.stringify(req.body || null);
      let dados;
      try { dados = JSON.parse(corpo); } catch { return res.status(400).json({ erro: 'JSON inválido' }); }
      const valido = dados && typeof dados === 'object' && dados.app === 'biblia-estudo' && dados.recs && typeof dados.recs === 'object' && !Array.isArray(dados.recs);
      if (!valido) return res.status(400).json({ erro: 'formato inválido' });
      if (corpo.length > LIMITE) return res.status(413).json({ erro: 'dados grandes demais' });
      await put(caminho, corpo, { access: 'private', addRandomSuffix: false, allowOverwrite: true, contentType: 'application/json' });
      return res.status(200).json({ ok: true, t: Date.now() });
    }
    if (req.method === 'DELETE') {
      await del(caminho);
      return res.status(200).json({ ok: true });
    }
    res.setHeader('Allow', 'GET, PUT, DELETE');
    return res.status(405).json({ erro: 'método não permitido' });
  } catch (e) {
    return res.status(500).json({ erro: 'falha no armazenamento' });
  }
}
