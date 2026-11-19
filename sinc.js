// Sincronização entre aparelhos por código.
// O que vai para a nuvem: grifos, notas, salvos, tipos, memorização, leitura, plano, estudos, sermões e capítulos colados.
// Cada item tem um carimbo de hora; ao juntar dois aparelhos vale a versão mais recente de cada item,
// e o que foi apagado deixa um carimbo para não voltar. Preferências (tema, letra, capítulo aberto) não sincronizam.
(function () {
  "use strict";
  const App = window.App;
  const e = App.estado;
  const MAPAS = ["marcas", "notas", "salvos", "tipos", "memo", "leitura", "colados"];
  const LISTAS = ["estudos", "sermoes"];
  const API = "api/sync";
  let foto = new Map(); // id -> JSON do item como estava no último salvamento
  let aplicando = false;
  let ocupado = false;
  let pendente = null;
  let ultimoErro = "";

  if (!e.carimbos || typeof e.carimbos !== "object") e.carimbos = {};
  if (!e.sinc || typeof e.sinc !== "object") e.sinc = { codigo: "", ult: 0 };

  function achatar() {
    const m = new Map();
    for (const c of MAPAS) for (const [k, v] of Object.entries(e[c] || {})) m.set(c + "|" + k, v);
    for (const c of LISTAS) for (const x of e[c] || []) if (x && x.id) m.set(c + "|" + x.id, x);
    if (e.plano) m.set("plano|", e.plano);
    return m;
  }
  function fotografar() {
    foto = new Map([...achatar()].map(([id, v]) => [id, JSON.stringify(v)]));
  }

  // Chamado pelo núcleo a cada salvamento: carimba o que mudou ou sumiu desde o salvamento anterior.
  function aoSalvar() {
    if (aplicando) return;
    const agora = Date.now();
    const atual = new Map([...achatar()].map(([id, v]) => [id, JSON.stringify(v)]));
    let mudou = false;
    for (const [id, txt] of atual) if (foto.get(id) !== txt) (e.carimbos[id] = agora), (mudou = true);
    for (const id of foto.keys()) if (!atual.has(id)) (e.carimbos[id] = agora), (mudou = true);
    foto = atual;
    if (!mudou) return;
    try {
      localStorage.setItem("biblia-estudo:v1", JSON.stringify(e)); // grava os carimbos novos
    } catch (err) {
      /* sem armazenamento */
    }
    if (e.sinc.codigo) agendar(5000);
  }

  function aplicar(id, reg) {
    const i = id.indexOf("|");
    const c = id.slice(0, i);
    const k = id.slice(i + 1);
    if (MAPAS.includes(c)) {
      if (!e[c] || typeof e[c] !== "object") e[c] = {};
      if (reg.d) delete e[c][k];
      else e[c][k] = reg.v;
    } else if (LISTAS.includes(c)) {
      if (!Array.isArray(e[c])) e[c] = [];
      const pos = e[c].findIndex((x) => x && x.id === k);
      if (reg.d) {
        if (pos !== -1) e[c].splice(pos, 1);
      } else if (pos === -1) e[c].unshift(reg.v);
      else {
        // Troca o conteúdo sem trocar o objeto, para não quebrar uma tela que esteja com ele aberto.
        for (const campo of Object.keys(e[c][pos])) delete e[c][pos][campo];
        Object.assign(e[c][pos], reg.v);
      }
    } else if (c === "plano") e.plano = reg.d ? null : reg.v;
  }

  async function chave() {
    const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("biblia-estudo:" + e.sinc.codigo));
    return [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  async function sincronizar() {
    if (!e.sinc.codigo) return;
    if (ocupado) return agendar(3000);
    ocupado = true;
    mostrar("Sincronizando…");
    try {
      const k = await chave();
      const resp = await fetch(API + "?k=" + k, { cache: "no-store" });
      if (!resp.ok && resp.status !== 404) throw new Error(resp.status === 429 ? "muitas tentativas, aguarde um pouco" : "servidor respondeu " + resp.status);
      const remoto = resp.ok ? ((await resp.json()) || {}).recs || {} : {};
      const local = achatar();
      const ids = new Set([...local.keys(), ...Object.keys(e.carimbos), ...Object.keys(remoto)]);
      const final = {};
      let mudaLocal = false;
      let mudaRemoto = false;
      const mudancas = [];
      for (const id of ids) {
        const tem = local.has(id);
        const tl = e.carimbos[id] || (tem ? 1 : 0);
        const l = tem ? { t: tl, v: local.get(id) } : tl ? { t: tl, d: 1 } : null;
        const r = remoto[id] && typeof remoto[id].t === "number" ? remoto[id] : null;
        let vence;
        if (id.startsWith("leitura|") && l && r && !l.d && !r.d && Array.isArray(l.v) && Array.isArray(r.v)) {
          // Leitura do mesmo dia em dois aparelhos: soma os capítulos em vez de escolher um lado.
          const uniao = [...new Set([...r.v, ...l.v])];
          vence = { t: Math.max(l.t, r.t), v: uniao };
          if (uniao.length > l.v.length) mudancas.push([id, vence]);
          if (uniao.length > r.v.length || vence.t !== r.t) mudaRemoto = true;
        } else if (!r) {
          vence = l;
          mudaRemoto = true;
        } else if (!l) {
          vence = r;
          mudancas.push([id, r]);
        } else {
          const jl = JSON.stringify(l.d ? null : l.v);
          const jr = JSON.stringify(r.d ? null : r.v);
          const igual = jl === jr && Boolean(l.d) === Boolean(r.d);
          const localVence = l.t > r.t || (l.t === r.t && (igual || jl >= jr));
          vence = localVence ? l : r;
          if (!igual) {
            if (localVence) mudaRemoto = true;
            else mudancas.push([id, r]);
          } else if (l.t !== r.t) vence = l.t > r.t ? l : r;
        }
        if (vence) final[id] = vence;
      }
      if (mudancas.length) {
        mudaLocal = true;
        aplicando = true;
        for (const [id, reg] of mudancas) aplicar(id, reg);
      }
      for (const [id, reg] of Object.entries(final)) if (reg.t > 1) e.carimbos[id] = reg.t;
      if (mudaRemoto) {
        const corpo = JSON.stringify({ app: "biblia-estudo", v: 1, t: Date.now(), recs: final });
        const put = await fetch(API + "?k=" + k, { method: "PUT", headers: { "Content-Type": "application/json" }, body: corpo });
        if (!put.ok) throw new Error(put.status === 413 ? "dados grandes demais" : "não consegui gravar (" + put.status + ")");
      }
      e.sinc.ult = Date.now();
      ultimoErro = "";
      aplicando = true;
      App.salvar();
      aplicando = false;
      fotografar();
      if (mudaLocal && App.redesenhar) App.redesenhar();
      mostrar();
    } catch (err) {
      aplicando = false;
      ultimoErro = navigator.onLine === false ? "sem internet" : String(err.message || err);
      mostrar();
    } finally {
      ocupado = false;
    }
  }
  function agendar(ms) {
    clearTimeout(pendente);
    pendente = setTimeout(sincronizar, ms);
  }

  function textoEstado() {
    if (ultimoErro) return "Não sincronizou: " + ultimoErro + ". Tenta de novo sozinho.";
    if (!e.sinc.ult) return "Ainda não sincronizou.";
    return "Sincronizado " + new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }).format(new Date(e.sinc.ult)) + ".";
  }
  function mostrar(texto) {
    const el = document.getElementById("sinc-estado");
    if (el) el.textContent = texto || textoEstado();
  }
  const formatar = (c) => (c.match(/.{1,4}/g) || []).join("-");
  const limpar = (c) => String(c || "").toUpperCase().replace(/[^A-Z0-9]/g, "");

  // Bloco mostrado no Caderno.
  function htmlCaderno() {
    const esc = App.esc;
    if (!e.sinc.codigo) {
      return (
        '<div class="cartao sinc"><strong>Sincronizar entre aparelhos</strong>' +
        '<p class="mudo">Use o mesmo código no celular e no computador para ter as mesmas notas, grifos, sermões e leitura nos dois.</p>' +
        '<p><button class="botao principal" data-acao="sinc-criar">Criar código neste aparelho</button></p>' +
        '<div class="sinc-entrar"><input id="sinc-codigo" class="campo" placeholder="Já tenho um código" autocomplete="off" autocapitalize="characters" spellcheck="false">' +
        '<button class="botao" data-acao="sinc-entrar">Entrar</button></div></div>'
      );
    }
    return (
      '<div class="cartao sinc"><strong>Sincronização ligada</strong>' +
      '<p class="mudo">Digite este código no outro aparelho, em Caderno → Já tenho um código. Guarde-o: quem tiver o código vê suas anotações.</p>' +
      '<p class="sinc-cod">' + esc(formatar(e.sinc.codigo)) + "</p>" +
      '<p class="mudo" id="sinc-estado">' + esc(textoEstado()) + "</p>" +
      '<p><button class="botao" data-acao="sinc-agora">Sincronizar agora</button> <button class="botao" data-acao="sinc-copiar">Copiar código</button> ' +
      '<button class="link" data-acao="sinc-sair">Desligar neste aparelho</button></p></div>'
    );
  }
  function acao(nome, alvo) {
    if (nome === "sinc-criar") {
      const letras = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
      const sorteio = crypto.getRandomValues(new Uint8Array(16));
      e.sinc.codigo = [...sorteio].map((b) => letras[b % letras.length]).join("");
      e.sinc.ult = 0;
    } else if (nome === "sinc-entrar") {
      const c = limpar((document.getElementById("sinc-codigo") || {}).value);
      if (c.length < 12) return alert("O código tem 16 letras e números. Confira e tente de novo.");
      e.sinc.codigo = c;
      e.sinc.ult = 0;
    } else if (nome === "sinc-sair") {
      if (!confirm("Desligar a sincronização neste aparelho? Suas anotações continuam aqui e na nuvem.")) return;
      e.sinc.codigo = "";
      e.sinc.ult = 0;
      ultimoErro = "";
    } else if (nome === "sinc-copiar") {
      if (navigator.clipboard) navigator.clipboard.writeText(formatar(e.sinc.codigo)).then(() => {
        alvo.textContent = "Copiado";
        setTimeout(() => (alvo.textContent = "Copiar código"), 1500);
      }, () => {});
      return;
    } else if (nome === "sinc-agora") {
      return sincronizar();
    } else return;
    aplicando = true;
    App.salvar();
    aplicando = false;
    if (App.redesenhar) App.redesenhar();
    if (e.sinc.codigo) sincronizar();
  }

  fotografar();
  window.Sinc = { aoSalvar, htmlCaderno, acao, sincronizar };
  if (e.sinc.codigo) agendar(1500);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && e.sinc.codigo && Date.now() - (e.sinc.ult || 0) > 60000) agendar(500);
  });
  window.addEventListener("online", () => e.sinc.codigo && agendar(1000));
})();
