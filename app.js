(function () {
  "use strict";

  const CHAVE = "biblia-estudo:v1";
  const VERSOES = {
    blivre: {
      nome: "Bíblia Livre",
      sigla: "BLIVRE",
      credito:
        "Bíblia Livre (BLIVRE), Copyright © Diego Santos, Mario Sérgio e Marco Teles, fevereiro de 2018. Licença Creative Commons Atribuição 4.0. Texto obtido em eBible.org.",
    },
    bpm: {
      nome: "Bíblia Portuguesa Mundial",
      sigla: "BPM",
      credito: "Bíblia Portuguesa Mundial (BPM), domínio público. Texto obtido em eBible.org.",
    },
  };
  const CORES = ["amarelo", "verde", "azul", "rosa"];

  const livros = window.LIVROS.map((a, i) => ({
    cod: a[0], nome: a[1], abrev: a[2], grupo: a[3], autor: a[4], data: a[5], periodo: a[6], resumo: a[7],
    testamento: i < 39 ? "AT" : "NT", extra: false,
  }));
  const extras = window.EXTRAS.map((a) => ({ cod: a[0], nome: a[1], abrev: a[2], grupo: "Literatura extrabíblica", extra: true }));
  const todos = livros.concat(extras);
  const porCod = new Map(todos.map((l) => [l.cod, l]));

  const $ = (id) => document.getElementById(id);
  const leitorEl = $("leitor");
  const painelEl = $("conteudo-painel");

  let estado = carregarEstado();
  let indice = null;
  let sel = [];
  let palavraSel = null; // { v, i }: palavra do original aberta no painel
  let refsPalavra = [];
  let editandoEstudo = false;
  let vistaAtual = "biblia";
  let aba = "estudo";
  let estudoAberto = null;
  let busca = null;
  let renderizacao = 0;
  const cache = new Map();

  // ---------- utilidades ----------
  function carregarEstado() {
    const padrao = { livro: "GEN", cap: 1, versao: "blivre", tema: null, interlinear: false, marcas: {}, notas: {}, salvos: {},
      ajustes: { escala: 1, foco: false, semNumeros: false }, estudos: [], plano: null, memo: {}, leitura: {}, tipos: {}, sermoes: [] };
    try {
      return Object.assign(padrao, JSON.parse(localStorage.getItem(CHAVE) || "{}"));
    } catch (e) {
      return padrao;
    }
  }
  function salvar() {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(estado));
    } catch (e) {
      /* armazenamento indisponível: o app segue funcionando sem persistir */
    }
    if (window.Sinc) window.Sinc.aoSalvar();
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function semAcento(s) {
    return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }
  function formatarVerso(texto) {
    // Colchetes marcam palavras supridas pelos tradutores: mostramos em itálico.
    return esc(texto).replace(/\[([^\]]+)\]/g, "<i>$1</i>");
  }
  function chave(cod, cap, v) {
    return cod + "." + cap + "." + v;
  }
  function carregarArquivo(url) {
    if (!cache.has(url)) {
      const p = fetch(url).then((r) => {
        if (!r.ok) throw new Error("Não foi possível carregar " + url);
        return r.json();
      });
      p.catch(() => cache.delete(url));
      cache.set(url, p);
    }
    return cache.get(url);
  }
  function carregarLivro(versao, cod) {
    return carregarArquivo("dados/texto/" + versao + "/" + cod + ".json");
  }
  // Palavra a palavra do original: { cap: { verso: [[original, transliteração, tags, morfologia, índice da raiz], ...] } }
  function carregarInter(cod) {
    return carregarArquivo("dados/interlinear/" + cod + ".json");
  }
  function carregarGlosas() {
    return carregarArquivo("dados/lexico/glosas-pt.json").catch(() => ({}));
  }
  function carregarVerbete(tag) {
    return carregarArquivo("dados/lexico/" + tag.slice(0, 3) + ".json").then((b) => b[tag] || null, () => null);
  }
  function linguaDe(livro) {
    return livro.testamento === "AT" ? "hebraico" : "grego";
  }
  function glosaLimpa(g) {
    return (g || "").replace(/[\[\]]/g, "").trim();
  }
  function glosaDe(palavra, glosas) {
    const partes = palavra[2].map((t) => glosaLimpa(glosas[t])).filter((g) => g && g !== "?" && g !== "-");
    return partes.join(" · ") || "—";
  }
  function htmlPalavras(v, palavras, glosas, lingua) {
    let html = '<div class="palavras ' + (lingua === "hebraico" ? 'heb" lang="he' : 'gre" lang="grc') + '">';
    palavras.forEach((w, i) => {
      const ativa = palavraSel && palavraSel.v === v && palavraSel.i === i;
      html +=
        '<button class="pal' + (ativa ? " ativa" : "") + '" data-pal="' + esc(v) + ":" + i + '">' +
        '<span class="po">' + esc(w[0]) + '</span><span class="pt" lang="pt">' + esc(w[1]) + '</span><span class="pg" lang="pt">' +
        esc(glosaDe(w, glosas)) + "</span></button>";
    });
    return html + "</div>";
  }
  function numVerso(bruto) {
    const n = Number(bruto);
    return Number.isInteger(n) ? n : bruto;
  }
  function capitulos(cod, versao) {
    return (indice[versao || estado.versao] || {})[cod] || [];
  }
  function refTexto(livro, cap, versos) {
    if (!versos || !versos.length) return livro.nome + " " + cap;
    const nums = versos.slice().sort((a, b) => a - b);
    const partes = [];
    let ini = nums[0];
    let fim = nums[0];
    for (let i = 1; i <= nums.length; i++) {
      if (nums[i] === fim + 1) {
        fim = nums[i];
        continue;
      }
      partes.push(ini === fim ? String(ini) : ini + "–" + fim);
      ini = fim = nums[i];
    }
    return livro.nome + " " + cap + ":" + partes.join(", ");
  }
  function celular() {
    return window.matchMedia("(max-width: 900px)").matches;
  }

  // ---------- navegação ----------
  function irPara(cod, cap, verso) {
    const livro = porCod.get(cod);
    if (!livro) return;
    mostrarVista("biblia");
    if (livro.extra && estado.versao !== "bpm") {
      estado.versao = "bpm";
      $("sel-versao").value = "bpm";
    }
    const caps = capitulos(cod);
    estado.livro = cod;
    estado.cap = caps.includes(Number(cap)) ? Number(cap) : caps[0];
    sel = verso ? [verso] : [];
    palavraSel = null;
    salvar();
    const alvo = "#" + cod + "/" + estado.cap + (verso ? "/" + verso : "");
    if (location.hash !== alvo) history.replaceState(null, "", alvo);
    renderLeitor(verso);
    renderPainel();
  }
  function vizinho(delta) {
    const caps = capitulos(estado.livro);
    const i = caps.indexOf(estado.cap) + delta;
    if (i >= 0 && i < caps.length) return { cod: estado.livro, cap: caps[i] };
    const lista = porCod.get(estado.livro).extra ? extras : livros;
    const j = lista.findIndex((l) => l.cod === estado.livro) + delta;
    if (j < 0 || j >= lista.length) return null;
    const outros = capitulos(lista[j].cod);
    return { cod: lista[j].cod, cap: delta > 0 ? outros[0] : outros[outros.length - 1] };
  }
  function lerHash() {
    const p = location.hash.replace("#", "").split("/");
    if (porCod.has(p[0])) {
      const v = Number(p[2]);
      return { cod: p[0], cap: Number(p[1]) || 1, verso: Number.isInteger(v) && v > 0 ? v : null };
    }
    return null;
  }

  // ---------- registro de leitura (sequência de dias) ----------
  function hojeISO() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function registrarLeitura(cod, cap) {
    const l = porCod.get(cod);
    if (!l || l.extra) return;
    const dia = hojeISO();
    const lista = Array.isArray(estado.leitura[dia]) ? estado.leitura[dia] : (estado.leitura[dia] = []);
    const k = cod + "." + cap;
    if (lista.includes(k)) return;
    lista.push(k);
    salvar();
  }
  // Um capítulo conta como lido depois de SEGUNDOS_LEITURA aberto e visível na área Bíblia.
  const SEGUNDOS_LEITURA = 20;
  const tempoCap = { k: "", s: 0 };
  setInterval(() => {
    if (vistaAtual !== "biblia" || document.hidden) return;
    const k = estado.livro + "." + estado.cap;
    if (tempoCap.k !== k) {
      tempoCap.k = k;
      tempoCap.s = 0;
    }
    tempoCap.s += 5;
    if (tempoCap.s === SEGUNDOS_LEITURA) registrarLeitura(estado.livro, estado.cap);
  }, 5000);

  // ---------- introdução do livro (aparece no primeiro capítulo) ----------
  function htmlIntro(livro, dados) {
    const it = (window.INTRODUCOES || {})[livro.cod];
    if (!it) return "";
    const linha = (rot, txt) => (txt ? "<dt>" + rot + "</dt><dd>" + esc(txt) + "</dd>" : "");
    const bloco = (rot, txt) => (txt ? "<h4>" + rot + "</h4><p>" + esc(txt) + "</p>" : "");
    let h = '<details class="intro-livro"' + (estado.ajustes.introFechada ? "" : " open") + "><summary>Introdução a " + esc(livro.nome) + "</summary>";
    h += '<dl class="ficha">' + linha("Autor", it.autor) + linha("Data", it.data) + linha("Destinatários", it.destinatarios) + "</dl>";
    h += bloco("Propósito", it.proposito) + bloco("Contexto histórico", it.contexto);
    if (Array.isArray(it.temas) && it.temas.length) {
      h += '<h4>Temas</h4><div class="intro-temas">' + it.temas.map((t) => "<span>" + esc(t) + "</span>").join("") + "</div>";
    }
    h += bloco("Cristo no livro", it.cristo);
    if (Array.isArray(it.esboco) && it.esboco.length) {
      h += '<h4>Esboço</h4><ol class="intro-esboco">';
      for (const [ref, rotulo, titulo] of it.esboco) {
        const p = partesRef(ref);
        const dentro = "<b>" + esc(rotulo) + "</b><span>" + esc(titulo) + "</span>";
        h += "<li>" + (p ? '<button data-ref="' + p.cod + "/" + p.cap + "/" + p.ini + '">' + dentro + "</button>" : "<div>" + dentro + "</div>") + "</li>";
      }
      h += "</ol>";
    }
    const chaves = (it.chaves || []).map(partesRef).filter(Boolean);
    if (chaves.length) {
      h += '<h4>Versículos-chave</h4><div class="intro-chaves">';
      for (const p of chaves) {
        const texto = (dados[p.cap] || [])
          .filter((x) => numVerso(x[0]) >= p.ini && numVerso(x[0]) <= p.fim)
          .map((x) => formatarVerso(x[1]))
          .join(" ");
        h += '<button data-ref="' + p.cod + "/" + p.cap + "/" + p.ini + '"><b>' + esc(rotuloPartes(p)) + "</b>" + (texto ? "<span>" + texto + "</span>" : "") + "</button>";
      }
      h += "</div>";
    }
    return h + "</details>";
  }
  leitorEl.addEventListener(
    "toggle",
    (ev) => {
      if (!ev.target.classList || !ev.target.classList.contains("intro-livro")) return;
      estado.ajustes.introFechada = !ev.target.open;
      salvar();
    },
    true
  );

  // ---------- tipos de versículo (promessa, mandamento...) ----------
  const TIPOS_V = { promessa: "Promessa", mandamento: "Mandamento", advertencia: "Advertência", exemplo: "Exemplo" };

  // ---------- estrutura da passagem ----------
  // Quebra o texto em orações, recua as subordinadas e destaca conectivos e palavras repetidas. É automático: serve de ponto de partida.
  const CONECTIVOS = [
    ["causa", ["porque", "pois", "porquanto", "visto que", "já que", "uma vez que"]],
    ["propósito", ["para que", "a fim de que", "a fim de", "para"]],
    ["condição", ["se", "caso", "a não ser que", "a menos que"]],
    ["contraste", ["mas", "porém", "contudo", "todavia", "entretanto", "no entanto", "antes"]],
    ["conclusão", ["portanto", "por isso", "assim", "logo", "de modo que", "de maneira que", "por conseguinte"]],
    ["tempo", ["quando", "enquanto", "depois que", "antes que", "até que", "então"]],
    ["comparação", ["assim como", "como", "tal como"]],
    ["concessão", ["ainda que", "embora", "mesmo que", "apesar de"]],
  ];
  const CON_LISTA = CONECTIVOS.flatMap(([tipo, lista]) => lista.map((c) => [c, tipo])).sort((a, b) => b[0].length - a[0].length);
  const CON_RECUO = new Set(["causa", "propósito", "condição", "tempo", "comparação", "concessão"]);
  const PARADAS = new Set(("para pois porque como mais mas que com dos das nos nas pela pelo pelos pelas uma uns umas este esta esse essa isto isso aquele aquela seu sua seus suas teu tua meu minha nosso nossa vosso vossa " +
    "ele ela eles elas vos lhe lhes tem têm foi era eram ser sido será estar está estão sobre entre até também quando onde todo toda todos todas não nem sem por aos mesmo ainda assim então logo cada qual quem qualquer " +
    "disse dizendo havia haver tinha muito muita muitos pode porém").split(" "));
  function estrutura(versos) {
    const norm = (w) => semAcento(w.toLowerCase());
    const contagem = new Map();
    for (const [, texto] of versos) {
      for (const w of texto.replace(/[\[\]]/g, "").match(/[A-Za-zÀ-ÿ]+/g) || []) {
        const n = norm(w);
        if (n.length >= 4 && !PARADAS.has(n)) contagem.set(n, (contagem.get(n) || 0) + 1);
      }
    }
    const repetidas = [...contagem].filter((x) => x[1] >= 2).sort((a, b) => b[1] - a[1]).slice(0, 6);
    const classe = new Map(repetidas.map((x, i) => [x[0], "rep" + (i + 1)]));
    const marcar = (t) => t.split(/([A-Za-zÀ-ÿ]+)/).map((p) => (classe.has(norm(p)) ? '<mark class="' + classe.get(norm(p)) + '">' + esc(p) + "</mark>" : esc(p))).join("");
    const usados = new Map();
    let html = '<div class="estr">';
    for (const [n, texto] of versos) {
      const bruto = texto.replace(/[\[\]]/g, "").match(/[^,;:.!?]+[,;:.!?]*\s*/g) || [texto];
      const oracoes = [];
      for (const b of bruto) {
        // Pedaços muito curtos (vocativos, enumerações) ficam na linha anterior.
        if (oracoes.length && (b.trim().split(/\s+/).length < 3 || oracoes[oracoes.length - 1].trim().split(/\s+/).length < 3)) oracoes[oracoes.length - 1] += b;
        else oracoes.push(b);
      }
      oracoes.forEach((o, i) => {
        const limpa = o.trim();
        const m = limpa.match(/^(e\s+|E\s+)?/);
        const resto = limpa.slice(m[0].length);
        const achado = CON_LISTA.find(([c]) => resto.toLowerCase().startsWith(c + " "));
        let corpo;
        let nivel = 0;
        if (achado) {
          usados.set(achado[1], (usados.get(achado[1]) || new Set()).add(achado[0]));
          nivel = i > 0 && CON_RECUO.has(achado[1]) ? 1 : 0;
          corpo = esc(m[0]) + '<em class="con" title="' + achado[1] + '">' + esc(resto.slice(0, achado[0].length)) + "<small>" + achado[1] + "</small></em>" + marcar(resto.slice(achado[0].length));
        } else corpo = marcar(limpa);
        html += '<div class="estr-l n' + nivel + '">' + (i === 0 ? "<sup>" + esc(n) + "</sup>" : "") + corpo + "</div>";
      });
    }
    html += "</div>";
    if (repetidas.length) {
      html += '<p class="estr-leg">Repetições: ' + repetidas.map((x, i) => '<mark class="rep' + (i + 1) + '">' + esc(x[0]) + "</mark> ×" + x[1]).join(" · ") + "</p>";
    }
    return html;
  }

  // ---------- quem está falando ----------
  // Jesus: lista de versículos em dados/falas-jesus-*.js. Deus e demais personagens: detecção automática pelo
  // verbo de fala seguido de dois-pontos ("E disse o SENHOR: ..."), que pode errar onde a fala termina.
  const RX_FALA = /(?:disse(?:ram)?|dizendo|dizer|diz|dizia(?:m)?|falando|respond(?:eu|eram|endo)|fal(?:ou|aram|ando)|pergunt(?:ou|aram|ando)|clam(?:ou|aram|ando)|exclam(?:ou|aram)|orden(?:ou|aram)|grit(?:ou|aram|ando)|or(?:ou|aram)|jurou|declar(?:ou|aram))(?:-[a-z]+)?\b[^:.;!?]{0,90}:\s+/g;
  const RX_DEUS = /(?:disse|falou|respondeu|diz|dizendo|ordenou|jurou|declarou)(?:-[a-z]+)?\s+(?:mais\s+)?(?:o\s+)?(?:SENHOR|Deus|Senhor DEUS)\b|(?:^|\s)(?:o SENHOR|Deus|O SENHOR|o Senhor DEUS)\b[^:]{0,60}\b(?:disse|falou|falando|fala|respondeu|diz|dizendo|ordenou)|palavra do SENHOR\b[^:]{0,40}\bdizendo/;
  const RX_NARRA = /^(?:E |Então |Depois |Assim |Mas |Naquele |Naqueles |Aconteceu |E aconteceu )(?:\S+\s+){0,5}\S*(?:ou|eu|iu|aram|eram|iram|oram)\b/;
  const falasCache = new Map();
  function versosDeJesus(cod, cap) {
    const lista = ((window.FALAS_JESUS || {})[cod] || {})[cap];
    const conj = new Set();
    for (const parte of String(lista || "").split(",")) {
      const [a, b] = parte.split("-").map(Number);
      for (let v = a; v && v <= (b || a); v++) conj.add(v);
    }
    return conj;
  }
  function falasDoCapitulo(cod, cap, versos) {
    const chaveCache = estado.versao + ":" + cod + ":" + cap;
    if (falasCache.has(chaveCache)) return falasCache.get(chaveCache);
    const temJesus = Boolean((window.FALAS_JESUS || {})[cod]);
    const jesus = versosDeJesus(cod, cap);
    const saida = new Map();
    let corrente = null; // quem segue falando do versículo anterior
    let nomeado = null; // último falante identificado pelo nome (Deus ou Jesus), para "E disse:" sem sujeito
    let idadeNomeado = 9;
    for (const [n, texto] of versos) {
      const num = Number(n);
      const eJesus = jesus.has(num);
      const partes = [];
      const por = (t, quem) => {
        if (t) partes.push([t, quem || "narrador"]);
      };
      const intros = [...texto.matchAll(RX_FALA)];
      idadeNomeado++;
      if (!intros.length) {
        if (eJesus) corrente = "jesus";
        else if (corrente === "jesus" && temJesus) corrente = null;
        else if (corrente && RX_NARRA.test(texto)) corrente = null;
        por(texto, corrente);
      } else {
        let pos = 0;
        for (const m of intros) {
          // A frase que traz o verbo de fala é narração; o que vem antes dela ainda é do falante anterior.
          const antes = texto.slice(pos, m.index);
          const corte = Math.max(antes.lastIndexOf(". "), antes.lastIndexOf("! "), antes.lastIndexOf("? "));
          const iniFrase = corte === -1 ? pos : pos + corte + 2;
          por(texto.slice(pos, iniFrase), corrente);
          const frase = texto.slice(iniFrase, m.index + m[0].length);
          por(frase, null);
          if (eJesus) corrente = "jesus";
          else if (RX_DEUS.test(frase)) corrente = "deus";
          else if (!temJesus && /\bJesus\b/.test(frase) && !/\b(?:a|para|com) Jesus\b/.test(frase)) corrente = "jesus";
          else if (/^(?:E |Então )?(?:lhes? |me )?(?:disse|falou|diz)(?:-[a-z]+)?(?: mais)?:\s+$/.test(frase) && nomeado && idadeNomeado <= 3) corrente = nomeado;
          else corrente = "pessoa";
          // Nos livros com lista conferida, só é fala de Jesus o que a lista marca.
          if (corrente === "jesus" && temJesus && !eJesus) corrente = "pessoa";
          if (corrente === "deus" || corrente === "jesus") {
            nomeado = corrente;
            idadeNomeado = 0;
          }
          pos = m.index + m[0].length;
        }
        por(texto.slice(pos), corrente);
      }
      saida.set(String(n), partes);
    }
    falasCache.set(chaveCache, saida);
    return saida;
  }
  function htmlComFalas(partes, texto) {
    if (!partes) return formatarVerso(texto);
    return partes.map(([t, quem]) => (quem === "narrador" ? formatarVerso(t) : '<span class="fala f-' + quem + '">' + formatarVerso(t) + "</span>")).join("");
  }

  // ---------- leitor ----------
  async function renderLeitor(rolarPara) {
    const vez = ++renderizacao;
    const livro = porCod.get(estado.livro);
    $("rotulo-livro").textContent = livro.nome + " " + estado.cap;
    document.title = livro.nome + " " + estado.cap + " · Estudo Bíblico";
    const interlinear = estado.interlinear && !livro.extra;
    $("btn-inter").setAttribute("aria-pressed", String(Boolean(estado.interlinear)));
    let versos;
    let inter = null;
    let glosas = {};
    let dados;
    try {
      dados = await carregarLivro(estado.versao, estado.livro);
      versos = dados[estado.cap] || [];
      if (interlinear) {
        [inter, glosas] = await Promise.all([carregarInter(estado.livro), carregarGlosas()]);
        inter = inter[estado.cap] || {};
      }
    } catch (e) {
      if (vez !== renderizacao) return;
      leitorEl.innerHTML = '<div class="leitor-interno"><p class="aviso">' + esc(e.message) + ".</p></div>";
      return;
    }
    if (vez !== renderizacao) return;

    const ant = vizinho(-1);
    const prox = vizinho(1);
    const rot = (x) => (x ? esc(porCod.get(x.cod).nome + " " + x.cap) : "");
    let html = '<div class="leitor-interno">';
    html += "<h1>" + esc(livro.nome) + " " + estado.cap + "</h1>";
    html += '<div class="sub">' + esc(livro.extra ? "Literatura extrabíblica" : livro.grupo) + " · " + esc(VERSOES[estado.versao].nome) + "</div>";
    if (livro.extra) {
      html +=
        '<p class="aviso">Este livro não faz parte do cânon protestante. Está aqui como leitura histórica: ajuda a entender o período entre os Testamentos. Veja o estudo sobre o cânon na Biblioteca.</p>';
    }
    if (interlinear) {
      html +=
        '<p class="aviso">Cada palavra do ' + (linguaDe(livro) === "hebraico" ? "hebraico (lido da direita para a esquerda)" : "grego") +
        " aparece com a pronúncia e o sentido básico em português. Toque numa palavra para ver a ficha completa.</p>";
    }
    if (!livro.extra && estado.cap === capitulos(estado.livro)[0]) html += htmlIntro(livro, dados);
    const falas = estado.ajustes.falas && !livro.extra ? falasDoCapitulo(estado.livro, estado.cap, versos) : null;
    if (falas) {
      html += '<p class="legenda-falas"><span class="fala f-deus">Deus</span><span class="fala f-jesus">Jesus</span><span class="fala f-pessoa">Outras pessoas</span><span>Narrador</span>' +
        '<small>Jesus segue uma lista conferida; Deus e as demais falas são detectados automaticamente e podem errar onde a fala termina.</small></p>';
    }
    html += '<div class="texto">';
    for (const [n, texto] of versos) {
      const cls = [interlinear ? "vi" : "v"];
      const tipoV = estado.tipos[chave(estado.livro, estado.cap, n)];
      const corpo = falas ? htmlComFalas(falas.get(String(n)), texto) : formatarVerso(texto);
      const cor = estado.marcas[chave(estado.livro, estado.cap, n)];
      if (cor) cls.push("m-" + cor);
      if (sel.includes(n)) cls.push("sel");
      if (estado.notas[chave(estado.livro, estado.cap, n)]) cls.push("tem-nota");
      if (interlinear) {
        const palavras = inter[n] || [];
        html +=
          '<div class="' + cls.join(" ") + '" data-v="' + esc(n) + '"' + (tipoV ? ' data-tipo="' + esc(tipoV) + '"' : "") + ">" +
          '<p class="vi-pt"><sup>' + esc(n) + "</sup>" + corpo + "</p>" +
          (palavras.length ? htmlPalavras(n, palavras, glosas, linguaDe(livro)) : "") + "</div>";
      } else {
        html += '<span class="' + cls.join(" ") + '" data-v="' + esc(n) + '"' + (tipoV ? ' data-tipo="' + esc(tipoV) + '"' : "") + "><sup>" + esc(n) + "</sup>" + corpo + "</span> ";
      }
    }
    html += "</div>";
    html += '<div class="rodape-cap">';
    html += ant ? '<button class="botao" data-ir="-1">‹ ' + rot(ant) + "</button>" : "<span></span>";
    html += prox ? '<button class="botao" data-ir="1">' + rot(prox) + " ›</button>" : "<span></span>";
    html += "</div>";
    html += '<p class="credito">' + esc(VERSOES[estado.versao].credito) + "</p>";
    html += "</div>";
    leitorEl.innerHTML = html;
    $("btn-anterior").disabled = !ant;
    $("btn-proximo").disabled = !prox;

    atualizarInline();
    const alvo = rolarPara && leitorEl.querySelector('[data-v="' + rolarPara + '"]');
    if (alvo) alvo.scrollIntoView({ block: "center" });
    else leitorEl.scrollTop = 0;
  }

  leitorEl.addEventListener("click", (ev) => {
    const ir = ev.target.closest("[data-ir]");
    if (ir) {
      const d = vizinho(Number(ir.dataset.ir));
      if (d) irPara(d.cod, d.cap);
      return;
    }
    const ferr = ev.target.closest("[data-f]");
    if (ferr) {
      acaoFerramenta(ferr);
      return;
    }
    const pal = ev.target.closest(".pal");
    if (pal) {
      abrirPalavra(pal.dataset.pal);
      return;
    }
    const lig = ev.target.closest("[data-lig]");
    if (lig && window.Vistas) {
      const p = lig.dataset.lig.split("|");
      if (p[0] === "pessoa") window.Vistas.irPessoa(p[1]);
      else if (p[0] === "local") window.Vistas.irLocal(p[1], p[2]);
      else if (p[0] === "dic") window.Vistas.irDicionario(p[1]);
      else if (p[0] === "dif" && window.Vistas.irDificil) window.Vistas.irDificil(p[1]);
      return;
    }
    const refLink = ev.target.closest("[data-ref]");
    if (refLink) {
      const [c, cp, vs] = refLink.dataset.ref.split("/");
      irPara(c, Number(cp), vs ? Number(vs) : null);
      return;
    }
    if (ev.target.closest(".inline-pal")) return;
    const gatilho = ev.target.closest(".v, .vi-pt");
    if (!gatilho) return;
    const el = gatilho.closest("[data-v]");
    const n = numVerso(el.dataset.v);
    const i = sel.indexOf(n);
    if (i === -1) sel.push(n);
    else sel.splice(i, 1);
    palavraSel = null;
    aplicarSelecaoNoLeitor();
    aba = "estudo";
    renderPainel();
  });

  function abrirPalavra(ref) {
    const p = ref.lastIndexOf(":");
    palavraSel = { v: numVerso(ref.slice(0, p)), i: Number(ref.slice(p + 1)) };
    aplicarSelecaoNoLeitor();
    aba = "estudo";
    if (celular()) abrirPainel();
    renderPainel();
  }

  // ---------- painel ----------
  function renderPainel() {
    document.querySelectorAll('.abas [role="tab"]').forEach((b) => {
      b.setAttribute("aria-selected", String(b.dataset.aba === aba));
      if (b.dataset.aba === "busca") b.hidden = !busca;
    });
    if (aba === "estudo") renderEstudo();
    else if (aba === "tempo") renderTempo();
    else if (aba === "biblioteca") renderBiblioteca();
    else if (aba === "caderno") renderCaderno();
    else renderBusca();
  }

  function fichaLivro(livro) {
    if (livro.extra) {
      return (
        "<h2>" + esc(livro.nome) + "</h2>" +
        '<p class="mudo">Literatura extrabíblica</p>' +
        "<p>Escrito no período intertestamentário ou próximo dele. Lido como fonte histórica, não como Escritura, na tradição protestante.</p>"
      );
    }
    const periodo = window.PERIODOS.find((p) => p.id === livro.periodo);
    return (
      "<h2>" + esc(livro.nome) + "</h2>" +
      '<p class="mudo">' + esc(livro.grupo) + " · " + (livro.testamento === "AT" ? "Antigo Testamento" : "Novo Testamento") + "</p>" +
      '<div class="cartao"><dl class="ficha">' +
      "<dt>Autor</dt><dd>" + esc(livro.autor) + "</dd>" +
      "<dt>Data</dt><dd>" + esc(livro.data) + "</dd>" +
      "<dt>Período</dt><dd>" + (periodo ? '<button class="link" data-aba-ir="tempo">' + esc(periodo.nome) + "</button>" : "—") + "</dd>" +
      "</dl><p>" + esc(livro.resumo) + "</p>" +
      ((window.INTRODUCOES || {})[livro.cod] && estado.cap !== capitulos(livro.cod)[0]
        ? '<p><button class="link" data-ref="' + livro.cod + "/" + capitulos(livro.cod)[0] + '">Ver a introdução do livro</button></p>'
        : "") +
      "</div>"
    );
  }

  async function renderEstudo() {
    const livro = porCod.get(estado.livro);
    const cod = estado.livro;
    const cap = estado.cap;

    if (palavraSel && !livro.extra) {
      renderPalavra();
      return;
    }
    if (!sel.length) {
      let html = fichaLivro(livro);
      html += '<p class="mudo">Toque em um versículo para ver o texto original, comparar traduções, marcar e anotar.</p>';
      const prefixo = cod + ".";
      const notas = Object.keys(estado.notas).filter((k) => k.startsWith(prefixo));
      if (notas.length) {
        html += "<h3>Suas anotações neste livro</h3>";
        for (const k of notas) {
          const [, c, v] = k.split(".");
          html +=
            '<button class="resultado" data-ref="' + esc(cod + "/" + c + "/" + v) + '"><b class="ref-mini">' +
            esc(livro.nome + " " + c + ":" + v) + "</b><span>" + esc(estado.notas[k]) + "</span></button>";
        }
      }
      painelEl.innerHTML = html;
      return;
    }

    const versos = sel.slice().sort((a, b) => a - b);
    const primeiro = versos[0];
    let html = "<h2>" + esc(refTexto(livro, cap, versos)) + "</h2>";
    html += '<p class="mudo"><button class="link" data-acao="limpar">Limpar seleção</button> · <button class="link" data-acao="copiar">Copiar texto</button></p>';
    html += '<p class="mudo">Grifar, anotar e salvar ficam na barra logo abaixo do versículo, no texto.</p>';
    html += '<div id="bloco-estrutura"></div><div id="bloco-original"></div><div id="bloco-paralelo"></div>';
    painelEl.innerHTML = html;
    painelEl.scrollTop = 0;

    // Original e tradução paralela chegam de forma assíncrona.
    const outra = estado.versao === "blivre" ? "bpm" : "blivre";
    const atual = () => estado.livro === cod && estado.cap === cap && sel.includes(primeiro) && aba === "estudo" && !palavraSel;
    if (!livro.extra) {
      try {
        // O original palavra por palavra aparece no leitor, logo abaixo do versículo selecionado.
        const [par, daqui] = await Promise.all([carregarLivro(outra, cod), carregarLivro(estado.versao, cod)]);
        if (!atual()) return;
        const be = $("bloco-estrutura");
        const escolhidos = (daqui[cap] || []).filter((x) => versos.includes(numVerso(x[0])));
        if (be && escolhidos.length) {
          be.innerHTML = "<h3>Estrutura da passagem</h3>" + '<div class="cartao">' + estrutura(escolhidos) + "</div>" +
            '<p class="mudo">Cada linha é uma oração; as recuadas dependem da anterior. Selecione vários versículos para ver o argumento inteiro.</p>';
        }
        const achar = (dados, v) => ((dados[cap] || []).find((x) => x[0] === v) || [])[1];
        let p = "<h3>" + esc(VERSOES[outra].nome) + "</h3>";
        for (const v of versos) {
          const tp = achar(par, v);
          if (tp) p += '<div class="cartao"><span class="ref-mini">' + esc(v) + '</span><p class="paralelo">' + formatarVerso(tp) + "</p></div>";
        }
        const bo = $("bloco-original");
        const bp = $("bloco-paralelo");
        if (bo) bo.innerHTML = '<p class="mudo" style="margin-top:14px">O original palavra por palavra está logo abaixo do versículo, no texto. Toque numa palavra para abrir a ficha.</p>';
        if (bp) bp.innerHTML = p;
      } catch (e) {
        const bo = $("bloco-original");
        if (bo && atual()) bo.innerHTML = '<p class="aviso">' + esc(e.message) + ".</p>";
      }
    }
  }

  // Definições do léxico vêm de terceiros: só <b>, <i> e quebras de linha passam.
  function limparDefinicao(d) {
    const s = String(d || "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/?ref[^>]*>/gi, "")
      .replace(/<(\/?)(b|i)>/gi, "\u0001$1$2\u0002");
    return esc(s.replace(/<[^>]*>/g, "")).replace(/\u0001(\/?)(b|i)\u0002/gi, "<$1$2>").replace(/\n{3,}/g, "\n\n").trim();
  }
  function rotuloRef(ref) {
    const [cod, cap, v] = ref.split(".");
    return porCod.get(cod).abrev + " " + cap + ":" + v;
  }
  function htmlRefs(refs, limite) {
    let html = "";
    for (const r of refs.slice(0, limite)) {
      html += '<button class="chip" data-ref="' + r.replace(/\./g, "/") + '">' + esc(rotuloRef(r)) + "</button>";
    }
    if (refs.length > limite) html += '<button class="chip" data-acao="mais-refs">Mostrar todos (' + refs.length + ")</button>";
    return html;
  }

  async function renderPalavra() {
    const alvo = palavraSel;
    const cod = estado.livro;
    const cap = estado.cap;
    const livro = porCod.get(cod);
    const lingua = linguaDe(livro);
    const cls = lingua === "hebraico" ? "heb" : "gre";
    const vale = () => palavraSel === alvo && estado.livro === cod && estado.cap === cap && aba === "estudo";
    const voltar = '<p><button class="link" data-acao="fechar-palavra">‹ ' + esc(livro.nome + " " + cap + ":" + alvo.v) + "</button></p>";
    painelEl.innerHTML = voltar + '<p class="mudo">Carregando a palavra…</p>';
    let w, glosas, verbetes;
    try {
      const [inter, g] = await Promise.all([carregarInter(cod), carregarGlosas()]);
      glosas = g;
      w = ((inter[cap] || {})[alvo.v] || [])[alvo.i];
      if (!w) throw new Error("Palavra não encontrada");
      verbetes = await Promise.all(w[2].map(carregarVerbete));
    } catch (e) {
      if (vale()) painelEl.innerHTML = voltar + '<p class="aviso">' + esc(e.message) + ".</p>";
      return;
    }
    if (!vale()) return;

    const iRaiz = w[4] >= 0 && w[4] < w[2].length ? w[4] : 0;
    const tag = w[2][iRaiz];
    const vb = verbetes[iRaiz] || {};
    const significado = glosaLimpa(glosas[tag]);
    const analise = window.descreverMorfologia(w[3], lingua);

    let html = voltar;
    html += '<span class="etiqueta">' + (lingua === "hebraico" ? (w[3][0] === "A" ? "Aramaico" : "Hebraico") : "Grego") + " · Strong " + esc(tag) + "</span>";
    html += '<p class="lema ' + cls + '" lang="' + (lingua === "hebraico" ? "he" : "grc") + '">' + esc(vb.l || w[0]) + "</p>";
    if (vb.t) html += '<p class="mudo"><i>' + esc(vb.t) + "</i> · forma de dicionário</p>";

    html += "<h3>Significado</h3>";
    html += significado
      ? '<p class="significado">' + esc(significado) + "</p>"
      : '<p class="significado">' + esc(vb.e || "—") + ' <span class="mudo">(em inglês; tradução pendente)</span></p>';

    const explicacao = (await carregarArquivo("dados/lexico/verbetes-pt.json").catch(() => ({})))[tag];
    if (!vale()) return;
    if (explicacao) {
      html += "<h3>Explicação</h3><p>" + ligarRefs(esc(explicacao)) + "</p>";
      html += '<p class="mudo">Verbete redigido por IA a partir de léxicos de domínio público. Confira nas passagens antes de usar em ensino.</p>';
    }

    html += '<h3>Nesta passagem</h3><div class="cartao">';
    html += '<p class="lema ' + cls + '" style="font-size:26px">' + esc(w[0]) + "</p>";
    html += '<p class="mudo"><i>' + esc(w[1]) + "</i></p>";
    if (analise) html += "<p>" + esc(analise.charAt(0).toUpperCase() + analise.slice(1)) + ".</p>";
    if (w[3]) html += '<p class="mudo">Código morfológico: ' + esc(w[3]) + "</p>";
    html += "</div>";

    if (w[2].length > 1) {
      html += '<h3>Composição da palavra</h3><div class="cartao"><ul class="composicao">';
      w[2].forEach((t, k) => {
        const v = verbetes[k] || {};
        const papel = k === iRaiz ? "raiz" : k < iRaiz ? "prefixo" : "sufixo";
        html +=
          '<li><span class="parte ' + cls + '">' + esc((v.l || "").replace(/\//g, "")) + "</span><span>" +
          esc(glosaLimpa(glosas[t]) || v.e || "—") + '</span><span class="mudo">' + papel + "</span></li>";
      });
      html += "</ul></div>";
    }

    refsPalavra = vb.r || [];
    if (vb.n) {
      html += "<h3>Onde aparece</h3>";
      html +=
        '<p class="mudo">' + vb.n + (vb.n === 1 ? " ocorrência" : " ocorrências") + " no " +
        (lingua === "hebraico" ? "Antigo Testamento" : "Novo Testamento (Textus Receptus)") +
        (refsPalavra.length ? ", em " + refsPalavra.length + (refsPalavra.length === 1 ? " versículo." : " versículos.") : ".") + "</p>";
      if (refsPalavra.length) html += '<div class="chips" id="refs-palavra">' + htmlRefs(refsPalavra, 60) + "</div>";
    }

    if (vb.d) {
      html +=
        '<h3>Léxico</h3><details><summary>Verbete completo de Abbott-Smith (em inglês)</summary><div class="definicao cartao">' +
        limparDefinicao(vb.d) + "</div></details>";
    }
    painelEl.innerHTML = html;
    painelEl.scrollTop = 0;
  }

  function renderTempo() {
    const atual = porCod.get(estado.livro);
    let html = "<h2>Linha do tempo</h2>";
    html += '<p class="mudo">Datas aproximadas, na cronologia tradicional. Cada livro aparece no período que ele narra ou em que foi escrito.</p>';
    html += '<div class="tempo">';
    for (const p of window.PERIODOS) {
      const doPeriodo = livros.filter((l) => l.periodo === p.id);
      const ehAtual = !atual.extra && atual.periodo === p.id;
      html += '<section class="periodo' + (ehAtual ? " atual" : "") + '" style="--cor:' + p.cor + '"><div class="cartao">';
      html += "<h4>" + esc(p.nome) + '</h4><div class="datas">' + esc(p.datas) + "</div>";
      html += "<p>" + esc(p.resumo) + "</p>";
      html += '<ul class="eventos">';
      for (const [quando, oque] of p.eventos) {
        html += '<li><span class="quando">' + esc(quando) + "</span><span>" + esc(oque) + "</span></li>";
      }
      html += "</ul>";
      if (p.nota) html += '<p class="mudo">' + esc(p.nota) + "</p>";
      if (doPeriodo.length || p.id === "intertestamento") {
        html += '<div class="chips">';
        for (const l of doPeriodo) {
          html += '<button class="chip' + (l.cod === estado.livro ? " atual" : "") + '" data-ref="' + l.cod + '/1">' + esc(l.nome) + "</button>";
        }
        if (p.id === "intertestamento") {
          html += '<button class="chip" data-ref="1MA/1">1 Macabeus</button><button class="chip" data-estudo="intertestamento">Ler o estudo</button>';
        }
        html += "</div>";
      }
      html += "</div></section>";
    }
    html += "</div>";
    painelEl.innerHTML = html;
    const el = painelEl.querySelector(".periodo.atual");
    if (el) el.scrollIntoView({ block: "start" });
    else painelEl.scrollTop = 0;
  }

  // Transforma "Jo 3:16" ou "Romanos 8" dentro de um texto já escapado em link para o leitor.
  function ligarRefs(textoEscapado) {
    return textoEscapado.replace(
      /((?:[1-3]\s?)?[A-ZÀ-Ý][A-Za-zÀ-ÿ]+(?:\s(?:dos|de)\s[A-ZÀ-Ý][A-Za-zÀ-ÿ]+)?)\s(\d{1,3})(?:[:.](\d{1,3}))?(?:[-–]\d{1,3})?/g,
      (m, nome, cap, v) => {
        const cru = nome.trim().toLowerCase().replace(/\s+/g, " ");
        const livro = todos.find((l) => l.abrev.toLowerCase() === cru || l.nome.toLowerCase() === cru);
        if (!livro || !capitulos(livro.cod, livro.extra ? "bpm" : estado.versao).includes(Number(cap))) return m;
        return '<button class="link" data-ref="' + livro.cod + "/" + cap + (v ? "/" + v : "") + '">' + m + "</button>";
      }
    );
  }
  function meuEstudo(id) {
    return estado.estudos.find((x) => x.id === id);
  }
  function renderMeuEstudo() {
    const e = meuEstudo(estudoAberto.slice(4));
    if (!e) {
      estudoAberto = null;
      renderBiblioteca();
      return;
    }
    let html = '<p><button class="link" data-estudo="">‹ Biblioteca</button></p>';
    if (editandoEstudo) {
      html += '<span class="etiqueta">Meu estudo · editando</span>';
      html += '<input id="est-titulo" class="campo" type="text" placeholder="Título do estudo" value="' + esc(e.titulo) + '">';
      html +=
        '<textarea id="est-texto" class="nota" style="min-height:320px" placeholder="Escreva seu estudo ou esboço. Uma linha começando com # vira subtítulo. Referências como Jo 3:16 ou Romanos 8:28 viram links.">' +
        esc(e.texto) + "</textarea>";
      html +=
        '<p class="ferr"><button class="botao" data-acao="inserir-ref">Inserir ' + esc(refAtual()) + "</button>" +
        '<button class="botao" data-acao="concluir-estudo">Concluir</button></p>';
      html += '<p class="mudo">Salva sozinho enquanto você escreve.</p>';
    } else {
      html += '<div class="artigo"><span class="etiqueta">Meu estudo</span><h2>' + esc(e.titulo || "Sem título") + "</h2>";
      for (const linha of e.texto.split("\n")) {
        if (!linha.trim()) continue;
        html += linha.startsWith("#") ? "<h4>" + esc(linha.replace(/^#+\s*/, "")) + "</h4>" : "<p>" + ligarRefs(esc(linha)) + "</p>";
      }
      if (!e.texto.trim()) html += '<p class="mudo">Estudo vazio. Toque em Editar para escrever.</p>';
      html += "</div>";
      html +=
        '<p class="ferr"><button class="botao" data-acao="editar-estudo">Editar</button>' +
        '<button class="botao" data-acao="excluir-estudo">Excluir</button></p>';
    }
    painelEl.innerHTML = html;
    painelEl.scrollTop = 0;
  }
  // Modelo de esboço expositivo: parte do texto aberto no leitor.
  function modeloEsboco() {
    const ref = refAtual();
    return [
      "# Texto",
      ref,
      "",
      "# Contexto",
      "Quem escreveu, para quem e em que situação. O que vem antes e depois da passagem.",
      "",
      "# Ideia central",
      "Em uma frase: o que este texto afirma?",
      "",
      "# Introdução",
      "Como despertar a atenção e mostrar por que o assunto importa.",
      "",
      "# 1. Primeiro ponto",
      "Versículos: ",
      "Explicação: o que o texto diz.",
      "Ilustração: ",
      "Aplicação: ",
      "",
      "# 2. Segundo ponto",
      "Versículos: ",
      "Explicação: ",
      "Ilustração: ",
      "Aplicação: ",
      "",
      "# 3. Terceiro ponto",
      "Versículos: ",
      "Explicação: ",
      "Ilustração: ",
      "Aplicação: ",
      "",
      "# Como o texto aponta para Cristo",
      "",
      "# Conclusão e apelo",
      "Retome a ideia central e diga que resposta o texto pede.",
      "",
      "# Perguntas para o grupo",
      "1. ",
      "2. ",
      "3. ",
    ].join("\n");
  }
  function refAtual() {
    const livro = porCod.get(estado.livro);
    return refTexto(livro, estado.cap, sel.slice());
  }

  function renderBiblioteca() {
    if (estudoAberto && estudoAberto.startsWith("meu:")) {
      renderMeuEstudo();
      return;
    }
    if (estudoAberto) {
      const e = window.ESTUDOS.find((x) => x.id === estudoAberto);
      let html = '<p><button class="link" data-estudo="">‹ Biblioteca</button></p>';
      html += '<div class="artigo"><span class="etiqueta">' + esc(e.categoria) + "</span><h2>" + esc(e.titulo) + "</h2>";
      for (const par of e.corpo) {
        html += par.startsWith("## ") ? "<h4>" + esc(par.slice(3)) + "</h4>" : "<p>" + ligarRefs(esc(par)) + "</p>";
      }
      html += "</div>";
      painelEl.innerHTML = html;
      painelEl.scrollTop = 0;
      return;
    }
    let html = "<h2>Biblioteca</h2>";
    html += "<h3>Meus estudos</h3>";
    for (const e of estado.estudos) {
      html +=
        '<button class="cartao estudo-item" data-estudo="meu:' + esc(e.id) + '"><span class="etiqueta">Meu estudo</span><strong>' +
        esc(e.titulo || "Sem título") + '</strong><span class="mudo">' + esc(e.texto.replace(/\s+/g, " ").slice(0, 110)) + "</span></button>";
    }
    if (!estado.estudos.length) html += '<p class="mudo">Escreva seus próprios estudos e esboços, com os versículos ligados ao texto.</p>';
    html +=
      '<p class="ferr"><button class="botao" data-acao="novo-estudo">+ Novo estudo</button>' +
      '<button class="botao" data-acao="novo-esboco">+ Esboço de sermão ou aula</button></p>';
    html += "<h3>Estudos do app</h3>";
    for (const e of window.ESTUDOS) {
      html +=
        '<button class="cartao estudo-item" data-estudo="' + e.id + '"><span class="etiqueta">' + esc(e.categoria) +
        "</span><strong>" + esc(e.titulo) + '</strong><span class="mudo">' + esc(e.resumo) + "</span></button>";
    }
    painelEl.innerHTML = html;
    painelEl.scrollTop = 0;
  }

  // ---------- busca ----------
  function acharLivro(texto) {
    const cru = texto.trim().toLowerCase().replace(/\s+/g, " ");
    const exato = todos.find((l) => l.abrev.toLowerCase() === cru || l.nome.toLowerCase() === cru);
    if (exato) return exato;
    const n = semAcento(cru).replace(/ /g, "");
    const lista = todos.map((l) => ({ l, abrev: semAcento(l.abrev), nome: semAcento(l.nome).replace(/ /g, "") }));
    const achado = lista.find((x) => x.abrev === n) || lista.find((x) => x.nome === n) || (n.length >= 3 && lista.find((x) => x.nome.startsWith(n)));
    return achado ? achado.l : null;
  }
  function lerReferencia(texto) {
    const m = texto.trim().match(/^(\d?\s*[^\d:.,]+?)\s*(\d+)?(?:\s*[:.,]\s*(\d+))?$/);
    if (!m) return null;
    const livro = acharLivro(m[1]);
    if (!livro) return null;
    return { cod: livro.cod, cap: m[2] ? Number(m[2]) : 1, verso: m[3] ? Number(m[3]) : null };
  }
  // Posição da próxima ocorrência do termo como palavra inteira (-1 se não houver).
  function acharPalavra(norm, termo, de) {
    const letra = (c) => c !== undefined && c.toLowerCase() !== c.toUpperCase();
    let i = norm.indexOf(termo, de || 0);
    while (i !== -1) {
      if (!letra(norm[i - 1]) && !letra(norm[i + termo.length])) return i;
      i = norm.indexOf(termo, i + 1);
    }
    return -1;
  }
  async function buscar(texto) {
    const termo = texto.trim();
    if (!termo) return;
    const ref = lerReferencia(termo);
    if (ref) {
      irPara(ref.cod, ref.cap, ref.verso);
      return;
    }
    const termos = semAcento(termo).split(/[^\p{L}\p{N}]+/u).filter((t) => t.length > 1);
    if (!termos.length) return;
    const versao = estado.versao;
    busca = { termo, versao, carregando: true, itens: [], total: 0 };
    aba = "busca";
    abrirPainel();
    renderPainel();
    try {
      const dados = await Promise.all(livros.map((l) => carregarLivro(versao, l.cod)));
      const itens = [];
      let total = 0;
      dados.forEach((caps, i) => {
        for (const cap of Object.keys(caps)) {
          for (const [n, t] of caps[cap]) {
            const norm = semAcento(t);
            if (termos.every((x) => acharPalavra(norm, x) !== -1)) {
              total++;
              if (itens.length < 200) itens.push({ livro: livros[i], cap: Number(cap), v: n, texto: t, norm });
            }
          }
        }
      });
      if (!busca || busca.termo !== termo) return;
      busca = { termo, versao, carregando: false, itens, total, termos };
    } catch (e) {
      busca = { termo, versao, carregando: false, itens: [], total: 0, erro: e.message };
    }
    if (aba === "busca") renderPainel();
  }
  function destacar(item, termos) {
    // O texto normalizado tem o mesmo comprimento do original quando este está em NFC.
    if (item.norm.length !== item.texto.length) return esc(item.texto);
    const faixas = [];
    for (const t of termos) {
      let i = acharPalavra(item.norm, t);
      while (i !== -1) {
        faixas.push([i, i + t.length]);
        i = acharPalavra(item.norm, t, i + t.length);
      }
    }
    faixas.sort((a, b) => a[0] - b[0]);
    let html = "";
    let pos = 0;
    for (const [a, b] of faixas) {
      if (a < pos) continue;
      html += esc(item.texto.slice(pos, a)) + "<mark>" + esc(item.texto.slice(a, b)) + "</mark>";
      pos = b;
    }
    return html + esc(item.texto.slice(pos));
  }
  function renderBusca() {
    if (!busca) {
      painelEl.innerHTML = "";
      return;
    }
    let html = "<h2>Busca</h2>";
    if (busca.carregando) {
      html += '<p class="mudo">Procurando “' + esc(busca.termo) + "”…</p>";
    } else if (busca.erro) {
      html += '<p class="aviso">' + esc(busca.erro) + ".</p>";
    } else {
      html +=
        '<p class="mudo">' + busca.total + (busca.total === 1 ? " versículo" : " versículos") + " com “" + esc(busca.termo) + "” na " +
        esc(VERSOES[busca.versao].nome) + (busca.total > busca.itens.length ? ". Mostrando os primeiros " + busca.itens.length + "." : ".") + "</p>";
      for (const it of busca.itens) {
        html +=
          '<button class="resultado" data-ref="' + it.livro.cod + "/" + it.cap + "/" + esc(it.v) + '"><b class="ref-mini">' +
          esc(it.livro.nome + " " + it.cap + ":" + it.v) + "</b><span>" + destacar(it, busca.termos) + "</span></button>";
      }
    }
    painelEl.innerHTML = html;
    painelEl.scrollTop = 0;
  }

  // ---------- eventos do painel ----------
  function abrirPainel() {
    $("painel").classList.add("aberto");
  }
  function fecharPainel() {
    $("painel").classList.remove("aberto");
  }
  function aplicarSelecaoNoLeitor() {
    leitorEl.querySelectorAll("[data-v]").forEach((el) => {
      const n = numVerso(el.dataset.v);
      const k = chave(estado.livro, estado.cap, n);
      el.classList.toggle("sel", sel.includes(n));
      CORES.forEach((c) => el.classList.toggle("m-" + c, estado.marcas[k] === c));
      el.classList.toggle("tem-nota", Boolean(estado.notas[k]));
      if (estado.tipos[k]) el.dataset.tipo = estado.tipos[k];
      else delete el.dataset.tipo;
    });
    marcarPalavraAtiva();
    atualizarInline();
  }
  function marcarPalavraAtiva() {
    const ativa = palavraSel ? palavraSel.v + ":" + palavraSel.i : null;
    document.querySelectorAll(".pal").forEach((el) => el.classList.toggle("ativa", el.dataset.pal === ativa));
  }
  // No modo de leitura normal, mostra o original palavra por palavra logo abaixo de cada versículo selecionado.
  async function atualizarInline() {
    const livro = porCod.get(estado.livro);
    const cod = estado.livro;
    const cap = estado.cap;
    const modo = Boolean(estado.interlinear);
    const querem = sel.slice();
    leitorEl.querySelectorAll(".inline-pal").forEach((el) => {
      if (!querem.includes(numVerso(el.dataset.de))) el.remove();
    });
    if (!querem.length) return;
    // No modo interlinear as palavras já estão na tela; o bloco traz só as ferramentas.
    const comPalavras = !modo && !livro.extra;
    let inter = {};
    let glosas = {};
    if (comPalavras) {
      try {
        [inter, glosas] = await Promise.all([carregarInter(cod), carregarGlosas()]);
      } catch (e) {
        inter = {};
      }
    }
    if (estado.livro !== cod || estado.cap !== cap || Boolean(estado.interlinear) !== modo) return;
    for (const v of sel) {
      if (leitorEl.querySelector('.inline-pal[data-de="' + v + '"]')) continue;
      const ancora = leitorEl.querySelector(modo ? '.vi[data-v="' + v + '"] .vi-pt' : '.v[data-v="' + v + '"]');
      if (!ancora) continue;
      const palavras = (inter[cap] || {})[v] || [];
      const bloco = document.createElement("div");
      bloco.className = "inline-pal" + (modo ? " so-ferr" : "");
      bloco.dataset.de = v;
      const nota = estado.notas[chave(cod, cap, v)];
      bloco.innerHTML =
        htmlFerramentas(v) +
        htmlCitacoes(cod, cap, v) +
        htmlLigacoes(cod, ancora.textContent) +
        htmlDificeis(cod, estado.cap, v) +
        '<div class="ferr-nota">' + (nota ? htmlNota(v) : "") + '</div><div class="ferr-comp"></div><div class="ferr-refs"></div>' +
        (palavras.length ? htmlPalavras(v, palavras, glosas, linguaDe(livro)) : "");
      ancora.after(bloco);
    }
    marcarPalavraAtiva();
  }

  // ---------- ferramentas do versículo (grifar, anotar, salvar, copiar, comparar) ----------
  function htmlFerramentas(v) {
    const k = chave(estado.livro, estado.cap, v);
    const cor = estado.marcas[k] || "";
    let html = '<div class="ferr" role="toolbar" aria-label="Ferramentas do versículo ' + esc(v) + '">';
    html += '<span class="ferr-grupo" aria-label="Grifar">';
    for (const c of CORES) {
      html += '<button class="cor" data-f="cor" data-cor="' + c + '" title="Grifar de ' + c + '" aria-label="Grifar de ' + c + '" aria-pressed="' + (cor === c) + '"></button>';
    }
    html += '<button class="cor" data-f="cor" data-cor="" title="Tirar o grifo" aria-label="Tirar o grifo">×</button></span>';
    html += '<button class="ferr-btn" data-f="anotar" aria-pressed="' + Boolean(estado.notas[k]) + '">✎ Anotar</button>';
    html += '<button class="ferr-btn" data-f="salvar" aria-pressed="' + Boolean(estado.salvos[k]) + '">' + (estado.salvos[k] ? "★ Salvo" : "☆ Salvar") + "</button>";
    html += '<button class="ferr-btn" data-f="copiar">Copiar</button>';
    html += '<button class="ferr-btn" data-f="comparar">Comparar</button>';
    if (!porCod.get(estado.livro).extra) html += '<button class="ferr-btn" data-f="refs">Referências</button>';
    html += '<button class="ferr-btn" data-f="link">Copiar link</button>';
    html += '<span class="ferr-tipos" aria-label="Classificar o versículo">';
    for (const t of Object.keys(TIPOS_V)) {
      html += '<button class="ferr-btn tipo-' + t + '" data-f="tipo" data-tipo="' + t + '" aria-pressed="' + (estado.tipos[k] === t) + '">' + TIPOS_V[t] + "</button>";
    }
    html += "</span>";
    return html + "</div>";
  }
  // Citações do AT no NT (dados/citacoes.js): índice por versículo, nos dois sentidos.
  let indiceCitacoes = null;
  function partesRef(ref) {
    const m = String(ref).match(/^(\S+)\s+(\d+):(\d+)(?:-(\d+))?$/);
    return m && porCod.has(m[1]) ? { cod: m[1], cap: Number(m[2]), ini: Number(m[3]), fim: Number(m[4] || m[3]) } : null;
  }
  function rotuloPartes(p) {
    return porCod.get(p.cod).abrev + " " + p.cap + ":" + p.ini + (p.fim > p.ini ? "–" + p.fim : "");
  }
  function htmlCitacoes(cod, cap, v) {
    if (!Array.isArray(window.CITACOES)) return "";
    if (!indiceCitacoes) {
      indiceCitacoes = new Map();
      const por = (p, outro, tipo) => {
        for (let n = p.ini; n <= p.fim; n++) {
          const k = chave(p.cod, p.cap, n);
          if (!indiceCitacoes.has(k)) indiceCitacoes.set(k, []);
          indiceCitacoes.get(k).push({ outro, tipo });
        }
      };
      for (const c of window.CITACOES) {
        const nt = partesRef(c[0]);
        const at = partesRef(c[1]);
        if (!nt || !at) continue;
        por(nt, at, "Cita");
        por(at, nt, "Citado em");
      }
    }
    const lista = indiceCitacoes.get(chave(cod, cap, v));
    if (!lista) return "";
    const vistos = new Set();
    let html = '<p class="cita">';
    for (const tipo of ["Cita", "Citado em"]) {
      const itens = lista.filter((x) => x.tipo === tipo);
      if (!itens.length) continue;
      html += "<b>" + tipo + ":</b> ";
      for (const x of itens) {
        const r = rotuloPartes(x.outro);
        if (vistos.has(r)) continue;
        vistos.add(r);
        html += '<button class="link" data-ref="' + x.outro.cod + "/" + x.outro.cap + "/" + x.outro.ini + '">' + esc(r) + "</button> ";
      }
    }
    return html + "</p>";
  }
  // Ligações do versículo com as outras áreas: pessoas, lugares do mapa e termos do dicionário citados no texto.
  let indiceLigacoes = null;
  function montarIndiceLigacoes() {
    const base = (s) => String(s).split("(")[0].trim();
    const itens = [];
    const lugares = new Set();
    const mapa = window.MAPA || { regioes: [], cidades: [] };
    for (const r of mapa.regioes) {
      const nomes = new Set(base(r.nome).split(" e ").map((x) => x.trim()));
      const par = r.nome.match(/\(([A-ZÀ-Ý][\wÀ-ÿ-]+)\)/);
      if (par) nomes.add(par[1]);
      for (const n of nomes) {
        if (n.length < 3) continue;
        itens.push({ tipo: "local", nome: n, rotulo: r.nome.split("(")[0].trim(), sub: "região", chave: "r:" + r.id, eras: r.eras });
        lugares.add(n);
      }
    }
    for (const c of mapa.cidades) {
      const nomes = new Set([base(c.nome)]);
      if (/^(Antioquia|Cesareia) /.test(c.nome)) nomes.add(c.nome.split(" ")[0]);
      for (const n of nomes) {
        itens.push({ tipo: "local", nome: n, rotulo: base(c.nome), sub: "cidade", chave: "c:" + c.nome, eras: c.eras });
        lugares.add(n);
      }
    }
    const principal = (p) => base(p.nome).replace(/,.*$/, "").trim();
    const principais = new Set((window.PESSOAS || []).map(principal));
    for (const p of window.PESSOAS || []) {
      const nomes = new Set([principal(p)]);
      for (const o of String(p.outros || "").split(";")) {
        const n = base(o).replace(/,.*$/, "").trim();
        // Outros nomes só valem se forem nome próprio e não se confundirem com um lugar ("Israel", "Edom")
        // nem com o nome principal de outra pessoa ("José" para Barnabé, "Simão" para Pedro).
        if (n.length >= 4 && /^[A-ZÀ-Ý]/.test(n) && !lugares.has(n) && !principais.has(n)) nomes.add(n);
      }
      for (const n of nomes) if (n.length >= 2) itens.push({ tipo: "pessoa", nome: n, rotulo: p.nome, id: p.id, refs: p.refs || [] });
    }
    for (const d of window.DICIONARIO || []) {
      const n = base(d.termo);
      if (n.length >= 5) itens.push({ tipo: "dic", nome: n, rotulo: n, termo: d.termo });
    }
    // Nomes mais longos primeiro; itens com o mesmo nome ficam juntos (o teste abaixo depende disso).
    itens.sort((a, b) => b.nome.length - a.nome.length || a.nome.localeCompare(b.nome));
    for (const it of itens) {
      const padrao = it.nome.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      it.re = new RegExp("(?<![\\p{L}\\p{N}])" + padrao + "(?![\\p{L}\\p{N}])", it.tipo === "dic" ? "giu" : "gu");
    }
    return itens;
  }
  // Passagens difíceis (dados/dificeis.js) que citam este versículo.
  function htmlDificeis(cod, cap, v) {
    const achadas = (window.DIFICEIS || []).filter((d) => (d.refs || []).some((x) => {
      const p = partesRef(x);
      return p && p.cod === cod && p.cap === Number(cap) && Number(v) >= p.ini && Number(v) <= p.fim;
    }));
    if (!achadas.length) return "";
    return '<div class="ligacoes"><span class="mudo">Passagem difícil:</span>' +
      achadas.map((d) => '<button class="chip lig-dif" data-lig="dif|' + esc(d.id) + '">' + esc(d.titulo) + "</button>").join("") + "</div>";
  }
  function htmlLigacoes(cod, textoBruto) {
    if (!window.PESSOAS && !window.MAPA && !window.DICIONARIO) return "";
    if (!indiceLigacoes) indiceLigacoes = montarIndiceLigacoes();
    const livro = porCod.get(cod);
    if (livro.extra) return "";
    const era = livro.testamento === "AT" ? "at" : "nt";
    let texto = " " + textoBruto.replace(/^\s*\d+/, "") + " ";
    const achados = [];
    let nomeAnterior = null;
    let achouAnterior = false;
    for (const it of indiceLigacoes) {
      // Itens com o mesmo nome (vários "José") são testados contra o mesmo texto; nomes mais longos apagam o trecho
      // para que "Maria Madalena" não conte também como "Maria".
      if (it.nome !== nomeAnterior) {
        if (achouAnterior) texto = texto.replace(indiceLigacoes.find((x) => x.nome === nomeAnterior).re, " \u0000 ");
        nomeAnterior = it.nome;
        achouAnterior = false;
      }
      it.re.lastIndex = 0;
      if (it.re.test(texto)) {
        achados.push(it);
        achouAnterior = true;
      }
    }
    if (!achados.length) return "";
    const vistos = new Set();
    let chips = "";
    // Pessoas: se há homônimos, ficam só os que têm passagem neste livro (quando algum tem).
    const pessoas = achados.filter((x) => x.tipo === "pessoa");
    for (const nome of new Set(pessoas.map((x) => x.nome))) {
      const cand = pessoas.filter((x) => x.nome === nome);
      const doLivro = cand.filter((x) => x.refs.some((r) => r.startsWith(cod + " ")));
      for (const x of doLivro.length ? doLivro : cand) {
        if (vistos.has("p" + x.id)) continue;
        vistos.add("p" + x.id);
        chips += '<button class="chip lig-pessoa" data-lig="pessoa|' + esc(x.id) + '" title="Abrir a ficha da pessoa">' + esc(x.rotulo) + "</button>";
      }
    }
    for (const x of achados.filter((y) => y.tipo === "local")) {
      if (vistos.has(x.chave)) continue;
      vistos.add(x.chave);
      const e = x.eras.includes(era) ? era : x.eras[0];
      chips += '<button class="chip lig-local" data-lig="local|' + esc(x.chave) + "|" + e + '" title="Ver no mapa (' + x.sub + ')">' + esc(x.rotulo) + (x.sub === "região" ? " (região)" : "") + "</button>";
    }
    for (const x of achados.filter((y) => y.tipo === "dic")) {
      if (vistos.has("d" + x.termo)) continue;
      vistos.add("d" + x.termo);
      chips += '<button class="chip lig-dic" data-lig="dic|' + esc(x.termo) + '" title="Abrir no dicionário">' + esc(x.rotulo) + "</button>";
    }
    return '<div class="ligacoes"><span class="mudo">Neste versículo:</span>' + chips + "</div>";
  }
  function htmlNota(v) {
    const k = chave(estado.livro, estado.cap, v);
    return (
      '<textarea class="nota" data-nota="' + esc(v) + '" placeholder="Escreva o que observou neste versículo. Salva sozinho.">' +
      esc(estado.notas[k] || "") + "</textarea>"
    );
  }
  function textoDoVerso(v) {
    const cap = estado.cap;
    return carregarLivro(estado.versao, estado.livro).then((dados) => ((dados[cap] || []).find((x) => x[0] === v) || [])[1] || "");
  }
  function piscar(btn, texto) {
    const antes = btn.textContent;
    btn.textContent = texto;
    setTimeout(() => {
      if (btn.isConnected) btn.textContent = antes;
    }, 1400);
  }
  function acaoFerramenta(btn) {
    const bloco = btn.closest(".inline-pal");
    const v = numVerso(bloco.dataset.de);
    const livro = porCod.get(estado.livro);
    const k = chave(estado.livro, estado.cap, v);
    const f = btn.dataset.f;
    const redesenhar = () => {
      bloco.querySelector(".ferr").outerHTML = htmlFerramentas(v);
    };
    if (f === "cor") {
      if (btn.dataset.cor) estado.marcas[k] = btn.dataset.cor;
      else delete estado.marcas[k];
      salvar();
      aplicarSelecaoNoLeitor();
      redesenhar();
    } else if (f === "tipo") {
      if (estado.tipos[k] === btn.dataset.tipo) delete estado.tipos[k];
      else estado.tipos[k] = btn.dataset.tipo;
      salvar();
      aplicarSelecaoNoLeitor();
      redesenhar();
      if (aba === "caderno") renderPainel();
    } else if (f === "salvar") {
      if (estado.salvos[k]) delete estado.salvos[k];
      else estado.salvos[k] = Date.now();
      salvar();
      redesenhar();
      if (aba === "caderno") renderPainel();
    } else if (f === "anotar") {
      const caixa = bloco.querySelector(".ferr-nota");
      if (caixa.firstChild) {
        caixa.innerHTML = "";
      } else {
        caixa.innerHTML = htmlNota(v);
        caixa.firstChild.focus();
      }
    } else if (f === "copiar") {
      textoDoVerso(v).then((t) => {
        const saida = t + " (" + refTexto(livro, estado.cap, [v]) + ", " + VERSOES[estado.versao].sigla + ")";
        if (navigator.clipboard) navigator.clipboard.writeText(saida).then(() => piscar(btn, "Copiado"), () => {});
      });
    } else if (f === "link") {
      const url = location.origin + location.pathname + "#" + estado.livro + "/" + estado.cap + "/" + v;
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(() => piscar(btn, "Link copiado"), () => {});
    } else if (f === "refs") {
      const caixa = bloco.querySelector(".ferr-refs");
      if (caixa.firstChild) {
        caixa.innerHTML = "";
        return;
      }
      mostrarRefsCruzadas(caixa, estado.livro, estado.cap, v);
    } else if (f === "comparar") {
      const caixa = bloco.querySelector(".ferr-comp");
      if (caixa.firstChild) {
        caixa.innerHTML = "";
        return;
      }
      const outra = estado.versao === "blivre" ? "bpm" : "blivre";
      const cap = estado.cap;
      carregarLivro(outra, estado.livro).then(
        (dados) => {
          const t = ((dados[cap] || []).find((x) => x[0] === v) || [])[1];
          caixa.innerHTML =
            '<p class="comp"><b class="ref-mini">' + esc(VERSOES[outra].nome) + "</b> " +
            (t ? formatarVerso(t) : "Este versículo não está nessa tradução.") + "</p>";
        },
        () => {
          caixa.innerHTML = '<p class="comp">Este livro não está na outra tradução.</p>';
        }
      );
    }
  }

  // Referências cruzadas (dados/refs, OpenBible.info CC BY): passagens relacionadas ao versículo, com o texto.
  async function mostrarRefsCruzadas(caixa, cod, cap, v) {
    caixa.innerHTML = '<p class="comp mudo">Procurando passagens relacionadas…</p>';
    let lista;
    try {
      lista = (await carregarArquivo("dados/refs/" + cod + ".json"))[cap + "." + v] || [];
    } catch (e) {
      lista = [];
    }
    if (!caixa.isConnected) return;
    if (!lista.length) {
      caixa.innerHTML = '<p class="comp mudo">Nenhuma referência cruzada cadastrada para este versículo.</p>';
      return;
    }
    const itens = lista
      .map((r) => {
        const m = r.match(/^(\w+)\.(\d+)\.(\d+)(?:-(\d+))?$/);
        return m && porCod.has(m[1]) ? { cod: m[1], cap: Number(m[2]), ini: Number(m[3]), fim: Number(m[4] || m[3]) } : null;
      })
      .filter(Boolean);
    const codigos = [...new Set(itens.map((x) => x.cod))];
    const dados = {};
    await Promise.all(codigos.map((c) => carregarLivro(estado.versao, c).then((d) => (dados[c] = d), () => (dados[c] = {}))));
    if (!caixa.isConnected) return;
    let html = '<div class="refs-cruz"><p class="mudo">' + itens.length + " passagens relacionadas, das mais para as menos indicadas.</p>";
    for (const x of itens) {
      const versos = (dados[x.cod][x.cap] || []).filter((y) => typeof y[0] === "number" && y[0] >= x.ini && y[0] <= x.fim);
      html +=
        '<button class="resultado" data-ref="' + x.cod + "/" + x.cap + "/" + x.ini + '"><b class="ref-mini">' + esc(rotuloPartes(x)) + "</b><span>" +
        versos.map((y) => formatarVerso(y[1])).join(" ") + "</span></button>";
    }
    html += '<p class="mudo">Fonte: OpenBible.info (CC BY), a partir do Treasury of Scripture Knowledge.</p></div>';
    caixa.innerHTML = html;
  }

  let temporizadorNota = null;
  leitorEl.addEventListener("input", (ev) => {
    const campo = ev.target.closest("[data-nota]");
    if (!campo) return;
    const v = numVerso(campo.dataset.nota);
    const k = chave(estado.livro, estado.cap, v);
    const valor = campo.value;
    clearTimeout(temporizadorNota);
    temporizadorNota = setTimeout(() => {
      if (valor.trim()) estado.notas[k] = valor;
      else delete estado.notas[k];
      salvar();
      const el = leitorEl.querySelector('[data-v="' + v + '"]');
      if (el) el.classList.toggle("tem-nota", Boolean(estado.notas[k]));
      const b = campo.closest(".inline-pal").querySelector('[data-f="anotar"]');
      if (b) b.setAttribute("aria-pressed", String(Boolean(estado.notas[k])));
      if (aba === "caderno") renderPainel();
    }, 300);
  });

  // ---------- caderno: tudo o que foi salvo, grifado e anotado ----------
  let cadernoTipo = null;
  function renderCaderno() {
    const ordem = new Map(todos.map((l, i) => [l.cod, i]));
    const chaves = new Set([...Object.keys(estado.salvos), ...Object.keys(estado.notas), ...Object.keys(estado.marcas), ...Object.keys(estado.tipos)]);
    const itens = [...chaves]
      .map((k) => {
        const [cod, cap, v] = k.split(".");
        return { k, cod, cap: Number(cap), v: numVerso(v) };
      })
      .filter((x) => porCod.has(x.cod))
      .sort((a, b) => ordem.get(a.cod) - ordem.get(b.cod) || a.cap - b.cap || (Number(a.v) || 0) - (Number(b.v) || 0));
    const grupos = [
      ["Salvos", itens.filter((x) => estado.salvos[x.k])],
      ["Anotações", itens.filter((x) => estado.notas[x.k])],
      ["Grifos", itens.filter((x) => estado.marcas[x.k])],
    ];
    const porTipo = Object.keys(TIPOS_V).map((t) => [t, itens.filter((x) => estado.tipos[x.k] === t)]);
    let html = "<h2>Caderno</h2>";
    html += '<p class="mudo">Tudo o que você salvou, anotou e grifou. Fica guardado neste navegador; faça uma cópia de segurança de vez em quando.</p>';
    html +=
      '<p><button class="botao" data-acao="exportar">Baixar cópia de segurança</button> ' +
      '<button class="botao" data-acao="importar">Restaurar cópia</button><input type="file" id="arq-importar" accept="application/json,.json" hidden></p>';
    if (window.Sinc) html += window.Sinc.htmlCaderno();
    if (porTipo.some((x) => x[1].length)) {
      html += '<h3>Coleção por tipo</h3><div class="chips">' + porTipo.map(([t, l]) => '<button class="chip tipo-' + t + (cadernoTipo === t ? " atual" : "") + '" data-acao="filtro-tipo" data-tipo="' + t + '">' +
        TIPOS_V[t] + " " + l.length + "</button>").join("") + "</div>";
      const escolhido = porTipo.find((x) => x[0] === cadernoTipo);
      if (escolhido && escolhido[1].length) grupos.unshift([TIPOS_V[cadernoTipo] + ": versículos marcados", escolhido[1], true]);
    }
    if (!itens.length) html += '<p class="mudo">Ainda não há nada aqui. Toque num versículo e use a barra que aparece embaixo dele.</p>';
    for (const [titulo, lista, comTexto] of grupos) {
      if (!lista.length) continue;
      html += "<h3>" + titulo + " (" + lista.length + ")</h3>";
      for (const x of lista) {
        const cor = estado.marcas[x.k];
        html +=
          '<button class="resultado" data-ref="' + esc(x.cod + "/" + x.cap + "/" + x.v) + '"><b class="ref-mini">' +
          (cor ? '<i class="ponto m-' + cor + '"></i>' : "") + esc(porCod.get(x.cod).nome + " " + x.cap + ":" + x.v) +
          (estado.salvos[x.k] ? " ★" : "") + "</b>" +
          (comTexto ? '<span data-texto-de="' + esc(x.k) + '"></span>' : "") +
          (estado.notas[x.k] ? "<span>" + esc(estado.notas[x.k]) + "</span>" : "") + "</button>";
      }
    }
    painelEl.innerHTML = html;
    painelEl.scrollTop = 0;
    // A coleção por tipo mostra o texto de cada versículo, carregado por livro.
    painelEl.querySelectorAll("[data-texto-de]").forEach((alvo) => {
      const [cod, cap, v] = alvo.dataset.textoDe.split(".");
      carregarLivro(estado.versao, cod).then((dados) => {
        const achado = (dados[cap] || []).find((x) => String(x[0]) === v);
        if (achado && alvo.isConnected) alvo.innerHTML = formatarVerso(achado[1]);
      }, () => {});
    });
  }
  function exportarCaderno() {
    const dados = { app: "biblia-estudo", versao: 1, exportado: new Date().toISOString(), marcas: estado.marcas, notas: estado.notas, salvos: estado.salvos, estudos: estado.estudos, plano: estado.plano, memo: estado.memo, leitura: estado.leitura, tipos: estado.tipos, sermoes: estado.sermoes };
    const url = URL.createObjectURL(new Blob([JSON.stringify(dados, null, 2)], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "caderno-biblia-" + new Date().toISOString().slice(0, 10) + ".json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function importarCaderno(arquivo) {
    arquivo.text().then((texto) => {
      let dados;
      try {
        dados = JSON.parse(texto);
      } catch (e) {
        dados = null;
      }
      if (!dados || dados.app !== "biblia-estudo") {
        alert("Este arquivo não é uma cópia de segurança do caderno.");
        return;
      }
      const formato = /^[0-9A-Z]{3}\.\d+\.\w+$/;
      const juntar = (destino, origem, valido) => {
        for (const [k, v] of Object.entries(origem || {})) if (formato.test(k) && valido(v)) destino[k] = v;
      };
      juntar(estado.marcas, dados.marcas, (v) => CORES.includes(v));
      juntar(estado.notas, dados.notas, (v) => typeof v === "string");
      juntar(estado.salvos, dados.salvos, (v) => typeof v === "number" || v === true);
      juntar(estado.tipos, dados.tipos, (v) => Boolean(TIPOS_V[v]));
      for (const s of Array.isArray(dados.sermoes) ? dados.sermoes : []) {
        if (s && typeof s.id === "string" && Array.isArray(s.pontos) && !estado.sermoes.some((x) => x.id === s.id)) estado.sermoes.push(s);
      }
      for (const e of Array.isArray(dados.estudos) ? dados.estudos : []) {
        if (!e || typeof e.id !== "string" || typeof e.texto !== "string" || meuEstudo(e.id)) continue;
        estado.estudos.push({ id: e.id, titulo: String(e.titulo || ""), texto: e.texto, atualizado: Number(e.atualizado) || Date.now() });
      }
      for (const [k, m] of Object.entries(dados.memo || {})) {
        if (formato.test(k) && m && !estado.memo[k]) estado.memo[k] = { c: Number(m.c) || 0, p: String(m.p || "") };
      }
      for (const [dia, lista] of Object.entries(dados.leitura || {})) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dia) || !Array.isArray(lista)) continue;
        const atual = Array.isArray(estado.leitura[dia]) ? estado.leitura[dia] : (estado.leitura[dia] = []);
        for (const k of lista) if (/^[0-9A-Z]{3}\.\d+$/.test(k) && !atual.includes(k)) atual.push(k);
      }
      if (!estado.plano && dados.plano && typeof dados.plano.id === "string") {
        estado.plano = { id: dados.plano.id, inicio: String(dados.plano.inicio || ""), feitos: Object.assign({}, dados.plano.feitos) };
      }
      salvar();
      aplicarSelecaoNoLeitor();
      renderPainel();
    });
  }
  painelEl.addEventListener("input", (ev) => {
    if (ev.target.id !== "est-titulo" && ev.target.id !== "est-texto") return;
    const e = estudoAberto && meuEstudo(estudoAberto.slice(4));
    if (!e) return;
    e.titulo = $("est-titulo").value;
    e.texto = $("est-texto").value;
    e.atualizado = Date.now();
    salvar();
  });
  painelEl.addEventListener("change", (ev) => {
    if (ev.target.id === "arq-importar" && ev.target.files[0]) importarCaderno(ev.target.files[0]);
  });

  painelEl.addEventListener("click", (ev) => {
    const alvo = ev.target.closest("[data-pal],[data-ref],[data-estudo],[data-aba-ir],[data-cor],[data-acao]");
    if (!alvo) return;
    if (alvo.dataset.pal !== undefined) {
      abrirPalavra(alvo.dataset.pal);
    } else if (alvo.dataset.acao === "fechar-palavra") {
      const v = palavraSel && palavraSel.v;
      palavraSel = null;
      if (v !== null && !sel.length) sel = [v];
      aplicarSelecaoNoLeitor();
      renderPainel();
    } else if (alvo.dataset.acao === "mais-refs") {
      const caixa = $("refs-palavra");
      if (caixa) caixa.innerHTML = htmlRefs(refsPalavra, refsPalavra.length);
    } else if (alvo.dataset.ref !== undefined) {
      const [cod, cap, v] = alvo.dataset.ref.split("/");
      if (celular()) fecharPainel();
      irPara(cod, Number(cap), v ? Number(v) : null);
    } else if (alvo.dataset.acao === "novo-estudo" || alvo.dataset.acao === "novo-esboco") {
      const esboco = alvo.dataset.acao === "novo-esboco";
      if (esboco && window.Vistas && window.Vistas.novoSermao) {
        if (celular()) fecharPainel();
        return window.Vistas.novoSermao(refAtual());
      }
      const novo = { id: Date.now().toString(36), titulo: esboco ? "Esboço: " + refAtual() : "", texto: esboco ? modeloEsboco() : "", atualizado: Date.now() };
      estado.estudos.unshift(novo);
      salvar();
      estudoAberto = "meu:" + novo.id;
      editandoEstudo = true;
      renderPainel();
    } else if (alvo.dataset.acao === "editar-estudo" || alvo.dataset.acao === "concluir-estudo") {
      editandoEstudo = alvo.dataset.acao === "editar-estudo";
      renderPainel();
    } else if (alvo.dataset.acao === "excluir-estudo") {
      if (confirm("Excluir este estudo? Não dá para desfazer.")) {
        estado.estudos = estado.estudos.filter((x) => "meu:" + x.id !== estudoAberto);
        salvar();
        estudoAberto = null;
        renderPainel();
      }
    } else if (alvo.dataset.acao === "inserir-ref") {
      const campo = $("est-texto");
      const ref = refAtual();
      const p = campo.selectionStart;
      campo.value = campo.value.slice(0, p) + ref + campo.value.slice(campo.selectionEnd);
      campo.focus();
      campo.selectionStart = campo.selectionEnd = p + ref.length;
      campo.dispatchEvent(new Event("input", { bubbles: true }));
    } else if (alvo.dataset.estudo !== undefined) {
      editandoEstudo = false;
      estudoAberto = alvo.dataset.estudo || null;
      aba = "biblioteca";
      renderPainel();
    } else if (alvo.dataset.abaIr) {
      aba = alvo.dataset.abaIr;
      renderPainel();
    } else if (alvo.dataset.acao && alvo.dataset.acao.startsWith("sinc-")) {
      if (window.Sinc) window.Sinc.acao(alvo.dataset.acao, alvo);
    } else if (alvo.dataset.acao === "filtro-tipo") {
      cadernoTipo = cadernoTipo === alvo.dataset.tipo ? null : alvo.dataset.tipo;
      renderPainel();
    } else if (alvo.dataset.acao === "exportar") {
      exportarCaderno();
    } else if (alvo.dataset.acao === "importar") {
      $("arq-importar").click();
    } else if (alvo.dataset.acao === "limpar") {
      sel = [];
      aplicarSelecaoNoLeitor();
      renderPainel();
    } else if (alvo.dataset.acao === "copiar") {
      const livro = porCod.get(estado.livro);
      const versos = sel.slice().sort((a, b) => a - b);
      const cap = estado.cap;
      const sigla = VERSOES[estado.versao].sigla;
      const ok = () => {
        alvo.textContent = "Copiado";
        setTimeout(() => (alvo.textContent = "Copiar texto"), 1500);
      };
      carregarLivro(estado.versao, estado.livro).then((dados) => {
        const textos = versos.map((v) => ((dados[cap] || []).find((x) => x[0] === v) || [])[1] || "");
        const saida = textos.join(" ") + " (" + refTexto(livro, cap, versos) + ", " + sigla + ")";
        if (navigator.clipboard) navigator.clipboard.writeText(saida).then(ok, () => {});
      });
    }
  });

  document.querySelector(".abas").addEventListener("click", (ev) => {
    const b = ev.target.closest('[role="tab"]');
    if (!b) return;
    aba = b.dataset.aba;
    renderPainel();
  });

  // ---------- seletor de livros ----------
  const dlg = $("dlg-livros");
  function renderListaLivros(filtro) {
    const f = semAcento(filtro || "");
    const grupos = [];
    for (const l of todos) {
      if (f && !semAcento(l.nome).includes(f) && !semAcento(l.abrev).startsWith(f)) continue;
      const titulo = l.extra ? "Literatura extrabíblica (fora do cânon protestante)" : (l.testamento === "AT" ? "Antigo Testamento · " : "Novo Testamento · ") + l.grupo;
      let g = grupos.find((x) => x.titulo === titulo);
      if (!g) grupos.push((g = { titulo, itens: [] }));
      g.itens.push(l);
    }
    let html = "";
    for (const g of grupos) {
      html += '<section class="grupo-livros"><h3>' + esc(g.titulo) + '</h3><div class="grade">';
      for (const l of g.itens) {
        html += '<button data-livro="' + l.cod + '"' + (l.cod === estado.livro ? ' class="atual"' : "") + ">" + esc(l.nome) + "</button>";
      }
      html += "</div></section>";
    }
    $("lista-livros").innerHTML = html || '<p class="mudo">Nenhum livro com esse nome.</p>';
  }
  function renderListaCaps(cod) {
    const l = porCod.get(cod);
    const caps = capitulos(cod, l.extra ? "bpm" : estado.versao);
    let html = '<section class="grupo-livros"><h3><button class="link" data-voltar>‹ Livros</button> · ' + esc(l.nome) + '</h3><div class="grade caps">';
    for (const c of caps) {
      html += '<button data-livro="' + cod + '" data-cap="' + c + '"' + (cod === estado.livro && c === estado.cap ? ' class="atual"' : "") + ">" + c + "</button>";
    }
    $("lista-livros").innerHTML = html + "</div></section>";
  }
  $("btn-livro").addEventListener("click", () => {
    $("filtro-livro").value = "";
    renderListaLivros("");
    dlg.showModal();
  });
  $("btn-fechar-dlg").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", (ev) => {
    if (ev.target === dlg) dlg.close();
  });
  $("filtro-livro").addEventListener("input", (ev) => renderListaLivros(ev.target.value));
  $("lista-livros").addEventListener("click", (ev) => {
    if (ev.target.closest("[data-voltar]")) {
      renderListaLivros($("filtro-livro").value);
      return;
    }
    const b = ev.target.closest("[data-livro]");
    if (!b) return;
    const cod = b.dataset.livro;
    const l = porCod.get(cod);
    const caps = capitulos(cod, l.extra ? "bpm" : estado.versao);
    if (b.dataset.cap || caps.length === 1) {
      dlg.close();
      irPara(cod, Number(b.dataset.cap || caps[0]));
    } else {
      renderListaCaps(cod);
    }
  });

  // ---------- topo ----------
  $("btn-anterior").addEventListener("click", () => {
    const d = vizinho(-1);
    if (d) irPara(d.cod, d.cap);
  });
  $("btn-proximo").addEventListener("click", () => {
    const d = vizinho(1);
    if (d) irPara(d.cod, d.cap);
  });
  $("sel-versao").addEventListener("change", (ev) => {
    const livro = porCod.get(estado.livro);
    if (livro.extra && ev.target.value !== "bpm") {
      ev.target.value = "bpm";
      return;
    }
    estado.versao = ev.target.value;
    salvar();
    renderLeitor(sel[0]);
    renderPainel();
  });
  $("form-busca").addEventListener("submit", (ev) => {
    ev.preventDefault();
    buscar($("campo-busca").value);
  });
  function aplicarTema() {
    const escuro = estado.tema ? estado.tema === "escuro" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.tema = escuro ? "escuro" : "claro";
  }
  $("btn-tema").addEventListener("click", () => {
    estado.tema = document.documentElement.dataset.tema === "escuro" ? "claro" : "escuro";
    salvar();
    aplicarTema();
  });
  $("btn-inter").addEventListener("click", () => {
    estado.interlinear = !estado.interlinear;
    salvar();
    renderLeitor(sel[0] || (palavraSel && palavraSel.v));
  });
  $("btn-painel").addEventListener("click", abrirPainel);
  $("btn-fechar-painel").addEventListener("click", fecharPainel);
  window.addEventListener("hashchange", () => {
    const h = lerHash();
    if (h) irPara(h.cod, h.cap, h.verso);
  });
  document.addEventListener("keydown", (ev) => {
    if (ev.target.matches("input, textarea, select") || dlg.open) return;
    if (ev.key === "ArrowLeft") $("btn-anterior").click();
    if (ev.key === "ArrowRight") $("btn-proximo").click();
  });

  // ---------- áreas do app (Bíblia, Mapa, Harmonia, Citações, Plano) ----------
  const vistaEl = $("vista");
  function mostrarVista(nome) {
    if (nome === vistaAtual) return;
    vistaAtual = nome;
    document.body.dataset.vista = nome;
    document.querySelectorAll(".vistas [data-vista]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.vista === nome)));
    const biblia = nome === "biblia";
    leitorEl.hidden = !biblia;
    vistaEl.hidden = biblia;
    if (!biblia) {
      fecharPainel();
      if (window.Vistas && window.Vistas[nome]) window.Vistas[nome](vistaEl);
      else vistaEl.innerHTML = '<div class="leitor-interno"><p class="aviso">Esta área ainda não carregou.</p></div>';
    }
  }
  document.querySelector(".vistas").addEventListener("click", (ev) => {
    const b = ev.target.closest("[data-vista]");
    if (b) mostrarVista(b.dataset.vista);
  });
  vistaEl.addEventListener("click", (ev) => {
    const r = ev.target.closest("[data-ref]");
    if (!r) return;
    const [c, cp, vs] = r.dataset.ref.split("/");
    irPara(c, Number(cp), vs ? Number(vs) : null);
  });

  // ---------- ajustes de leitura ----------
  function aplicarAjustes() {
    const a = estado.ajustes;
    document.documentElement.style.setProperty("--escala", String(a.escala));
    document.body.classList.toggle("foco", Boolean(a.foco));
    document.body.classList.toggle("sem-numeros", Boolean(a.semNumeros));
    $("aj-tamanho").textContent = Math.round(a.escala * 100) + "%";
    $("aj-foco").checked = Boolean(a.foco);
    $("aj-numeros").checked = Boolean(a.semNumeros);
    $("aj-falas").checked = Boolean(a.falas);
  }
  $("btn-ajustes").addEventListener("click", (ev) => {
    ev.stopPropagation();
    $("ajustes").hidden = !$("ajustes").hidden;
  });
  document.addEventListener("click", (ev) => {
    if (!ev.target.closest("#ajustes")) $("ajustes").hidden = true;
  });
  $("ajustes").addEventListener("click", (ev) => {
    const b = ev.target.closest("[data-escala]");
    if (!b) return;
    const passo = Number(b.dataset.escala);
    estado.ajustes.escala = passo === 0 ? 1 : Math.min(1.6, Math.max(0.8, Math.round((estado.ajustes.escala + passo) * 10) / 10));
    salvar();
    aplicarAjustes();
  });
  $("ajustes").addEventListener("change", () => {
    estado.ajustes.foco = $("aj-foco").checked;
    estado.ajustes.semNumeros = $("aj-numeros").checked;
    const mudouFalas = Boolean(estado.ajustes.falas) !== $("aj-falas").checked;
    estado.ajustes.falas = $("aj-falas").checked;
    salvar();
    aplicarAjustes();
    if (mudouFalas) renderLeitor(sel[0]);
  });

  // O que as outras áreas (vistas.js) usam do núcleo.
  window.App = {
    estado, salvar, livros, todos, porCod, esc, formatarVerso, carregarLivro, irPara, VERSOES,
    capitulos, partesRef, rotuloPartes, celular, chave, registrarLeitura, SEGUNDOS_LEITURA, acharLivro, estrutura,
    // Abre (ou redesenha) uma área, mesmo que já seja a atual.
    // Redesenha o que está na tela depois que a sincronização traz dados de outro aparelho.
    redesenhar() {
      if (vistaAtual === "biblia") {
        aplicarSelecaoNoLeitor();
        renderPainel();
      } else if (!["sermoes"].includes(vistaAtual) && window.Vistas && window.Vistas[vistaAtual] && vistaAtual !== "mapa") window.Vistas[vistaAtual](vistaEl);
    },
    abrirVista(nome) {
      vistaAtual = null;
      mostrarVista(nome);
    },
  };

  // ---------- início ----------
  if (!estado.ajustes || typeof estado.ajustes !== "object") estado.ajustes = { escala: 1, foco: false, semNumeros: false };
  if (!Array.isArray(estado.estudos)) estado.estudos = [];
  if (!estado.memo || typeof estado.memo !== "object") estado.memo = {};
  if (!estado.leitura || typeof estado.leitura !== "object") estado.leitura = {};
  if (!estado.tipos || typeof estado.tipos !== "object") estado.tipos = {};
  if (!Array.isArray(estado.sermoes)) estado.sermoes = [];
  aplicarTema();
  aplicarAjustes();
  fetch("dados/indice.json")
    .then((r) => r.json())
    .then((dados) => {
      indice = dados;
      if (!VERSOES[estado.versao]) estado.versao = "blivre";
      if (!porCod.has(estado.livro)) estado.livro = "GEN";
      $("sel-versao").value = estado.versao;
      const h = lerHash();
      if (h) irPara(h.cod, h.cap, h.verso);
      else irPara(estado.livro, estado.cap);
    })
    .catch(() => {
      leitorEl.innerHTML =
        '<div class="leitor-interno"><p class="aviso">Não foi possível carregar os dados. Abra o app pelo servidor local (tools/servidor.js), não direto pelo arquivo.</p></div>';
    });
})();
