// Área "Sermões e estudos": montador de sermão, aula, estudo de célula e devocional.
// Guarda em App.estado.sermoes. Depende de app.js (window.App) e vistas.js (window.Vistas).
(function () {
  "use strict";
  const App = window.App;
  const esc = App.esc;

  // Cada tipo muda os rótulos e as dicas dos mesmos campos.
  const TIPOS = {
    expositivo: {
      nome: "Sermão expositivo", pontos: 3, rotPonto: "Ponto",
      desc: "Parte de um texto e segue a estrutura dele: cada ponto sai de um trecho da passagem.",
      intro: ["Introdução", "Como você vai prender a atenção e mostrar por que este texto importa hoje? Uma pergunta, uma história curta, um problema real."],
      explicacao: "O que o texto diz neste trecho? Contexto, palavras importantes, o argumento do autor.",
      perguntas: false,
    },
    tematico: {
      nome: "Sermão temático", pontos: 3, rotPonto: "Ponto",
      desc: "Parte de um assunto e reúne os textos que falam dele; cada ponto se apoia numa passagem diferente.",
      intro: ["Introdução", "Apresente o tema e a pergunta que o sermão vai responder."],
      explicacao: "O que esta passagem ensina sobre o tema? Cuide do contexto de cada texto citado.",
      perguntas: false,
    },
    celula: {
      nome: "Estudo de célula", pontos: 3, rotPonto: "Bloco",
      desc: "Roteiro para pequeno grupo: quebra-gelo, leitura, blocos curtos de conversa e aplicação para a semana.",
      intro: ["Quebra-gelo", "Uma pergunta leve, que todos consigam responder, e que já aponte para o assunto."],
      explicacao: "Explique em poucas linhas, para dar base à conversa. O grupo fala mais do que o líder.",
      perguntas: true,
    },
    aula: {
      nome: "Aula ou escola bíblica", pontos: 4, rotPonto: "Tópico",
      desc: "Aula com objetivo de aprendizagem, tópicos em ordem, exemplos e perguntas de revisão.",
      intro: ["Abertura", "Recapitule a aula anterior e diga o que a turma vai saber ao final desta."],
      explicacao: "Conteúdo do tópico: definições, textos de apoio, o que a turma precisa anotar.",
      perguntas: true,
    },
    devocional: {
      nome: "Devocional", pontos: 1, rotPonto: "Reflexão",
      desc: "Texto curto: uma passagem, uma ideia, uma aplicação e uma oração.",
      intro: ["Abertura", "Uma cena ou pergunta do dia a dia que leve ao texto."],
      explicacao: "O que o texto mostra sobre Deus e sobre nós?",
      perguntas: false,
    },
  };
  const novoPonto = () => ({ titulo: "", refs: "", explicacao: "", ilustracao: "", aplicacao: "" });
  const lista = () => (Array.isArray(App.estado.sermoes) ? App.estado.sermoes : (App.estado.sermoes = []));
  let aberto = null; // id do sermão em edição
  let campoAtivo = null; // último campo de texto focado (alvo do botão Inserir)

  function criar(tipo, texto) {
    const t = TIPOS[tipo] ? tipo : "expositivo";
    const s = {
      id: Date.now().toString(36), tipo: t, titulo: "", texto: texto || "", ideia: "", proposito: "", publico: "", intro: "",
      pontos: Array.from({ length: TIPOS[t].pontos }, novoPonto), conclusao: "", apelo: "", perguntas: "", notas: "", atualizado: Date.now(),
    };
    lista().unshift(s);
    App.salvar();
    aberto = s.id;
    return s;
  }

  // "Jo 3:16-21", "Rm 8", "1 Co 13:4" -> { cod, cap, ini, fim } (ini/fim nulos = capítulo inteiro)
  function lerTrecho(txt) {
    const m = String(txt || "").trim().match(/^(.+?)\s*(\d+)(?:\s*[:.]\s*(\d+)(?:\s*[-–]\s*(\d+))?)?$/);
    if (!m) return null;
    const livro = App.acharLivro(m[1]);
    if (!livro) return null;
    const ini = m[3] ? Number(m[3]) : null;
    return { cod: livro.cod, cap: Number(m[2]), ini, fim: m[4] ? Number(m[4]) : ini };
  }
  const separarRefs = (txt) => String(txt || "").split(/\s*;\s*|\n|,\s*(?=\d?\s*[A-Za-zÀ-ú]{2})/).map((x) => x.trim()).filter(Boolean);
  async function versosDe(t) {
    const dados = await App.carregarLivro(App.estado.versao, t.cod);
    return (dados[t.cap] || []).filter((x) => t.ini === null || (Number(x[0]) >= t.ini && Number(x[0]) <= t.fim));
  }
  function rotulo(t) {
    const l = App.porCod.get(t.cod);
    return l.nome + " " + t.cap + (t.ini === null ? "" : ":" + t.ini + (t.fim > t.ini ? "–" + t.fim : ""));
  }
  const palavras = (s) => (String(s || "").trim().match(/\S+/g) || []).length;

  function faltando(s) {
    const t = TIPOS[s.tipo];
    const f = [];
    if (!s.titulo.trim()) f.push("título");
    if (!s.texto.trim()) f.push("texto base");
    if (!s.ideia.trim()) f.push("ideia central");
    if (!s.proposito.trim()) f.push("propósito");
    if (!s.intro.trim()) f.push(t.intro[0].toLowerCase());
    s.pontos.forEach((p, i) => {
      const n = t.rotPonto.toLowerCase() + " " + (i + 1);
      if (!p.titulo.trim()) f.push("título do " + n);
      else if (!p.explicacao.trim()) f.push("explicação do " + n);
      else if (!p.aplicacao.trim()) f.push("aplicação do " + n);
    });
    if (!s.conclusao.trim()) f.push("conclusão");
    if (t.perguntas && !s.perguntas.trim()) f.push("perguntas");
    return f;
  }
  function totalPartes(s) {
    return 6 + s.pontos.length + (TIPOS[s.tipo].perguntas ? 1 : 0);
  }
  function minutos(s) {
    const n = palavras([s.intro, s.conclusao, s.apelo, s.perguntas].concat(s.pontos.map((p) => [p.explicacao, p.ilustracao, p.aplicacao].join(" "))).join(" "));
    return { n, min: Math.round(n / 130) };
  }

  // Texto corrido do esboço (copiar e imprimir partem daqui).
  function emTexto(s) {
    const t = TIPOS[s.tipo];
    const L = [];
    const bloco = (rot, txt) => {
      if (String(txt || "").trim()) L.push("", rot.toUpperCase(), txt.trim());
    };
    L.push((s.titulo || "Sem título").toUpperCase(), t.nome + (s.texto ? " · " + s.texto : ""));
    bloco("Ideia central", s.ideia);
    bloco("Propósito", s.proposito);
    bloco("Para quem", s.publico);
    bloco(t.intro[0], s.intro);
    s.pontos.forEach((p, i) => {
      if (![p.titulo, p.explicacao, p.ilustracao, p.aplicacao].join("").trim()) return;
      L.push("", (i + 1) + ". " + (p.titulo || t.rotPonto + " " + (i + 1)) + (p.refs ? " (" + p.refs + ")" : ""));
      if (p.explicacao.trim()) L.push("Explicação: " + p.explicacao.trim());
      if (p.ilustracao.trim()) L.push("Ilustração: " + p.ilustracao.trim());
      if (p.aplicacao.trim()) L.push("Aplicação: " + p.aplicacao.trim());
    });
    bloco("Conclusão", s.conclusao);
    bloco(s.tipo === "celula" ? "Desafio da semana" : s.tipo === "devocional" ? "Oração" : "Apelo ou desafio", s.apelo);
    bloco("Perguntas", s.perguntas);
    bloco("Anotações", s.notas);
    return L.join("\n");
  }
  // Mesmo conteúdo em HTML, para a tela de apresentação e para imprimir. Com textos = true, abre os versículos citados.
  async function emHtml(s, comTextos) {
    const t = TIPOS[s.tipo];
    const par = (txt) => esc(String(txt || "").trim()).replace(/\n{2,}/g, "</p><p>").replace(/\n/g, "<br>");
    const bloco = (rot, txt) => (String(txt || "").trim() ? "<h3>" + rot + "</h3><p>" + par(txt) + "</p>" : "");
    const citar = async (txt) => {
      if (!comTextos) return "";
      let h = "";
      for (const r of separarRefs(txt)) {
        const tr = lerTrecho(r);
        if (!tr) continue;
        try {
          const vs = await versosDe(tr);
          if (vs.length && vs.length <= 12) h += '<blockquote><b>' + esc(rotulo(tr)) + "</b> " + vs.map((x) => "<sup>" + esc(x[0]) + "</sup>" + App.formatarVerso(x[1])).join(" ") + "</blockquote>";
        } catch (e) {
          /* livro indisponível: segue sem o texto */
        }
      }
      return h;
    };
    let h = '<p class="sm-tipo">' + esc(t.nome) + (s.texto ? " · " + esc(s.texto) : "") + "</p><h1>" + esc(s.titulo || "Sem título") + "</h1>";
    h += await citar(s.texto);
    h += bloco("Ideia central", s.ideia) + bloco("Propósito", s.proposito) + bloco(t.intro[0], s.intro);
    for (let i = 0; i < s.pontos.length; i++) {
      const p = s.pontos[i];
      if (![p.titulo, p.explicacao, p.ilustracao, p.aplicacao].join("").trim()) continue;
      h += "<h2>" + (i + 1) + ". " + esc(p.titulo || t.rotPonto + " " + (i + 1)) + (p.refs ? " <small>" + esc(p.refs) + "</small>" : "") + "</h2>";
      h += await citar(p.refs);
      if (p.explicacao.trim()) h += "<p>" + par(p.explicacao) + "</p>";
      if (p.ilustracao.trim()) h += '<p class="sm-ilu"><b>Ilustração.</b> ' + par(p.ilustracao) + "</p>";
      if (p.aplicacao.trim()) h += '<p class="sm-apl"><b>Aplicação.</b> ' + par(p.aplicacao) + "</p>";
    }
    h += bloco("Conclusão", s.conclusao) + bloco(s.tipo === "celula" ? "Desafio da semana" : s.tipo === "devocional" ? "Oração" : "Apelo ou desafio", s.apelo) + bloco("Perguntas", s.perguntas);
    return h;
  }

  window.Vistas.sermoes = function (el) {
    const sermoes = lista();
    if (aberto && !sermoes.some((s) => s.id === aberto)) aberto = null;
    if (!aberto && sermoes.length) aberto = sermoes[0].id;
    el.innerHTML =
      '<div class="sm-layout"><aside class="harm-lista sm-lista"><div class="sm-novo"><select id="sm-tipo-novo" aria-label="Tipo do novo esboço">' +
      Object.keys(TIPOS).map((k) => '<option value="' + k + '">' + TIPOS[k].nome + "</option>").join("") +
      '</select><button class="botao principal" data-sm="novo">+ Novo</button></div><div id="sm-itens"></div></aside>' +
      '<div class="sm-editor" id="sm-editor"></div><aside class="sm-material" id="sm-material"></aside></div>';
    el.scrollTop = 0;
    const r = el.firstChild;
    const itensEl = r.querySelector("#sm-itens");
    const editor = r.querySelector("#sm-editor");
    const material = r.querySelector("#sm-material");
    const atual = () => sermoes.find((s) => s.id === aberto);

    function listar() {
      itensEl.innerHTML = sermoes.length
        ? sermoes.map((s) => '<button class="harm-item' + (s.id === aberto ? " atual" : "") + '" data-sm-abrir="' + s.id + '"><span>' + esc(s.titulo || "Sem título") +
            "</span><small>" + esc(s.texto || TIPOS[s.tipo].nome) + "</small></button>").join("")
        : '<p class="mudo" style="padding:8px 4px">Nenhum esboço ainda. Escolha o tipo e toque em Novo.</p>';
    }
    const campo = (rot, chave, valor, dica, linhas) =>
      '<label class="sm-campo"><span>' + rot + '</span><textarea data-k="' + chave + '" rows="' + (linhas || 2) + '" placeholder="' + esc(dica) + '">' + esc(valor || "") + "</textarea></label>";

    function desenhar() {
      const s = atual();
      listar();
      if (!s) {
        editor.innerHTML =
          '<div class="sm-vazio"><h1>Sermões e estudos</h1><p class="mudo">Monte um sermão, uma aula, um estudo de célula ou um devocional, com o texto bíblico e o material do app ao lado.</p><div class="planos">' +
          Object.keys(TIPOS).map((k) => '<div class="cartao"><strong>' + TIPOS[k].nome + "</strong><p>" + TIPOS[k].desc + '</p><button class="botao" data-sm="novo" data-tipo="' + k + '">Começar</button></div>').join("") +
          "</div></div>";
        material.innerHTML = "";
        return;
      }
      const t = TIPOS[s.tipo];
      let h =
        '<div class="sm-barra"><select data-k="tipo" aria-label="Tipo">' + Object.keys(TIPOS).map((k) => '<option value="' + k + '"' + (k === s.tipo ? " selected" : "") + ">" + TIPOS[k].nome + "</option>").join("") +
        '</select><span class="sm-acoes"><button class="botao" data-sm="apresentar">Apresentar</button><button class="botao" data-sm="copiar">Copiar</button>' +
        '<button class="botao" data-sm="imprimir">Imprimir / PDF</button><button class="botao" data-sm="excluir">Excluir</button></span></div>' +
        '<div id="sm-progresso"></div>' +
        '<input class="sm-titulo" data-k="titulo" value="' + esc(s.titulo) + '" placeholder="Título" aria-label="Título">' +
        '<div class="sm-dupla"><label class="sm-campo"><span>Texto base</span><input data-k="texto" value="' + esc(s.texto) + '" placeholder="Ex.: Jo 3:16-21 ou Rm 8"></label>' +
        '<label class="sm-campo"><span>Para quem</span><input data-k="publico" value="' + esc(s.publico) + '" placeholder="Ex.: culto de domingo, jovens, célula"></label></div>' +
        campo("Ideia central", "ideia", s.ideia, "Uma frase só: o que este texto afirma? Se não couber numa frase, o estudo ainda não está claro.") +
        campo("Propósito", "proposito", s.proposito, "O que você quer que as pessoas saibam, sintam ou façam ao final?") +
        campo(t.intro[0], "intro", s.intro, t.intro[1], 3) +
        '<div id="sm-pontos">';
      s.pontos.forEach((p, i) => {
        h +=
          '<section class="cartao sm-ponto" data-i="' + i + '"><header><b>' + t.rotPonto + " " + (i + 1) + '</b><span><button class="icone" data-sm="subir" title="Mover para cima" aria-label="Mover para cima"' + (i ? "" : " disabled") + ">↑</button>" +
          '<button class="icone" data-sm="descer" title="Mover para baixo" aria-label="Mover para baixo"' + (i < s.pontos.length - 1 ? "" : " disabled") + ">↓</button>" +
          '<button class="icone" data-sm="tirar" title="Remover" aria-label="Remover">×</button></span></header>' +
          '<div class="sm-dupla"><label class="sm-campo"><span>Título</span><input data-p="titulo" value="' + esc(p.titulo) + '" placeholder="Uma frase que resume o ' + t.rotPonto.toLowerCase() + '"></label>' +
          '<label class="sm-campo"><span>Versículos</span><input data-p="refs" value="' + esc(p.refs) + '" placeholder="Ex.: Jo 3:16-17; Rm 5:8"></label></div>' +
          '<label class="sm-campo"><span>Explicação</span><textarea data-p="explicacao" rows="3" placeholder="' + esc(t.explicacao) + '">' + esc(p.explicacao) + "</textarea></label>" +
          '<label class="sm-campo"><span>Ilustração</span><textarea data-p="ilustracao" rows="2" placeholder="História, exemplo ou imagem que ajude a enxergar a verdade explicada.">' + esc(p.ilustracao) + "</textarea></label>" +
          '<label class="sm-campo"><span>Aplicação</span><textarea data-p="aplicacao" rows="2" placeholder="O que muda na segunda-feira? Seja concreto: quem, o quê, quando.">' + esc(p.aplicacao) + "</textarea></label></section>";
      });
      h +=
        '</div><p><button class="botao" data-sm="mais">+ Adicionar ' + t.rotPonto.toLowerCase() + "</button></p>" +
        campo("Conclusão", "conclusao", s.conclusao, "Retome a ideia central e amarre os pontos. Não traga assunto novo aqui.", 3) +
        campo(s.tipo === "celula" ? "Desafio da semana" : s.tipo === "devocional" ? "Oração" : "Apelo ou desafio", "apelo", s.apelo, "Qual é a resposta que o texto pede? Um passo claro.") +
        campo(t.perguntas ? "Perguntas para o grupo" : "Perguntas para reflexão (opcional)", "perguntas", s.perguntas, "Uma por linha. Comece pelo que o texto diz, depois o que significa, depois o que fazer.", 4) +
        campo("Anotações soltas", "notas", s.notas, "Ideias, citações, coisas a pesquisar. Não entram na apresentação.", 2);
      editor.innerHTML = h;
      editor.scrollTop = 0;
      campoAtivo = null;
      progresso();
      desenharMaterial();
    }
    function progresso() {
      const s = atual();
      const caixa = editor.querySelector("#sm-progresso");
      if (!s || !caixa) return;
      const f = faltando(s);
      const total = totalPartes(s);
      const feitas = Math.max(0, total - f.length);
      const m = minutos(s);
      caixa.innerHTML =
        '<div class="barra-prog"><i style="width:' + Math.round((feitas / total) * 100) + '%"></i></div><p class="mudo">' + feitas + " de " + total + " partes preenchidas" +
        (m.n ? " · " + m.n + " palavras, cerca de " + Math.max(1, m.min) + " min falando" : "") +
        (f.length ? ". Falta: " + esc(f.slice(0, 4).join(", ")) + (f.length > 4 ? " e mais " + (f.length - 4) : "") + "." : ". Esboço completo.") + "</p>";
    }

    // Coluna de material: tudo o que o app já sabe sobre o texto base, com botão para inserir no campo em que você está.
    let vezMaterial = 0;
    async function desenharMaterial() {
      const s = atual();
      const vez = ++vezMaterial;
      if (!s) return;
      const tr = lerTrecho(s.texto);
      if (!tr) {
        material.innerHTML = '<h3>Material da passagem</h3><p class="mudo">Preencha o texto base (por exemplo, Jo 3:16-21) e aqui aparecem o texto, o contexto do livro, a estrutura, suas anotações e as referências cruzadas, prontos para inserir no esboço.</p>';
        return;
      }
      const item = (titulo, corpo, inserir) =>
        '<div class="sm-mat"><div class="sm-mat-topo"><b>' + titulo + "</b>" + (inserir ? '<button class="link" data-inserir="' + esc(inserir) + '">Inserir</button>' : "") + "</div>" + corpo + "</div>";
      let h = "<h3>Material da passagem</h3>" + '<p class="mudo">“Inserir” põe o conteúdo no campo em que o cursor está.</p>';
      let versos = [];
      try {
        versos = await versosDe(tr);
      } catch (e) {
        versos = [];
      }
      if (vez !== vezMaterial) return;
      const textoPlano = versos.map((x) => x[1].replace(/[\[\]]/g, "")).join(" ");
      if (versos.length) {
        h += item(esc(rotulo(tr)), '<p class="sm-texto">' + versos.map((x) => "<sup>" + esc(x[0]) + "</sup>" + App.formatarVerso(x[1])).join(" ") + "</p>" +
          '<p><button class="link" data-ref="' + tr.cod + "/" + tr.cap + (tr.ini ? "/" + tr.ini : "") + '">Abrir na Bíblia</button></p>', "“" + textoPlano + "” (" + rotulo(tr) + ")");
        if (App.estrutura && versos.length <= 15) h += item("Estrutura do texto", App.estrutura(versos), "");
      } else h += '<p class="aviso">Não achei esse trecho. Confira o capítulo e os versículos.</p>';
      const intro = (window.INTRODUCOES || {})[tr.cod];
      if (intro) {
        const nome = App.porCod.get(tr.cod).nome;
        h += item("Contexto de " + esc(nome), "<p>" + esc(intro.contexto) + "</p>", intro.contexto);
        h += item("Propósito do livro", "<p>" + esc(intro.proposito) + "</p>", intro.proposito);
        if (intro.cristo) h += item("Cristo no livro", "<p>" + esc(intro.cristo) + "</p>", intro.cristo);
      }
      const notas = versos.map((x) => [x[0], App.estado.notas[App.chave(tr.cod, tr.cap, x[0])]]).filter((x) => x[1]);
      for (const [v, n] of notas) h += item("Sua anotação em " + tr.cap + ":" + esc(v), "<p>" + esc(n) + "</p>", n);
      const dif = (window.DIFICEIS || []).filter((d) => (d.refs || []).some((x) => {
        const p = App.partesRef(x);
        return p && p.cod === tr.cod && p.cap === tr.cap && (tr.ini === null || (p.fim >= tr.ini && p.ini <= tr.fim));
      }));
      for (const d of dif) h += item("Passagem difícil", "<p>" + esc(d.pergunta) + '</p><p><button class="link" data-dificil="' + esc(d.id) + '">Ver as leituras</button></p>', "");
      h += '<div id="sm-refs"></div>';
      material.innerHTML = h;
      try {
        const resp = await fetch("dados/refs/" + tr.cod + ".json");
        const refs = resp.ok ? await resp.json() : {};
        if (vez !== vezMaterial) return;
        const vistos = new Set();
        const saida = [];
        for (const x of versos) for (const d of (refs[tr.cap + "." + x[0]] || []).slice(0, 4)) if (!vistos.has(d)) vistos.add(d), saida.push(d);
        const caixa = material.querySelector("#sm-refs");
        if (caixa && saida.length) {
          caixa.innerHTML = item("Referências cruzadas", '<div class="chips">' + saida.slice(0, 14).map((d) => {
            const [c, cp, vs] = d.split(".");
            const l = App.porCod.get(c);
            if (!l) return "";
            const rot = l.abrev + " " + cp + ":" + vs.replace("-", "–");
            return '<button class="chip" data-inserir="' + esc(rot) + '" title="Inserir no campo">' + esc(rot) + "</button>";
          }).join("") + "</div>", "");
        }
      } catch (e) {
        /* sem referências cruzadas para este livro */
      }
    }

    function inserir(texto) {
      const c = campoAtivo && editor.contains(campoAtivo) ? campoAtivo : editor.querySelector('textarea[data-k="notas"]');
      if (!c) return;
      const ini = c.selectionStart ?? c.value.length;
      const antes = c.value.slice(0, ini);
      const junta = antes && !/\s$/.test(antes) ? " " : "";
      c.value = antes + junta + texto + c.value.slice(c.selectionEnd ?? ini);
      c.focus();
      c.selectionStart = c.selectionEnd = ini + junta.length + texto.length;
      c.dispatchEvent(new Event("input", { bubbles: true }));
    }

    let esperaTexto = null;
    editor.addEventListener("focusin", (ev) => {
      if (ev.target.matches("textarea, input[data-p], input[data-k]")) campoAtivo = ev.target;
    });
    editor.addEventListener("input", (ev) => {
      const s = atual();
      const c = ev.target;
      if (!s) return;
      if (c.matches("textarea, input[data-p], input[data-k]")) campoAtivo = c;
      if (c.dataset.p) s.pontos[Number(c.closest(".sm-ponto").dataset.i)][c.dataset.p] = c.value;
      else if (c.dataset.k && c.dataset.k !== "tipo") s[c.dataset.k] = c.value;
      else return;
      s.atualizado = Date.now();
      App.salvar();
      progresso();
      if (c.dataset.k === "titulo" || c.dataset.k === "texto") listar();
      if (c.dataset.k === "texto") {
        clearTimeout(esperaTexto);
        esperaTexto = setTimeout(desenharMaterial, 500);
      }
    });
    editor.addEventListener("change", (ev) => {
      const s = atual();
      if (!s || ev.target.dataset.k !== "tipo") return;
      s.tipo = ev.target.value;
      App.salvar();
      desenhar();
    });
    material.addEventListener("click", (ev) => {
      const b = ev.target.closest("[data-inserir]");
      if (b) return inserir(b.dataset.inserir);
      const d = ev.target.closest("[data-dificil]");
      if (d && window.Vistas.irDificil) window.Vistas.irDificil(d.dataset.dificil);
    });
    r.addEventListener("click", async (ev) => {
      const ab = ev.target.closest("[data-sm-abrir]");
      if (ab) {
        aberto = ab.dataset.smAbrir;
        desenhar();
        if (App.celular()) editor.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      const b = ev.target.closest("[data-sm]");
      if (!b) return;
      const acao = b.dataset.sm;
      const s = atual();
      if (acao === "novo") {
        criar(b.dataset.tipo || r.querySelector("#sm-tipo-novo").value, "");
        desenhar();
        const t = editor.querySelector(".sm-titulo");
        if (t) t.focus();
        return;
      }
      if (!s) return;
      const i = b.closest(".sm-ponto") ? Number(b.closest(".sm-ponto").dataset.i) : -1;
      if (acao === "mais") s.pontos.push(novoPonto());
      else if (acao === "tirar") {
        const p = s.pontos[i];
        if ([p.titulo, p.explicacao, p.ilustracao, p.aplicacao].join("").trim() && !confirm("Remover este item e o que está escrito nele?")) return;
        s.pontos.splice(i, 1);
      } else if (acao === "subir" && i > 0) s.pontos.splice(i - 1, 0, s.pontos.splice(i, 1)[0]);
      else if (acao === "descer" && i < s.pontos.length - 1) s.pontos.splice(i + 1, 0, s.pontos.splice(i, 1)[0]);
      else if (acao === "excluir") {
        if (!confirm("Excluir este esboço? Não dá para desfazer.")) return;
        sermoes.splice(sermoes.indexOf(s), 1);
        aberto = null;
        App.salvar();
        window.Vistas.sermoes(el);
        return;
      } else if (acao === "copiar") {
        if (navigator.clipboard) navigator.clipboard.writeText(emTexto(s)).then(() => {
          b.textContent = "Copiado";
          setTimeout(() => (b.textContent = "Copiar"), 1500);
        }, () => {});
        return;
      } else if (acao === "imprimir") {
        let folha = document.getElementById("impressao");
        if (!folha) {
          folha = document.createElement("div");
          folha.id = "impressao";
          document.body.appendChild(folha);
        }
        folha.innerHTML = '<div class="sm-folha">' + (await emHtml(s, true)) + "</div>";
        window.print();
        return;
      } else if (acao === "apresentar") {
        const tela = document.createElement("div");
        tela.className = "sm-apresentar";
        tela.innerHTML = '<div class="sm-ap-barra"><button class="botao" data-ap="menos" aria-label="Diminuir a letra">A−</button><button class="botao" data-ap="mais" aria-label="Aumentar a letra">A+</button>' +
          '<button class="botao" data-ap="fechar">Fechar</button></div><div class="sm-folha">' + (await emHtml(s, true)) + "</div>";
        let escala = 1;
        tela.addEventListener("click", (e) => {
          const a = e.target.closest("[data-ap]");
          if (!a) return;
          if (a.dataset.ap === "fechar") return tela.remove();
          escala = Math.min(1.8, Math.max(0.8, escala + (a.dataset.ap === "mais" ? 0.1 : -0.1)));
          tela.style.setProperty("--ap", String(escala));
        });
        document.body.appendChild(tela);
        return;
      } else return;
      s.atualizado = Date.now();
      App.salvar();
      desenhar();
    });
    desenhar();
  };

  // Chamado pela Biblioteca ("+ Esboço de sermão ou aula"): abre a área com um esboço novo no texto atual.
  window.Vistas.novoSermao = function (texto) {
    criar("expositivo", texto || "");
    App.abrirVista("sermoes");
  };
})();
