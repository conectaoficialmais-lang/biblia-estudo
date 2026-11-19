// Áreas que ocupam a tela inteira: Mapa, Harmonia dos evangelhos, Citações do AT no NT e Plano de leitura.
// Cada função recebe o contêiner e desenha a área dentro dele. Links com data-ref="COD/cap/verso"
// são tratados pelo núcleo (app.js) e levam ao leitor.
(function () {
  "use strict";
  const App = window.App;
  const esc = App.esc;

  function raiz(el, classe, html) {
    el.innerHTML = '<div class="' + classe + '">' + html + "</div>";
    el.scrollTop = 0;
    return el.firstChild;
  }
  function aviso(el, texto) {
    raiz(el, "leitor-interno", '<p class="aviso">' + esc(texto) + "</p>");
  }
  function refParaLink(ref) {
    const p = App.partesRef(ref);
    return p ? p.cod + "/" + p.cap + "/" + p.ini : "";
  }
  // "3:13-17", "3:13" ou "26:57-27:2"
  function lerTrecho(t) {
    const m = String(t).match(/^(\d+):(\d+)(?:-(?:(\d+):)?(\d+))?$/);
    if (!m) return null;
    const c1 = Number(m[1]);
    const v1 = Number(m[2]);
    return { c1, v1, c2: m[3] ? Number(m[3]) : c1, v2: m[4] ? Number(m[4]) : v1 };
  }
  function versosDoTrecho(dados, p) {
    const saida = [];
    for (let c = p.c1; c <= p.c2; c++) {
      for (const [n, texto] of dados[c] || []) {
        if (typeof n !== "number") continue;
        if (c === p.c1 && n < p.v1) continue;
        if (c === p.c2 && n > p.v2) continue;
        saida.push([c, n, texto]);
      }
    }
    return saida;
  }
  function htmlVersos(lista, mostrarCap) {
    return lista
      .map(([c, n, t]) => "<sup>" + (mostrarCap ? c + ":" : "") + n + "</sup>" + App.formatarVerso(t))
      .join(" ");
  }

  // ======================= MAPA =======================
  let mapa = null;
  let eraMapa = "at";
  let rotaSel = null;

  function htmlInfoLocal(item, tipo) {
    let html = '<span class="etiqueta">' + (tipo === "cidade" ? "Cidade" : "Região") + " · " +
      item.eras.map((e) => (e === "at" ? "Antigo Testamento" : "Novo Testamento")).join(" e ") + "</span>";
    html += "<h2>" + esc(item.nome) + "</h2>";
    if (item.povos) {
      const povos = item.povos.replace(/^Quem habitava:\s*/i, "");
      html += "<h3>Quem habitava</h3><p>" + esc(povos.charAt(0).toUpperCase() + povos.slice(1)) + "</p>";
    }
    if (item.resumo) html += "<h3>Sobre o lugar</h3><p>" + esc(item.resumo) + "</p>";
    if (item.eventos && item.eventos.length) {
      html += "<h3>O que aconteceu aqui</h3><ul class=\"lista-simples\">" + item.eventos.map((e) => "<li>" + esc(e) + "</li>").join("") + "</ul>";
    }
    const refs = (item.refs || []).map((r) => [r, App.partesRef(r)]).filter((x) => x[1]);
    if (refs.length) {
      html += '<h3>Passagens</h3><div class="chips">' +
        refs.map(([r, p]) => '<button class="chip" data-ref="' + refParaLink(r) + '">' + esc(App.rotuloPartes(p)) + "</button>").join("") + "</div>";
    }
    if (item.hoje) html += "<h3>Hoje</h3><p>" + esc(item.hoje) + "</p>";
    html += '<p style="margin-top:18px"><button class="link" data-mapa-inicio>‹ Todas as regiões</button></p>';
    return html;
  }

  // Quais pessoas (ids de dados/pessoas.js) viajam em cada trajeto (ids de dados/rotas*.js).
  const ROTA_PESSOAS = {
    "jesus-infancia": ["jesus", "maria", "jose-de-nazare"], "jesus-inicio": ["jesus", "joao-batista"], "jesus-galileia": ["jesus"],
    "jesus-norte": ["jesus", "pedro"], "jesus-ultima-viagem": ["jesus"], "jesus-paixao": ["jesus", "pedro", "judas-iscariotes", "pilatos"],
    filipe: ["filipe-evangelista"], "pedro-lida-cesareia": ["pedro", "cornelio"], "barnabe-antioquia": ["barnabe", "paulo"],
    "paulo-conversao": ["paulo", "barnabe"], "paulo-1": ["paulo", "barnabe", "marcos"], "paulo-2": ["paulo", "silas", "timoteo", "lucas"],
    "paulo-3": ["paulo", "timoteo", "apolo"], "paulo-roma": ["paulo", "lucas"],
    abraao: ["abraao", "sara", "lo"], jaco: ["jaco", "raquel", "lia", "esau"], jose: ["jose", "jaco"], exodo: ["moises", "arao", "miria"],
    josue: ["josue", "calebe", "raabe"], "davi-fuga": ["davi", "saul", "jonatas"], elias: ["elias", "eliseu", "acabe"],
    exilio: ["nabucodonosor", "jeremias", "ezequiel", "daniel"], "retorno-exilio": ["zorobabel", "esdras", "neemias", "ciro"],
  };
  const pessoaPorId = (id) => (window.PESSOAS || []).find((p) => p.id === id);
  let focoLocal = null;

  window.Vistas = {
    irPessoa(id) {
      if (!pessoaPorId(id)) return;
      pessoaSel = id;
      modoPessoas = "pessoas";
      App.abrirVista("pessoas");
    },
    irLocal(chaveLocal, era) {
      eraMapa = era === "nt" ? "nt" : "at";
      focoLocal = chaveLocal;
      App.abrirVista("mapa");
    },
    irRota(id) {
      eraMapa = "rotas";
      rotaSel = id;
      App.abrirVista("mapa");
    },
    irDicionario(termo) {
      dicCategoria = "";
      dicBusca = String(termo).split("(")[0].trim();
      App.abrirVista("dicionario");
    },
  };
  window.Vistas.mapa = function (el) {
    if (mapa) {
      mapa.remove();
      mapa = null;
    }
    if (!window.MAPA) return aviso(el, "Os dados do mapa ainda não foram carregados.");
    if (!window.L) return aviso(el, "O mapa precisa de internet para carregar. Conecte-se e abra esta área de novo.");
    const L = window.L;
    const r = raiz(
      el,
      "mapa-layout",
      '<div class="mapa-area"><div class="mapa-barra">' +
        '<button class="botao" data-era="at">Antigo Testamento</button><button class="botao" data-era="nt">Novo Testamento</button>' +
        '<button class="botao" data-era="rotas">Trajetos</button>' +
        '<span class="mudo" id="mapa-dica">Clique numa região ou cidade.</span></div><div id="mapa-leaflet"></div></div>' +
        '<aside class="mapa-info" id="mapa-info"></aside>'
    );
    const info = r.querySelector("#mapa-info");
    const escuro = document.documentElement.dataset.tema === "escuro";
    mapa = L.map(r.querySelector("#mapa-leaflet"), { zoomSnap: 0.5, minZoom: 4, maxZoom: 13 });
    // Base de relevo sem nomes modernos (Esri World Terrain Base); no tema escuro é só escurecida por CSS.
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}", {
      attribution: "Relevo: Esri, USGS, NOAA",
      maxNativeZoom: 9,
    }).addTo(mapa);
    const camada = L.layerGroup().addTo(mapa);
    const formas = new Map();
    let selecionada = null;

    function infoInicial() {
      const regs = window.MAPA.regioes.filter((x) => x.eras.includes(eraMapa));
      const cids = window.MAPA.cidades.filter((x) => x.eras.includes(eraMapa));
      info.innerHTML =
        "<h2>Mapa bíblico</h2>" +
        '<p class="mudo">As fronteiras são aproximadas: os territórios antigos mudaram ao longo dos séculos e nem sempre tinham limite definido.</p>' +
        "<h3>Regiões</h3><div class=\"chips\">" +
        regs.map((x) => '<button class="chip" data-local="r:' + esc(x.id) + '">' + esc(x.nome) + "</button>").join("") +
        '</div><h3>Cidades</h3><div class="chips">' +
        cids.map((x) => '<button class="chip" data-local="c:' + esc(x.nome) + '">' + esc(x.nome) + "</button>").join("") + "</div>";
    }
    function selecionar(chaveLocal, voar) {
      const f = formas.get(chaveLocal);
      if (!f) return;
      if (selecionada && selecionada.forma.setStyle) selecionada.forma.setStyle(selecionada.estilo);
      const estilo = f.tipo === "regiao" ? { weight: 1.5, fillOpacity: 0.26 } : { radius: 5, weight: 1.5 };
      f.forma.setStyle(f.tipo === "regiao" ? { weight: 3, fillOpacity: 0.48 } : { radius: 8, weight: 3 });
      selecionada = { forma: f.forma, estilo };
      info.innerHTML = htmlInfoLocal(f.item, f.tipo === "regiao" ? "regiao" : "cidade");
      info.scrollTop = 0;
      if (voar) {
        if (f.tipo === "regiao") mapa.flyToBounds(f.forma.getBounds(), { padding: [40, 40], maxZoom: 8, duration: 0.6 });
        else mapa.flyTo(f.forma.getLatLng(), Math.max(mapa.getZoom(), 7), { duration: 0.6 });
      }
      if (App.celular()) info.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // ----- trajetos (dados/rotas.js) -----
    let marcadores = [];
    function infoRotas() {
      const rotas = Array.isArray(window.ROTAS) ? window.ROTAS : [];
      let html = "<h2>Trajetos</h2>" +
        '<p class="mudo">Por onde andaram Jesus e os apóstolos. Escolha um trajeto para ver o caminho no mapa e o que aconteceu em cada parada.</p>';
      if (!rotas.length) html += '<p class="aviso">Os dados dos trajetos ainda não foram carregados.</p>';
      const grupos = [...new Set(rotas.map((x) => x.grupo))];
      for (const g of grupos) {
        html += "<h3>" + esc(g) + "</h3>";
        for (const rota of rotas.filter((x) => x.grupo === g)) {
          html += '<button class="cartao estudo-item" data-rota="' + esc(rota.id) + '"><strong>' + esc(rota.nome) +
            '</strong><span class="mudo">' + esc(rota.periodo || "") + (rota.fonte ? " · " + esc(rota.fonte) : "") + "</span></button>";
        }
      }
      info.innerHTML = html;
      info.scrollTop = 0;
    }
    function selParada(i, voar) {
      info.querySelectorAll(".parada").forEach((c) => c.classList.toggle("atual", Number(c.dataset.parada) === i));
      marcadores.forEach((m, k) => {
        const elM = m.getElement();
        if (elM) elM.classList.toggle("atual", k === i);
      });
      const m = marcadores[i];
      if (!m) return;
      if (voar) mapa.flyTo(m.getLatLng(), Math.max(mapa.getZoom(), 8), { duration: 0.5 });
      else {
        const c = info.querySelector('.parada[data-parada="' + i + '"]');
        if (c) c.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    }
    function abrirRota(id) {
      const rota = (window.ROTAS || []).find((x) => x.id === id);
      if (!rota) return;
      rotaSel = id;
      camada.clearLayers();
      marcadores = [];
      const validas = rota.paradas.filter((p) => typeof p.lat === "number" && typeof p.lng === "number");
      const pontos = validas.map((p) => [p.lat, p.lng]);
      const cor = /^#[0-9a-fA-F]{3,8}$/.test(rota.cor || "") ? rota.cor : "#8c3b2a";
      // Regiões do Novo Testamento ao fundo, só como referência (não clicáveis).
      for (const reg of (window.MAPA && window.MAPA.regioes) || []) {
        if (!reg.eras.includes(rota.grupo === "Antigo Testamento" ? "at" : "nt") || !Array.isArray(reg.poligono) || reg.poligono.length < 3) continue;
        L.polygon(reg.poligono, { color: reg.cor || "#888", weight: 1, opacity: 0.5, fillOpacity: 0.07, interactive: false })
          .addTo(camada)
          .bindTooltip(reg.nome, { permanent: true, direction: "center", className: "rotulo-regiao fraco" });
      }
      L.polyline(pontos, { color: cor, weight: 3.5, opacity: 0.9, lineJoin: "round" }).addTo(camada);
      const nomeadas = validas.filter((p) => !p.via && p.nome);
      nomeadas.forEach((p, i) => {
        const m = L.marker([p.lat, p.lng], {
          icon: L.divIcon({ className: "marc-parada", html: '<span style="background:' + cor + '">' + (i + 1) + "</span>", iconSize: [24, 24], iconAnchor: [12, 12] }),
          zIndexOffset: 1000 - i,
        }).addTo(camada);
        m.bindTooltip(i + 1 + ". " + p.nome, { direction: "top", offset: [0, -12] });
        m.on("click", () => selParada(i, false));
        marcadores.push(m);
      });
      if (pontos.length) mapa.fitBounds(L.latLngBounds(pontos), { padding: [40, 40], maxZoom: 12 });
      let html = '<p><button class="link" data-rotas-inicio>‹ Todos os trajetos</button></p>';
      html += '<span class="etiqueta">' + esc(rota.grupo) + (rota.periodo ? " · " + esc(rota.periodo) : "") + "</span>";
      html += "<h2>" + esc(rota.nome) + "</h2>";
      if (rota.resumo) html += "<p>" + esc(rota.resumo) + "</p>";
      if (rota.fonte) html += '<p class="mudo">Narrado em ' + esc(rota.fonte) + ".</p>";
      const gente = (ROTA_PESSOAS[rota.id] || []).map(pessoaPorId).filter(Boolean);
      if (gente.length) {
        html += '<div class="chips">' + gente.map((p) => '<button class="chip lig-pessoa" data-pessoa-ir="' + esc(p.id) + '">' + esc(p.nome) + "</button>").join("") + "</div>";
      }
      html += "<h3>Paradas</h3>";
      nomeadas.forEach((p, i) => {
        const refs = (p.refs || []).map((x) => [x, App.partesRef(x)]).filter((x) => x[1]);
        html += '<div class="parada" data-parada="' + i + '"><span class="num" style="background:' + cor + '">' + (i + 1) + "</span><div><strong>" +
          esc(p.nome) + "</strong><p>" + esc(p.texto || "") + "</p>" +
          (refs.length ? '<div class="chips">' + refs.map(([x, pr]) => '<button class="chip" data-ref="' + refParaLink(x) + '">' + esc(App.rotuloPartes(pr)) + "</button>").join("") + "</div>" : "") +
          "</div></div>";
      });
      info.innerHTML = html;
      info.scrollTop = 0;
    }

    function desenhar() {
      camada.clearLayers();
      formas.clear();
      selecionada = null;
      marcadores = [];
      r.querySelectorAll("[data-era]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.era === eraMapa)));
      r.querySelector("#mapa-dica").textContent = eraMapa === "rotas" ? "Escolha um trajeto e clique nas paradas." : "Clique numa região ou cidade.";
      if (eraMapa === "rotas") {
        if (rotaSel && (window.ROTAS || []).some((x) => x.id === rotaSel)) abrirRota(rotaSel);
        else {
          mapa.fitBounds([[30, 12], [43, 39]]);
          infoRotas();
        }
        return;
      }
      for (const reg of window.MAPA.regioes) {
        if (!reg.eras.includes(eraMapa) || !Array.isArray(reg.poligono) || reg.poligono.length < 3) continue;
        const forma = L.polygon(reg.poligono, { color: reg.cor || "#8c3b2a", weight: 1.5, fillOpacity: 0.26 }).addTo(camada);
        forma.bindTooltip(reg.nome, { permanent: true, direction: "center", className: "rotulo-regiao" });
        const k = "r:" + reg.id;
        forma.on("click", () => selecionar(k, false));
        formas.set(k, { forma, item: reg, tipo: "regiao" });
      }
      for (const cid of window.MAPA.cidades) {
        if (!cid.eras.includes(eraMapa)) continue;
        const forma = L.circleMarker([cid.lat, cid.lng], {
          radius: 5, weight: 1.5, color: escuro ? "#f1e9dc" : "#2a2420", fillColor: escuro ? "#e0907a" : "#8c3b2a", fillOpacity: 1,
        }).addTo(camada);
        forma.bindTooltip(cid.nome, { permanent: true, direction: "right", offset: [6, 0], className: "rotulo-cidade" });
        const k = "c:" + cid.nome;
        forma.on("click", () => selecionar(k, false));
        formas.set(k, { forma, item: cid, tipo: "cidade" });
      }
      mapa.fitBounds(eraMapa === "at" ? [[27, 29], [38, 49]] : [[30, 12], [43, 39]]);
      infoInicial();
    }
    const marcarZoom = () => r.classList.toggle("zoom-baixo", mapa.getZoom() < 6.5);
    mapa.on("zoomend", marcarZoom);
    r.addEventListener("click", (ev) => {
      const era = ev.target.closest("[data-era]");
      if (era) {
        eraMapa = era.dataset.era;
        desenhar();
        marcarZoom();
        return;
      }
      const gente = ev.target.closest("[data-pessoa-ir]");
      if (gente) return window.Vistas.irPessoa(gente.dataset.pessoaIr);
      const rota = ev.target.closest("[data-rota]");
      if (rota) return abrirRota(rota.dataset.rota);
      if (ev.target.closest("[data-rotas-inicio]")) {
        rotaSel = null;
        desenhar();
        return;
      }
      const parada = ev.target.closest("[data-parada]");
      if (parada && !ev.target.closest("[data-ref]")) return selParada(Number(parada.dataset.parada), true);
      const local = ev.target.closest("[data-local]");
      if (local) return selecionar(local.dataset.local, true);
      if (ev.target.closest("[data-mapa-inicio]")) {
        if (selecionada) selecionada.forma.setStyle(selecionada.estilo);
        selecionada = null;
        infoInicial();
      }
    });
    desenhar();
    marcarZoom();
    setTimeout(() => {
      if (!mapa) return;
      mapa.invalidateSize();
      if (focoLocal && eraMapa !== "rotas") selecionar(focoLocal, true);
      focoLocal = null;
    }, 80);
  };

  // ======================= HARMONIA =======================
  const EVANGELHOS = ["MAT", "MAR", "LUK", "JOH"];
  let harmSel = "0:0";

  window.Vistas.harmonia = function (el) {
    if (!Array.isArray(window.HARMONIA)) return aviso(el, "Os dados da harmonia ainda não foram carregados.");
    let lista = "";
    window.HARMONIA.forEach((sec, i) => {
      lista += "<h3>" + esc(sec.secao) + "</h3>";
      sec.itens.forEach((item, j) => {
        const marcas = EVANGELHOS.map((cod, k) => (item[k + 1] ? App.porCod.get(cod).abrev : "")).filter(Boolean).join(" · ");
        lista += '<button class="harm-item" data-harm="' + i + ":" + j + '"><span>' + esc(item[0]) + '</span><small>' + marcas + "</small></button>";
      });
    });
    const r = raiz(el, "harm-layout", '<aside class="harm-lista">' + lista + '</aside><div class="harm-conteudo" id="harm-conteudo"></div>');
    const conteudo = r.querySelector("#harm-conteudo");

    async function abrir(chave, rolar) {
      const [i, j] = chave.split(":").map(Number);
      const sec = window.HARMONIA[i];
      const item = sec && sec.itens[j];
      if (!item) return;
      harmSel = chave;
      r.querySelectorAll(".harm-item").forEach((b) => b.classList.toggle("atual", b.dataset.harm === chave));
      if (rolar) {
        const b = r.querySelector('.harm-item[data-harm="' + chave + '"]');
        if (b) b.scrollIntoView({ block: "center" });
      }
      const versao = App.estado.versao;
      let livros;
      try {
        livros = await Promise.all(EVANGELHOS.map((cod) => App.carregarLivro(versao, cod)));
      } catch (e) {
        conteudo.innerHTML = '<p class="aviso">' + esc(e.message) + ".</p>";
        return;
      }
      if (harmSel !== chave) return;
      const presentes = EVANGELHOS.map((cod, k) => ({ cod, k, trecho: item[k + 1] })).filter((x) => x.trecho);
      let html = '<span class="etiqueta">' + esc(sec.secao) + "</span><h1>" + esc(item[0]) + "</h1>";
      html += '<p class="mudo">' + (presentes.length === 1 ? "Episódio narrado só em " + esc(App.porCod.get(presentes[0].cod).nome) + "." : "Narrado em " + presentes.length + " evangelhos. " + esc(App.VERSOES[versao].nome) + ".") + "</p>";
      html += '<div class="colunas" style="--n:' + presentes.length + '">';
      for (const x of presentes) {
        const p = lerTrecho(x.trecho);
        const versos = p ? versosDoTrecho(livros[x.k], p) : [];
        html += '<section class="coluna"><button class="coluna-ref" data-ref="' + x.cod + "/" + (p ? p.c1 + "/" + p.v1 : "1") + '">' +
          esc(App.porCod.get(x.cod).nome + " " + x.trecho.replace("-", "–")) + "</button>";
        html += versos.length ? '<p class="texto-col">' + htmlVersos(versos, p.c1 !== p.c2) + "</p>" : '<p class="mudo">Trecho não encontrado.</p>';
        html += "</section>";
      }
      html += "</div>";
      conteudo.innerHTML = html;
      conteudo.scrollTop = 0;
      if (App.celular() && !rolar) conteudo.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    r.addEventListener("click", (ev) => {
      const b = ev.target.closest("[data-harm]");
      if (b) abrir(b.dataset.harm, false);
    });
    abrir(harmSel, true);
  };

  // ======================= CITAÇÕES =======================
  let citLivro = null;

  let modoCit = "citacoes";
  const botoesModoCit = () =>
    '<p class="ferr"><button class="botao" data-modo-cit="citacoes" aria-pressed="' + (modoCit === "citacoes") + '">Citações diretas</button>' +
    '<button class="botao" data-modo-cit="profecias" aria-pressed="' + (modoCit === "profecias") + '">Profecias messiânicas</button></p>';
  function ligarModoCit(r, el) {
    r.addEventListener("click", (ev) => {
      const b = ev.target.closest("[data-modo-cit]");
      if (!b || b.dataset.modoCit === modoCit) return;
      modoCit = b.dataset.modoCit;
      window.Vistas.citacoes(el);
    });
  }
  function ladoTexto(dados, p, titulo) {
    const versos = versosDoTrecho(dados[p.cod] || {}, { c1: p.cap, v1: p.ini, c2: p.cap, v2: p.fim });
    return '<section class="coluna"><button class="coluna-ref" data-ref="' + p.cod + "/" + p.cap + "/" + p.ini + '">' +
      esc(App.porCod.get(p.cod).nome + " " + p.cap + ":" + p.ini + (p.fim > p.ini ? "–" + p.fim : "")) + '</button><small class="mudo">' + titulo + "</small>" +
      (versos.length ? '<p class="texto-col">' + htmlVersos(versos, false) + "</p>" : '<p class="mudo">Trecho não encontrado.</p>') + "</section>";
  }
  async function vistaProfecias(el) {
    const secoes = Array.isArray(window.PROFECIAS) ? window.PROFECIAS : [];
    const r = raiz(
      el,
      "cit-layout",
      botoesModoCit() + "<h1>Profecias messiânicas e cumprimentos</h1>" +
        '<p class="mudo">À esquerda, o texto do Antigo Testamento; à direita, o cumprimento apontado pelo Novo. A nota diz se é profecia direta, tipologia ou aplicação feita pelo próprio Novo Testamento.</p>' +
        '<div id="prof-lista"><p class="mudo">' + (secoes.length ? "Carregando…" : "Os dados das profecias ainda não foram carregados.") + "</p></div>"
    );
    ligarModoCit(r, el);
    if (!secoes.length) return;
    const pares = [];
    for (const s of secoes) for (const it of s.itens) pares.push({ secao: s.secao, tema: it[0], at: App.partesRef(it[1]), nt: App.partesRef(it[2]), nota: it[3] || "" });
    const validos = pares.filter((x) => x.at && x.nt);
    const versao = App.estado.versao;
    const codigos = [...new Set(validos.flatMap((x) => [x.at.cod, x.nt.cod]))];
    const dados = {};
    await Promise.all(codigos.map((c) => App.carregarLivro(versao, c).then((d) => (dados[c] = d), () => (dados[c] = {}))));
    const lista = r.querySelector("#prof-lista");
    if (!lista || modoCit !== "profecias") return;
    let html = "";
    let secaoAtual = "";
    for (const x of validos) {
      if (x.secao !== secaoAtual) {
        secaoAtual = x.secao;
        html += "<h3>" + esc(secaoAtual) + "</h3>";
      }
      html += '<article class="cit-par"><strong>' + esc(x.tema) + '</strong><div class="colunas" style="--n:2">' +
        ladoTexto(dados, x.at, "Profecia") + ladoTexto(dados, x.nt, "Cumprimento") + "</div>" +
        (x.nota ? '<p class="mudo" style="margin-top:6px">' + esc(x.nota) + "</p>" : "") + "</article>";
    }
    lista.innerHTML = html;
  }

  window.Vistas.citacoes = function (el) {
    if (modoCit === "profecias") return vistaProfecias(el);
    if (!Array.isArray(window.CITACOES)) return aviso(el, "Os dados das citações ainda não foram carregados.");
    const pares = window.CITACOES.map((c) => ({ nt: App.partesRef(c[0]), at: App.partesRef(c[1]), nota: c[2] || "" })).filter((x) => x.nt && x.at);
    const porLivro = new Map();
    for (const p of pares) {
      if (!porLivro.has(p.nt.cod)) porLivro.set(p.nt.cod, []);
      porLivro.get(p.nt.cod).push(p);
    }
    const livrosNT = App.livros.filter((l) => porLivro.has(l.cod));
    if (!livrosNT.length) return aviso(el, "Nenhuma citação cadastrada.");
    if (!citLivro || !porLivro.has(citLivro)) citLivro = livrosNT[0].cod;
    const r = raiz(
      el,
      "cit-layout",
      botoesModoCit() + "<h1>Citações do Antigo Testamento no Novo</h1>" +
        '<p class="mudo">' + pares.length + " citações diretas. À esquerda, o texto do Novo Testamento; à direita, a passagem citada. As redações diferem porque os apóstolos costumam citar a Septuaginta (tradução grega) e, às vezes, de memória.</p>" +
        '<p><select id="cit-livro" aria-label="Livro do Novo Testamento">' +
        livrosNT.map((l) => '<option value="' + l.cod + '">' + esc(l.nome) + " (" + porLivro.get(l.cod).length + ")</option>").join("") +
        '</select></p><div id="cit-lista"></div>'
    );
    ligarModoCit(r, el);
    const listaEl = r.querySelector("#cit-lista");
    const seletor = r.querySelector("#cit-livro");
    seletor.value = citLivro;

    async function listar() {
      const cod = citLivro;
      const itens = porLivro.get(cod);
      const versao = App.estado.versao;
      listaEl.innerHTML = '<p class="mudo">Carregando…</p>';
      const codigos = [...new Set([cod, ...itens.map((x) => x.at.cod)])];
      const dados = {};
      try {
        const carregados = await Promise.all(codigos.map((c) => App.carregarLivro(versao, c)));
        codigos.forEach((c, i) => (dados[c] = carregados[i]));
      } catch (e) {
        listaEl.innerHTML = '<p class="aviso">' + esc(e.message) + ".</p>";
        return;
      }
      if (citLivro !== cod) return;
      const lado = (p, titulo) => {
        const versos = versosDoTrecho(dados[p.cod], { c1: p.cap, v1: p.ini, c2: p.cap, v2: p.fim });
        return '<section class="coluna"><button class="coluna-ref" data-ref="' + p.cod + "/" + p.cap + "/" + p.ini + '">' +
          esc(App.porCod.get(p.cod).nome + " " + p.cap + ":" + p.ini + (p.fim > p.ini ? "–" + p.fim : "")) + '</button><small class="mudo">' + titulo + "</small>" +
          (versos.length ? '<p class="texto-col">' + htmlVersos(versos, false) + "</p>" : '<p class="mudo">Trecho não encontrado.</p>') + "</section>";
      };
      listaEl.innerHTML = itens
        .map((x) => '<article class="cit-par">' + (x.nota ? '<span class="etiqueta">' + esc(x.nota) + "</span>" : "") +
          '<div class="colunas" style="--n:2">' + lado(x.nt, "Novo Testamento") + lado(x.at, "Antigo Testamento") + "</div></article>")
        .join("");
    }
    seletor.addEventListener("change", () => {
      citLivro = seletor.value;
      listar();
    });
    listar();
  };

  // ======================= PLANO DE LEITURA =======================
  const AT = App.livros.slice(0, 39).map((l) => l.cod);
  const NT = App.livros.slice(39).map((l) => l.cod);
  const PLANOS = [
    { id: "ano", nome: "Bíblia em um ano", dias: 365, desc: "De Gênesis a Apocalipse, na ordem em que os livros aparecem. Três a quatro capítulos por dia.", livros: AT.concat(NT) },
    {
      id: "cronologico", nome: "Cronológico em um ano", dias: 365,
      desc: "Os livros na ordem aproximada dos acontecimentos: Jó depois de Gênesis, os profetas junto dos reis a que falaram, as cartas na sequência de Atos.",
      livros: ("GEN JOB EXO LEV NUM DEU JOS JDG RUT 1SA 2SA 1CH PSA SOL PRO ECC 1KI 2KI 2CH JON AMO HOS ISA MIC NAH ZEP HAB JER LAM OBA JOE EZE DAN EZR HAG ZEC EST NEH MAL " +
        "MAT MAR LUK JOH ACT JAM GAL 1TH 2TH 1CO 2CO ROM EPH PHI COL PHM 1TI TIT 1PE 2TI 2PE HEB JUD 1JO 2JO 3JO REV").split(" "),
    },
    { id: "nt90", nome: "Novo Testamento em 90 dias", dias: 90, desc: "De Mateus a Apocalipse, cerca de três capítulos por dia.", livros: NT },
    { id: "evangelhos", nome: "Vida de Jesus em 45 dias", dias: 45, desc: "Os quatro evangelhos, dois capítulos por dia.", livros: ["MAT", "MAR", "LUK", "JOH"] },
    { id: "sabedoria", nome: "Salmos e Provérbios em 60 dias", dias: 60, desc: "Três capítulos por dia de oração e sabedoria.", livros: ["PSA", "PRO"] },
    { id: "cartas", nome: "Cartas de Paulo em 30 dias", dias: 30, desc: "De Romanos a Filemom, tema: a doutrina e a vida da igreja.", livros: ["ROM", "1CO", "2CO", "GAL", "EPH", "PHI", "COL", "1TH", "2TH", "1TI", "2TI", "TIT", "PHM"] },
  ];
  function leiturasDoPlano(plano) {
    const caps = [];
    for (const cod of plano.livros) for (const c of App.capitulos(cod, "blivre")) caps.push([cod, c]);
    const dias = [];
    for (let d = 0; d < plano.dias; d++) {
      dias.push(caps.slice(Math.round((d * caps.length) / plano.dias), Math.round(((d + 1) * caps.length) / plano.dias)));
    }
    return dias;
  }
  // Junta capítulos seguidos do mesmo livro: [[GEN,1],[GEN,2],[GEN,3]] -> "Gn 1–3"
  function gruposDoDia(caps) {
    const grupos = [];
    for (const [cod, c] of caps) {
      const g = grupos[grupos.length - 1];
      if (g && g.cod === cod && g.fim === c - 1) g.fim = c;
      else grupos.push({ cod, ini: c, fim: c });
    }
    return grupos;
  }
  function hojeISO() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function dataDoDia(inicio, d) {
    const [a, m, dia] = inicio.split("-").map(Number);
    return new Date(a, m - 1, dia + d);
  }

  // Sequência de leitura: dias seguidos e capítulos por semana, a partir de estado.leitura { "aaaa-mm-dd": ["GEN.1", ...] }.
  function htmlLeitura() {
    const log = App.estado.leitura || {};
    const qtd = (iso) => (Array.isArray(log[iso]) ? log[iso].length : 0);
    const agora = new Date();
    const isoHa = (n) => {
      const d = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate() - n);
      return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
    };
    let seq = 0;
    for (let i = qtd(isoHa(0)) ? 0 : 1; qtd(isoHa(i)); i++) seq++;
    let melhor = 0;
    let corrida = 0;
    let anterior = null;
    for (const iso of Object.keys(log).filter(qtd).sort()) {
      const t = dataDoDia(iso, 0).getTime();
      corrida = anterior !== null && Math.round((t - anterior) / 86400000) === 1 ? corrida + 1 : 1;
      melhor = Math.max(melhor, corrida);
      anterior = t;
    }
    const distintos = new Set();
    for (const iso of Object.keys(log)) for (const k of Array.isArray(log[iso]) ? log[iso] : []) distintos.add(k);

    // Oito semanas, de domingo a sábado; a última coluna é a semana atual.
    const hojeSem = agora.getDay();
    const fmt = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit" });
    const semanas = [];
    for (let s = 7; s >= 0; s--) {
      let soma = 0;
      for (let d = 0; d < 7; d++) {
        const ha = hojeSem + 7 * s - d;
        if (ha >= 0) soma += qtd(isoHa(ha));
      }
      semanas.push({ soma, rotulo: s === 0 ? "esta" : fmt.format(new Date(agora.getFullYear(), agora.getMonth(), agora.getDate() - hojeSem - 7 * s)) });
    }
    const teto = Math.max(1, ...semanas.map((x) => x.soma));
    const letras = ["D", "S", "T", "Q", "Q", "S", "S"];
    let dias = "";
    for (let i = 6; i >= 0; i--) {
      const n = qtd(isoHa(i));
      const d = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate() - i);
      dias += '<span class="leit-dia' + (n ? " lido" : "") + (i === 0 ? " hoje" : "") + '" title="' + fmt.format(d) + ": " + n + (n === 1 ? " capítulo" : " capítulos") + '"><i>' +
        (n || "") + "</i>" + letras[d.getDay()] + "</span>";
    }
    const numero = (n, rot) => '<div class="bloco"><strong>' + n + "</strong><span>" + rot + "</span></div>";
    const lembrete = !Object.keys(log).length
      ? "Nada registrado ainda. Abra um capítulo na Bíblia e a contagem começa."
      : qtd(isoHa(0))
        ? "Você já leu hoje."
        : seq
          ? "Leia hoje para manter a sequência."
          : "A sequência recomeça quando você ler hoje.";
    return (
      '<section class="leit"><div class="destaque"><div><div class="rot">Sequência de leitura</div>' +
      '<div class="grande">' + seq + "<small>" + (seq === 1 ? "dia seguido" : "dias seguidos") + "</small></div></div>" +
      '<p class="sub">' + lembrete + '</p><div class="blocos">' +
      numero(semanas[7].soma, semanas[7].soma === 1 ? "capítulo nesta semana" : "capítulos nesta semana") +
      numero(melhor, "dias na melhor sequência") +
      numero(distintos.size, "de 1.189 capítulos já lidos") +
      '</div></div><div class="cartao leit-cartao"><div class="leit-grade"><div><p class="mudo">Últimos 7 dias</p><div class="leit-dias">' + dias + "</div></div>" +
      '<div><p class="mudo">Capítulos por semana</p><div class="leit-semanas">' +
      semanas.map((x) => '<div class="leit-col"><b>' + (x.soma || "") + '</b><i style="height:' + Math.round((x.soma / teto) * 56) + 'px"></i><span>' + x.rotulo + "</span></div>").join("") +
      "</div></div></div>" +
      '<p class="mudo">Um capítulo conta como lido depois de ' + App.SEGUNDOS_LEITURA +
      " segundos aberto na Bíblia, ou quando você marca o dia no plano.</p></div></section>"
    );
  }

  // ---------- plano próprio: livros escolhidos, dias, totais de capítulos e versículos ----------
  const versosCap = (cod, cap) => ((window.VERSICULOS || {})[cod] || [])[cap - 1] || 0;
  const numFmt = new Intl.NumberFormat("pt-BR");
  const MIN_POR_VERSO = 0.14; // leitura em voz baixa, em média
  function capsDosTrechos(trechos) {
    const caps = [];
    for (const [cod, ini, fim] of trechos) for (const c of App.capitulos(cod, "blivre")) if (c >= ini && c <= fim) caps.push([cod, c]);
    return caps;
  }
  // Reparte em ordem. "versos": dias com tamanho parecido; "caps": mesmo número de capítulos. Nenhum dia fica vazio.
  function dividir(caps, dias, modo) {
    const saida = Array.from({ length: dias }, () => []);
    if (!caps.length) return saida;
    const pesos = caps.map(([c, k]) => (modo === "versos" ? Math.max(1, versosCap(c, k)) : 1));
    const total = pesos.reduce((a, b) => a + b, 0);
    let d = 0;
    let acc = 0;
    caps.forEach((cap, i) => {
      if (saida[d].length && d < dias - 1) {
        const faltamCaps = caps.length - i;
        const faltamDias = dias - d - 1;
        if (faltamCaps <= faltamDias || acc + pesos[i] / 2 > ((d + 1) * total) / dias) d++;
      }
      saida[d].push(cap);
      acc += pesos[i];
    });
    return saida;
  }
  function planoProprio(p) {
    if (!p || p.id !== "meu" || !Array.isArray(p.trechos) || !p.trechos.length) return null;
    return { id: "meu", nome: p.nome || "Meu plano", dias: Math.max(1, Number(p.dias) || 1), trechos: p.trechos, modo: p.modo };
  }
  const totaisDe = (caps) => ({ caps: caps.length, versos: caps.reduce((s, [c, k]) => s + versosCap(c, k), 0) });
  const minutos = (versos) => Math.max(1, Math.round(versos * MIN_POR_VERSO));
  const textoTotais = (t) => numFmt.format(t.caps) + (t.caps === 1 ? " capítulo · " : " capítulos · ") + numFmt.format(t.versos) + " versículos";

  const ATALHOS = [
    ["Bíblia toda", () => App.livros.map((l) => l.cod)],
    ["Antigo Testamento", () => AT],
    ["Novo Testamento", () => NT],
    ["Evangelhos", () => ["MAT", "MAR", "LUK", "JOH"]],
    ["Cartas de Paulo", () => ["ROM", "1CO", "2CO", "GAL", "EPH", "PHI", "COL", "1TH", "2TH", "1TI", "2TI", "TIT", "PHM"]],
  ];
  // Rascunho do montador: fica na memória enquanto o app está aberto.
  const rascunho = { livros: {}, ordem: [], ritmo: "dias", dias: 30, porDia: 3, ate: "", modo: "versos", inicio: "", nome: "" };
  function montador(caixa, aoComecar) {
    if (!rascunho.inicio) rascunho.inicio = hojeISO();
    const chipLivro = (l) => '<button class="mt-livro" data-mt-livro="' + l.cod + '" title="' + esc(l.nome) + '" aria-pressed="' + Boolean(rascunho.livros[l.cod]) + '">' + esc(l.abrev) + "</button>";
    caixa.innerHTML =
      '<p class="mudo">Escolha um ou mais livros e quanto tempo quer levar. O app reparte a leitura pelos dias e mostra o total de capítulos e versículos.</p>' +
      '<div class="chips mt-atalhos">' + ATALHOS.map((a, i) => '<button class="chip" data-mt-atalho="' + i + '">' + a[0] + "</button>").join("") +
      '<button class="chip" data-mt-limpar>Limpar</button></div>' +
      '<p class="mt-grupo">Antigo Testamento</p><div class="mt-livros">' + App.livros.slice(0, 39).map(chipLivro).join("") + "</div>" +
      '<p class="mt-grupo">Novo Testamento</p><div class="mt-livros">' + App.livros.slice(39).map(chipLivro).join("") + "</div>" +
      '<div id="mt-tabela"></div>' +
      '<div class="mt-controles">' +
      '<div class="mt-campo"><span>Ritmo</span><div class="mt-seg" role="group" aria-label="Ritmo">' +
      [["dias", "Em quantos dias"], ["porDia", "Capítulos por dia"], ["ate", "Até uma data"]].map(([k, r]) => '<button data-mt-ritmo="' + k + '" aria-pressed="' + (rascunho.ritmo === k) + '">' + r + "</button>").join("") +
      '</div><div class="mt-ritmo-valor">' +
      '<label data-quando="dias"><input type="number" min="1" max="3650" inputmode="numeric" data-mt="dias" value="' + rascunho.dias + '"> dias</label>' +
      '<label data-quando="porDia"><input type="number" min="1" max="200" inputmode="numeric" data-mt="porDia" value="' + rascunho.porDia + '"> capítulos por dia</label>' +
      '<label data-quando="ate">terminar em <input type="date" data-mt="ate" value="' + esc(rascunho.ate) + '"></label></div></div>' +
      '<div class="mt-campo"><span>Dividir os dias</span><div class="mt-seg" role="group" aria-label="Dividir os dias">' +
      [["versos", "Pelo tamanho (versículos)"], ["caps", "Mesmo nº de capítulos"]].map(([k, r]) => '<button data-mt-modo="' + k + '" aria-pressed="' + (rascunho.modo === k) + '">' + r + "</button>").join("") + "</div></div>" +
      '<div class="mt-linha"><label class="mt-campo"><span>Começa em</span><input type="date" data-mt="inicio" value="' + esc(rascunho.inicio) + '"></label>' +
      '<label class="mt-campo mt-nome"><span>Nome do plano</span><input type="text" maxlength="60" data-mt="nome" placeholder="Opcional" value="' + esc(rascunho.nome) + '"></label></div>' +
      '</div><div id="mt-calc"></div>';
    const tabela = caixa.querySelector("#mt-tabela");
    const calc = caixa.querySelector("#mt-calc");
    // A leitura segue a ordem em que os livros foram escolhidos (e que dá para mudar com ↑ ↓).
    const escolhidos = () => rascunho.ordem.filter((c) => rascunho.livros[c]).map((c) => App.porCod.get(c));
    const trechos = () => escolhidos().map((l) => [l.cod, rascunho.livros[l.cod][0], rascunho.livros[l.cod][1]]);

    function desenharTabela() {
      const ls = escolhidos();
      caixa.querySelectorAll("[data-mt-livro]").forEach((b) => b.setAttribute("aria-pressed", String(Boolean(rascunho.livros[b.dataset.mtLivro]))));
      if (!ls.length) {
        tabela.innerHTML = "";
        return;
      }
      let linhas = "";
      ls.forEach((l, pos) => {
        const caps = App.capitulos(l.cod, "blivre");
        const [ini, fim] = rascunho.livros[l.cod];
        linhas +=
          '<tr data-mt-linha="' + l.cod + '"><td class="mt-ord"><b>' + (pos + 1) + "</b>" +
          '<button class="icone" data-mt-mover="-1" data-cod="' + l.cod + '" aria-label="Ler ' + esc(l.nome) + ' antes"' + (pos ? "" : " disabled") + ">↑</button>" +
          '<button class="icone" data-mt-mover="1" data-cod="' + l.cod + '" aria-label="Ler ' + esc(l.nome) + ' depois"' + (pos < ls.length - 1 ? "" : " disabled") + ">↓</button></td>" +
          "<th>" + esc(l.nome) + '</th><td class="mt-faixa">' +
          '<input type="number" min="1" max="' + caps.length + '" data-mt-ini="' + l.cod + '" value="' + ini + '" aria-label="' + esc(l.nome) + ': do capítulo">' +
          '<span>a</span><input type="number" min="1" max="' + caps.length + '" data-mt-fim="' + l.cod + '" value="' + fim + '" aria-label="' + esc(l.nome) + ': até o capítulo"></td>' +
          '<td data-mt-caps></td><td data-mt-versos></td></tr>';
      });
      const biblica = ls.every((l, i) => !i || App.livros.indexOf(ls[i - 1]) < App.livros.indexOf(l));
      const topo = '<div class="mt-ordem-topo"><span class="mudo">A leitura segue esta ordem. Use ↑ ↓ para mudar.</span>' +
        (biblica ? "" : '<button class="link" data-mt-biblica>Pôr na ordem bíblica</button>') + "</div>";
      const corpo = topo + '<table class="mt-tabela"><thead><tr><th>Ordem</th><th>Livro</th><th>Capítulos a ler</th><th>Cap.</th><th>Vers.</th></tr></thead><tbody>' + linhas + "</tbody></table>";
      tabela.innerHTML = ls.length > 12 ? '<details class="mt-det"><summary>Ver os ' + ls.length + " livros e escolher os capítulos</summary>" + corpo + "</details>" : corpo;
      atualizarLinhas();
    }
    function atualizarLinhas() {
      tabela.querySelectorAll("[data-mt-linha]").forEach((tr) => {
        const [cod, ini, fim] = trechos().find((t) => t[0] === tr.dataset.mtLinha) || [];
        const t = totaisDe(capsDosTrechos([[cod, ini, fim]]));
        tr.querySelector("[data-mt-caps]").textContent = numFmt.format(t.caps);
        tr.querySelector("[data-mt-versos]").textContent = numFmt.format(t.versos);
      });
    }
    // Quantos dias o plano terá, conforme o ritmo escolhido.
    function diasDoRitmo(nCaps) {
      let d;
      if (rascunho.ritmo === "porDia") d = Math.ceil(nCaps / Math.max(1, Number(rascunho.porDia) || 1));
      else if (rascunho.ritmo === "ate") {
        if (!rascunho.ate || !rascunho.inicio) return null;
        d = Math.round((dataDoDia(rascunho.ate, 0) - dataDoDia(rascunho.inicio, 0)) / 86400000) + 1;
      } else d = Math.round(Number(rascunho.dias) || 0);
      return d >= 1 ? d : null;
    }
    function desenharCalc() {
      caixa.querySelectorAll("[data-quando]").forEach((l) => (l.hidden = l.dataset.quando !== rascunho.ritmo));
      const tr = trechos();
      const caps = capsDosTrechos(tr);
      if (!caps.length) {
        calc.innerHTML = '<p class="mudo mt-vazio">Nenhum livro escolhido ainda.</p>';
        return;
      }
      const t = totaisDe(caps);
      const bloco = (n, rot) => '<div class="mt-num"><strong>' + n + "</strong><span>" + rot + "</span></div>";
      let html = '<div class="mt-totais">' + bloco(tr.length, tr.length === 1 ? "livro" : "livros") + bloco(numFmt.format(t.caps), "capítulos") +
        bloco(numFmt.format(t.versos), "versículos") + bloco("~" + numFmt.format(Math.round(minutos(t.versos) / 6) / 10), "horas de leitura") + "</div>";
      if (!/^\d{4}-\d{2}-\d{2}$/.test(rascunho.inicio)) {
        calc.innerHTML = html + '<p class="aviso">Escolha a data de início.</p>';
        return;
      }
      let dias = diasDoRitmo(caps.length);
      if (!dias) {
        calc.innerHTML = html + '<p class="aviso">' + (rascunho.ritmo === "ate" ? "Escolha a data final, depois da data de início." : "Informe um número a partir de 1.") + "</p>";
        return;
      }
      let aviso = "";
      if (dias > caps.length) {
        aviso = '<p class="mudo">São ' + caps.length + " capítulos, então o plano fica com " + caps.length + " dias (um capítulo por dia).</p>";
        dias = caps.length;
      }
      const partes = dividir(caps, dias, rascunho.modo);
      const versDia = partes.map((p) => p.reduce((s, [c, k]) => s + versosCap(c, k), 0));
      const fmt = new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "short", year: "numeric" });
      const fmtCurto = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short" });
      const mediaCaps = t.caps / dias;
      html +=
        '<div class="mt-resumo"><p><b>' + numFmt.format(dias) + (dias === 1 ? " dia" : " dias") + "</b>, de " + fmt.format(dataDoDia(rascunho.inicio, 0)) + " a " +
        fmt.format(dataDoDia(rascunho.inicio, dias - 1)) + ".</p><p>Por dia: cerca de <b>" + numFmt.format(Math.round(mediaCaps * 10) / 10) + " capítulos</b> e <b>" +
        numFmt.format(Math.round(t.versos / dias)) + " versículos</b>, uns " + minutos(t.versos / dias) + " min (o dia mais longo tem " + numFmt.format(Math.max(...versDia)) +
        " versículos).</p></div>" + aviso;
      const mostrar = dias <= 8 ? partes.map((_, i) => i) : [0, 1, 2, 3, -1, dias - 2, dias - 1];
      html += '<ol class="mt-previa">' + mostrar.map((i) => {
        if (i === -1) return '<li class="mt-reticencias">…</li>';
        const grupos = gruposDoDia(partes[i]).map((g) => App.porCod.get(g.cod).abrev + " " + g.ini + (g.fim > g.ini ? "–" + g.fim : "")).join(", ");
        return "<li><b>Dia " + (i + 1) + '</b><span class="mudo">' + fmtCurto.format(dataDoDia(rascunho.inicio, i)) + "</span><span>" + esc(grupos) + '</span><small>' + versDia[i] + " vers.</small></li>";
      }).join("") + "</ol>";
      html += '<p><button class="botao principal" data-mt-comecar>Começar este plano</button></p>';
      calc.innerHTML = html;
    }
    function nomePadrao() {
      const ls = escolhidos();
      if (ls.length === App.livros.length) return "Bíblia toda";
      if (ls.length === 1) return "Ler " + ls[0].nome;
      if (ls.length <= 3) return ls.slice(0, -1).map((l) => l.nome).join(", ") + " e " + ls[ls.length - 1].nome;
      return "Meu plano (" + ls.length + " livros)";
    }
    function marcar(cods, ligar) {
      for (const cod of cods) {
        const caps = App.capitulos(cod, "blivre");
        if (ligar) {
          rascunho.livros[cod] = rascunho.livros[cod] || [caps[0], caps[caps.length - 1]];
          if (!rascunho.ordem.includes(cod)) rascunho.ordem.push(cod);
        } else {
          delete rascunho.livros[cod];
          rascunho.ordem = rascunho.ordem.filter((c) => c !== cod);
        }
      }
      desenharTabela();
      desenharCalc();
    }
    caixa.addEventListener("click", (ev) => {
      const lv = ev.target.closest("[data-mt-livro]");
      if (lv) return marcar([lv.dataset.mtLivro], !rascunho.livros[lv.dataset.mtLivro]);
      const mv = ev.target.closest("[data-mt-mover]");
      if (mv) {
        const lista = escolhidos().map((l) => l.cod);
        const i = lista.indexOf(mv.dataset.cod);
        const j = i + Number(mv.dataset.mtMover);
        if (i < 0 || j < 0 || j >= lista.length) return;
        [lista[i], lista[j]] = [lista[j], lista[i]];
        rascunho.ordem = lista;
        const aberto = tabela.querySelector("details[open]");
        desenharTabela();
        if (aberto) tabela.querySelector("details").open = true;
        const botao = tabela.querySelector('[data-mt-mover="' + mv.dataset.mtMover + '"][data-cod="' + mv.dataset.cod + '"]');
        if (botao && !botao.disabled) botao.focus();
        return desenharCalc();
      }
      if (ev.target.closest("[data-mt-biblica]")) {
        rascunho.ordem = App.livros.map((l) => l.cod).filter((c) => rascunho.livros[c]);
        desenharTabela();
        return desenharCalc();
      }
      const at = ev.target.closest("[data-mt-atalho]");
      if (at) {
        const cods = ATALHOS[Number(at.dataset.mtAtalho)][1]();
        return marcar(cods, !cods.every((c) => rascunho.livros[c]));
      }
      if (ev.target.closest("[data-mt-limpar]")) {
        rascunho.livros = {};
        rascunho.ordem = [];
        return marcar([], false);
      }
      const rt = ev.target.closest("[data-mt-ritmo]");
      if (rt) {
        rascunho.ritmo = rt.dataset.mtRitmo;
        caixa.querySelectorAll("[data-mt-ritmo]").forEach((b) => b.setAttribute("aria-pressed", String(b === rt)));
        return desenharCalc();
      }
      const md = ev.target.closest("[data-mt-modo]");
      if (md) {
        rascunho.modo = md.dataset.mtModo;
        caixa.querySelectorAll("[data-mt-modo]").forEach((b) => b.setAttribute("aria-pressed", String(b === md)));
        return desenharCalc();
      }
      if (ev.target.closest("[data-mt-comecar]")) {
        const tr = trechos();
        const caps = capsDosTrechos(tr);
        const dias = Math.min(diasDoRitmo(caps.length) || 0, caps.length);
        if (!dias) return;
        aoComecar({ id: "meu", nome: rascunho.nome.trim() || nomePadrao(), inicio: rascunho.inicio || hojeISO(), feitos: {}, dias, modo: rascunho.modo, trechos: tr });
      }
    });
    caixa.addEventListener("input", (ev) => {
      const c = ev.target;
      if (c.dataset.mt) {
        rascunho[c.dataset.mt] = c.value;
        if (c.dataset.mt !== "nome") desenharCalc();
        return;
      }
      const cod = c.dataset.mtIni || c.dataset.mtFim;
      if (!cod || !rascunho.livros[cod]) return;
      const max = App.capitulos(cod, "blivre").length;
      const n = Math.min(max, Math.max(1, Math.round(Number(c.value) || 0)));
      if (!c.value) return; // deixa o campo vazio enquanto digita
      const faixa = rascunho.livros[cod];
      if (c.dataset.mtIni) faixa[0] = n;
      else faixa[1] = n;
      if (faixa[0] > faixa[1]) faixa[c.dataset.mtIni ? 1 : 0] = n;
      atualizarLinhas();
      desenharCalc();
    });
    // Ao sair do campo, mostra o valor que valeu (por exemplo, 80 vira 50 em Gênesis).
    caixa.addEventListener("change", (ev) => {
      const cod = ev.target.dataset.mtIni || ev.target.dataset.mtFim;
      if (cod && rascunho.livros[cod]) {
        const linha = ev.target.closest("tr");
        linha.querySelector("[data-mt-ini]").value = rascunho.livros[cod][0];
        linha.querySelector("[data-mt-fim]").value = rascunho.livros[cod][1];
      }
    });
    desenharTabela();
    desenharCalc();
  }

  window.Vistas.plano = function (el) {
    const estado = App.estado;
    const plano = estado.plano && (PLANOS.find((p) => p.id === estado.plano.id) || planoProprio(estado.plano));
    const comecar = (novo) => {
      if (estado.plano && !confirm("Começar este plano apaga o progresso do plano atual. Continuar?")) return;
      estado.plano = novo;
      App.salvar();
      window.Vistas.plano(el);
    };

    if (!plano) {
      const r = raiz(
        el,
        "plano-layout",
        "<h1>Plano de leitura</h1>" + htmlLeitura() +
          '<h3>Montar meu plano</h3><section class="cartao montador" id="montador"></section>' +
          "<h3>Planos prontos</h3><p class=\"mudo\">Começam hoje e você marca cada dia conforme lê.</p>" +
          '<div class="planos">' +
          PLANOS.map((p) => '<div class="cartao"><strong>' + esc(p.nome) + '</strong><p class="mudo">' + p.dias + " dias · " +
            textoTotais(totaisDe(p.livros.flatMap((cod) => App.capitulos(cod, "blivre").map((c) => [cod, c])))) + "</p><p>" + esc(p.desc) +
            '</p><button class="botao" data-comecar="' + p.id + '">Começar</button></div>').join("") + "</div>"
      );
      montador(r.querySelector("#montador"), comecar);
      r.addEventListener("click", (ev) => {
        const b = ev.target.closest("[data-comecar]");
        if (!b) return;
        estado.plano = { id: b.dataset.comecar, inicio: hojeISO(), feitos: {} };
        App.salvar();
        window.Vistas.plano(el);
      });
      return;
    }

    const dias = plano.trechos ? dividir(capsDosTrechos(plano.trechos), plano.dias, plano.modo) : leiturasDoPlano(plano);
    const totalPlano = totaisDe(dias.flat());
    const feitos = estado.plano.feitos || (estado.plano.feitos = {});
    const diaHoje = Math.round((dataDoDia(hojeISO(), 0) - dataDoDia(estado.plano.inicio, 0)) / 86400000);
    const fmt = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short" });
    const chips = (caps) =>
      gruposDoDia(caps)
        .map((g) => '<button class="chip" data-ref="' + g.cod + "/" + g.ini + '">' + esc(App.porCod.get(g.cod).abrev + " " + g.ini + (g.fim > g.ini ? "–" + g.fim : "")) + "</button>")
        .join("");

    let linhas = "";
    dias.forEach((caps, d) => {
      const cls = "dia" + (d === diaHoje ? " hoje" : "") + (feitos[d] ? " feito" : "");
      linhas +=
        '<div class="' + cls + '" data-dia="' + d + '"><label><input type="checkbox" data-feito="' + d + '"' + (feitos[d] ? " checked" : "") + ">" +
        "<span><b>Dia " + (d + 1) + "</b> · " + fmt.format(dataDoDia(estado.plano.inicio, d)) + (d === diaHoje ? " · hoje" : "") + "</span></label>" +
        '<div class="chips">' + chips(caps) + "</div>" + '<small class="mudo dia-vers">' + numFmt.format(caps.reduce((s, [c, k]) => s + versosCap(c, k), 0)) + " vers.</small></div>";
    });
    const r = raiz(
      el,
      "plano-layout",
      "<h1>" + esc(plano.nome) + '</h1><p class="mudo">' + textoTotais(totalPlano) + " · " + plano.dias + " dias · cerca de " +
        minutos(totalPlano.versos / plano.dias) + ' min por dia</p><p class="mudo" id="plano-resumo"></p>' +
        '<div class="barra-prog"><i id="plano-barra"></i></div>' +
        '<p class="ferr"><button class="botao" data-ir-hoje>Ir para hoje</button><button class="botao" data-ir-proximo>Próximo não lido</button>' +
        '<button class="botao" data-trocar>Trocar de plano</button></p>' +
        '<div id="plano-leitura">' + htmlLeitura() + "</div>" +
        '<h3>Dias do plano</h3><div class="dias">' + linhas + "</div>" +
        '<details class="cartao montador-det"><summary>Montar outro plano</summary><section class="montador" id="montador"></section></details>'
    );
    montador(r.querySelector("#montador"), comecar);
    function resumo() {
      const n = Object.keys(feitos).length;
      const atraso = Math.min(diaHoje + 1, plano.dias) - n;
      r.querySelector("#plano-resumo").textContent =
        n + " de " + plano.dias + " dias lidos (" + Math.round((n / plano.dias) * 100) + "%)" +
        (diaHoje >= plano.dias ? ". Período do plano encerrado." : atraso > 0 ? ". Faltam " + atraso + (atraso === 1 ? " dia" : " dias") + " para ficar em dia." : ". Você está em dia.");
      r.querySelector("#plano-barra").style.width = (n / plano.dias) * 100 + "%";
    }
    const rolarAte = (d) => {
      const alvo = r.querySelector('.dia[data-dia="' + d + '"]');
      if (alvo) alvo.scrollIntoView({ block: "center" });
    };
    r.addEventListener("change", (ev) => {
      const c = ev.target.closest("[data-feito]");
      if (!c) return;
      if (c.checked) {
        feitos[c.dataset.feito] = true;
        for (const [cod, cap] of dias[Number(c.dataset.feito)] || []) App.registrarLeitura(cod, cap);
        r.querySelector("#plano-leitura").innerHTML = htmlLeitura();
      } else delete feitos[c.dataset.feito];
      c.closest(".dia").classList.toggle("feito", c.checked);
      App.salvar();
      resumo();
    });
    r.addEventListener("click", (ev) => {
      if (ev.target.closest("[data-ir-hoje]")) rolarAte(Math.min(Math.max(diaHoje, 0), plano.dias - 1));
      else if (ev.target.closest("[data-ir-proximo]")) {
        const prox = dias.findIndex((_, d) => !feitos[d]);
        if (prox !== -1) rolarAte(prox);
      } else if (ev.target.closest("[data-trocar]")) {
        if (confirm("Trocar de plano apaga o progresso deste. Continuar?")) {
          estado.plano = null;
          App.salvar();
          window.Vistas.plano(el);
        }
      }
    });
    resumo();
    if (diaHoje > 2 && diaHoje < plano.dias) rolarAte(diaHoje);
  };

  // ======================= PESSOAS E GENEALOGIAS =======================
  const semAcento = (s) => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const chipsRefs = (refs) => {
    const ok = (refs || []).map((x) => [x, App.partesRef(x)]).filter((x) => x[1]);
    return ok.length ? '<div class="chips">' + ok.map(([x, p]) => '<button class="chip" data-ref="' + refParaLink(x) + '">' + esc(App.rotuloPartes(p)) + "</button>").join("") + "</div>" : "";
  };
  let pessoaSel = null;
  let modoPessoas = "pessoas";

  window.Vistas.pessoas = function (el) {
    const pessoas = Array.isArray(window.PESSOAS) ? window.PESSOAS : [];
    if (!pessoas.length) return aviso(el, "Os dados das pessoas ainda não foram carregados.");
    const porId = new Map(pessoas.map((p) => [p.id, p]));
    const gen = window.GENEALOGIAS || {};
    const r = raiz(
      el,
      "harm-layout",
      '<aside class="harm-lista"><p class="ferr" style="margin-top:8px"><button class="botao" data-modo-p="pessoas">Pessoas</button>' +
        '<button class="botao" data-modo-p="genealogias">Genealogias</button></p>' +
        '<input class="campo" id="p-busca" type="search" placeholder="Procurar pessoa" aria-label="Procurar pessoa" style="font-weight:400;font-size:14px">' +
        '<div id="p-lista"></div></aside><div class="harm-conteudo" id="p-conteudo"></div>'
    );
    const listaEl = r.querySelector("#p-lista");
    const conteudo = r.querySelector("#p-conteudo");
    const link = (id, nome) => (id && porId.has(id) ? '<button class="link" data-pessoa="' + esc(id) + '">' + esc(nome) + "</button>" : esc(nome));

    function listar(filtro) {
      const f = semAcento(filtro || "");
      const grupos = [...new Set(pessoas.map((p) => p.grupo))];
      let html = "";
      for (const g of grupos) {
        const itens = pessoas.filter((p) => p.grupo === g && (!f || semAcento(p.nome + " " + (p.outros || "")).includes(f)));
        if (!itens.length) continue;
        html += "<h3>" + esc(g) + "</h3>";
        for (const p of itens) {
          html += '<button class="harm-item' + (p.id === pessoaSel ? " atual" : "") + '" data-pessoa="' + esc(p.id) + '"><span>' + esc(p.nome) + "</span><small>" + esc(p.epoca || "") + "</small></button>";
        }
      }
      listaEl.innerHTML = html || '<p class="mudo">Ninguém com esse nome.</p>';
    }
    function abrirPessoa(id, rolarLista) {
      const p = porId.get(id);
      if (!p) return;
      pessoaSel = id;
      modoPessoas = "pessoas";
      marcarModo();
      listaEl.querySelectorAll(".harm-item").forEach((b) => b.classList.toggle("atual", b.dataset.pessoa === id));
      if (rolarLista) {
        const b = listaEl.querySelector('.harm-item[data-pessoa="' + id + '"]');
        if (b) b.scrollIntoView({ block: "center" });
      }
      const fam = p.familia || {};
      const ids = p.ids || {};
      const nomes = (texto, lista) => {
        // Liga cada nome citado a uma ficha quando o id correspondente existe.
        const candidatos = (Array.isArray(lista) ? lista : lista ? [lista] : []).map((x) => porId.get(x)).filter(Boolean);
        let saida = esc(texto || "");
        for (const c of candidatos) saida = saida.replace(esc(c.nome), '<button class="link" data-pessoa="' + esc(c.id) + '">' + esc(c.nome) + "</button>");
        return saida;
      };
      let html = '<span class="etiqueta">' + esc(p.grupo) + (p.epoca ? " · " + esc(p.epoca) : "") + "</span><h1>" + esc(p.nome) + "</h1>";
      const sub = [p.outros ? "Também: " + p.outros : "", p.significado ? "Nome: “" + p.significado + "”" : ""].filter(Boolean).join(" · ");
      if (sub) html += '<p class="mudo">' + esc(sub) + "</p>";
      html += '<p style="line-height:1.7;max-width:680px">' + esc(p.resumo || "") + "</p>";
      const linhas = [["Pai", fam.pai, ids.pai], ["Mãe", fam.mae, ids.mae], ["Cônjuge", fam.conjuge, ids.conjuge], ["Filhos", fam.filhos, ids.filhos]].filter((x) => x[1]);
      if (linhas.length) {
        html += '<h3>Família</h3><div class="cartao" style="max-width:680px"><dl class="ficha">' +
          linhas.map(([rot, txt, lst]) => "<dt>" + rot + "</dt><dd>" + nomes(txt, lst) + "</dd>").join("") + "</dl></div>";
      }
      const refs = chipsRefs(p.refs);
      if (refs) html += "<h3>Onde aparece</h3>" + refs;
      const rotas = (window.ROTAS || []).filter((x) => (ROTA_PESSOAS[x.id] || []).includes(p.id));
      if (rotas.length) {
        html += '<h3>Trajetos no mapa</h3><div class="chips">' +
          rotas.map((x) => '<button class="chip lig-local" data-rota-ir="' + esc(x.id) + '">' + esc(x.nome) + "</button>").join("") + "</div>";
      }
      conteudo.innerHTML = html;
      conteudo.scrollTop = 0;
      if (App.celular() && !rolarLista) conteudo.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function abrirGenealogias() {
      modoPessoas = "genealogias";
      marcarModo();
      let html = "<h1>Genealogias</h1>";
      const cadeia = gen.messias || [];
      if (cadeia.length) {
        html += "<h3>De Adão a Jesus (" + cadeia.length + ' gerações)</h3><p class="mudo">Segundo Gênesis 5 e 11 e a genealogia de Mateus 1.</p><ol class="cadeia">';
        for (const e of cadeia) {
          const p = App.partesRef(e[3]);
          html += "<li><span>" + link(e[1], e[0]) + (e[2] ? ' <small class="mudo">' + esc(e[2]) + "</small>" : "") + "</span>" +
            (p ? '<button class="chip" data-ref="' + refParaLink(e[3]) + '">' + esc(App.rotuloPartes(p)) + "</button>" : "") + "</li>";
        }
        html += "</ol>";
      }
      const tabela = (titulo, reis) => {
        if (!reis || !reis.length) return "";
        let t = "<h3>" + titulo + " (" + reis.length + ')</h3><div class="tabela-reis">';
        for (const k of reis) {
          const p = App.partesRef(k[5]);
          t += '<div class="rei"><span class="aval ' + esc(k[3] || "") + '" title="' + esc(k[3] || "") + '"></span><div><strong>' + link(k[1], k[0]) +
            '</strong> <small class="mudo">' + esc(k[2] || "") + "</small>" + (k[4] ? "<p>" + esc(k[4]) + "</p>" : "") + "</div>" +
            (p ? '<button class="chip" data-ref="' + refParaLink(k[5]) + '">' + esc(App.rotuloPartes(p)) + "</button>" : "") + "</div>";
        }
        return t + "</div>";
      };
      html += tabela("Reino unido", gen.reinoUnido) + tabela("Reis de Israel (norte)", gen.israel) + tabela("Reis de Judá (sul)", gen.juda);
      html += '<p class="mudo" style="margin-top:14px">Marcador: verde = avaliado como bom pelo texto bíblico; vermelho = mau; amarelo = misto.</p>' +
        '<p><button class="botao" data-abrir-reis>Ver reis e profetas na linha do tempo</button></p>';
      conteudo.innerHTML = html;
      conteudo.scrollTop = 0;
    }
    function marcarModo() {
      r.querySelectorAll("[data-modo-p]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.modoP === modoPessoas)));
    }
    r.querySelector("#p-busca").addEventListener("input", (ev) => listar(ev.target.value));
    r.addEventListener("click", (ev) => {
      const m = ev.target.closest("[data-modo-p]");
      if (m) return m.dataset.modoP === "genealogias" ? abrirGenealogias() : abrirPessoa(pessoaSel || pessoas[0].id, true);
      const rt = ev.target.closest("[data-rota-ir]");
      if (rt) return window.Vistas.irRota(rt.dataset.rotaIr);
      if (ev.target.closest("[data-abrir-reis]")) return App.abrirVista("reis");
      const b = ev.target.closest("[data-pessoa]");
      if (b) abrirPessoa(b.dataset.pessoa, !b.classList.contains("harm-item"));
    });
    listar("");
    if (modoPessoas === "genealogias") abrirGenealogias();
    else abrirPessoa(pessoaSel && porId.has(pessoaSel) ? pessoaSel : pessoas[0].id, true);
  };

  // ======================= REIS E PROFETAS =======================
  // Linha do tempo em escala: quatro faixas (profetas do norte, reis de Israel, reis de Judá, profetas de Judá).
  let reiSel = null;
  window.Vistas.reis = function (el) {
    const gen = window.GENEALOGIAS || {};
    const profetas = Array.isArray(window.PROFETAS) ? window.PROFETAS : [];
    if (!gen.juda || !gen.israel || !profetas.length) return aviso(el, "Os dados de reis e profetas ainda não foram carregados.");
    const INI = 1080; // a.C., borda esquerda
    const FIM = 420;
    const PX = 4; // pixels por ano
    const x = (ano) => (INI - ano) * PX;
    const anos = (txt) => {
      const n = (String(txt).match(/\d+/g) || []).map(Number);
      return n.length ? [n[0], n[n.length - 1]] : null;
    };

    const itens = [];
    const rei = (k, reino, faixa) => {
      const a = anos(k[2]);
      if (a) itens.push({ tipo: "rei", reino, faixa, nome: k[0], id: k[1], ini: a[0], fim: a[1], datas: k[2], aval: k[3], nota: k[4], ref: k[5] });
    };
    (gen.reinoUnido || []).forEach((k) => rei(k, "unido", "reis-sul"));
    gen.juda.forEach((k) => rei(k, "juda", "reis-sul"));
    gen.israel.forEach((k) => rei(k, "israel", "reis-norte"));
    for (const p of profetas) {
      itens.push({ tipo: "profeta", faixa: "prof-" + p[4], nome: p[0], id: p[1], ini: p[2], fim: p[3], nota: p[5], ref: p[6],
        datas: "c. " + (p[2] - p[3] <= 2 ? Math.round((p[2] + p[3]) / 2) : p[2] + "–" + p[3]) + " a.C." });
    }
    for (const p of window.PERIODOS_REIS || []) {
      itens.push({ tipo: "periodo", faixa: "reis-" + p[3], nome: p[0], id: "", ini: p[1], fim: p[2], nota: p[4], ref: p[5], datas: p[1] + "–" + p[2] + " a.C." });
    }
    itens.forEach((it, i) => (it.k = String(i)));
    const porK = new Map(itens.map((it) => [it.k, it]));

    const FAIXAS = [
      ["prof-norte", "Profetas no norte"],
      ["reis-norte", "Reis de Israel (norte)"],
      ["reis-sul", "Reino unido e reis de Judá (sul)"],
      ["prof-sul", "Profetas em Judá, no exílio e no retorno"],
    ];
    const ALTURA = 28;
    function htmlFaixa(faixa, titulo) {
      const lista = itens.filter((it) => it.faixa === faixa).sort((a, b) => b.ini - a.ini || b.fim - a.fim);
      const fimDaLinha = [];
      let html = "";
      for (const it of lista) {
        const w = Math.max((it.ini - it.fim) * PX, 5);
        const larguraNome = it.nome.length * 6.7 + 14;
        const dentro = w >= larguraNome;
        const esq = x(it.ini);
        let linha = fimDaLinha.findIndex((f) => f + 8 <= esq);
        if (linha === -1) linha = fimDaLinha.length;
        fimDaLinha[linha] = esq + (dentro ? w : w + larguraNome);
        html +=
          '<button class="rp-item rp-' + it.tipo + (it.aval ? " rp-" + esc(it.aval) : "") + (dentro ? "" : " fora") + '" data-rp="' + it.k +
          '" style="left:' + esq + "px;top:" + linha * ALTURA + "px;width:" + w + 'px" title="' + esc(it.nome + " · " + it.datas) + '"><span>' + esc(it.nome) + "</span></button>";
      }
      return '<div class="rp-faixa"><div class="rp-titulo"><span>' + titulo + '</span></div><div class="rp-pista" style="height:' + Math.max(1, fimDaLinha.length) * ALTURA + 'px">' + html + "</div></div>";
    }
    let eixo = "";
    for (let a = 1050; a >= 450; a -= 50) eixo += '<span class="rp-ano" style="left:' + x(a) + 'px">' + a + " a.C.</span>";
    let marcos = "";
    (window.MARCOS_REIS || []).forEach((m, i) => {
      marcos += '<div class="rp-marco" style="left:' + x(m[0]) + 'px"><button data-ref="' + refParaLink(m[2]) + '" style="top:' + (22 + (i % 2) * 18) + 'px">' + m[0] + " · " + esc(m[1]) + "</button></div>";
    });

    const r = raiz(
      el,
      "rp-layout",
      "<h1>Reis e profetas</h1>" +
        '<p class="mudo">Do reino unido ao retorno do exílio, em escala. Arraste para os lados e toque num rei ou profeta para ver quem viveu na mesma época.</p>' +
        '<p class="rp-legenda"><span><i class="aval bom"></i>rei avaliado como bom</span><span><i class="aval misto"></i>misto</span><span><i class="aval mau"></i>mau</span>' +
        '<span><i class="aval prof"></i>profeta</span></p>' +
        '<div class="rp-corpo"><div class="rp-rolagem" id="rp-rolagem"><div class="rp-quadro" style="width:' + x(FIM) + 'px">' +
        '<div class="rp-banda" id="rp-banda" hidden></div>' + marcos +
        '<div class="rp-eixo">' + eixo + "</div>" +
        FAIXAS.map((f) => htmlFaixa(f[0], f[1])).join("") +
        "</div></div>" +
        '<div id="rp-detalhe" class="rp-detalhe"></div></div>'
    );
    const detalhe = r.querySelector("#rp-detalhe");
    const rolagem = r.querySelector("#rp-rolagem");
    const banda = r.querySelector("#rp-banda");

    const juntos = (a, b) => {
      const sobra = Math.min(a.ini, b.ini) - Math.max(a.fim, b.fim);
      return sobra > 0 || (sobra === 0 && (a.ini === a.fim || b.ini === b.fim));
    };
    const ROTULO = { unido: "Rei do reino unido", juda: "Rei de Judá (sul)", israel: "Rei de Israel (norte)" };
    function selecionar(k, rolar) {
      const it = porK.get(k);
      if (!it) return;
      reiSel = k;
      r.querySelectorAll(".rp-item").forEach((b) => b.classList.toggle("atual", b.dataset.rp === k));
      banda.hidden = false;
      banda.style.left = x(it.ini) + "px";
      banda.style.width = Math.max((it.ini - it.fim) * PX, 5) + "px";
      if (rolar) rolagem.scrollLeft = Math.max(0, x(it.ini) - rolagem.clientWidth / 2 + ((it.ini - it.fim) * PX) / 2);

      const tipo = it.tipo === "rei" ? ROTULO[it.reino] : it.tipo === "profeta" ? (it.faixa === "prof-norte" ? "Profeta no norte" : "Profeta em Judá") : "Período";
      let html = '<span class="etiqueta">' + tipo + " · " + esc(it.datas) + "</span><h2>" +
        (it.aval ? '<i class="aval ' + esc(it.aval) + '" title="' + esc(it.aval) + '"></i>' : "") + esc(it.nome) + "</h2>";
      if (it.nota) html += "<p>" + esc(it.nota) + ".</p>";
      const p = App.partesRef(it.ref);
      html += '<div class="chips">' + (p ? '<button class="chip" data-ref="' + refParaLink(it.ref) + '">' + esc(App.rotuloPartes(p)) + "</button>" : "") +
        (it.id && pessoaPorId(it.id) ? '<button class="chip lig-pessoa" data-pessoa-ir="' + esc(it.id) + '">Abrir a ficha</button>' : "") + "</div>";

      const grupo = (titulo, filtro) => {
        const lista = itens.filter((o) => o !== it && filtro(o) && juntos(it, o)).sort((a, b) => b.ini - a.ini);
        if (!lista.length) return "";
        return "<h3>" + titulo + '</h3><div class="chips">' +
          lista.map((o) => '<button class="chip" data-rp="' + o.k + '">' + (o.aval ? '<i class="aval ' + esc(o.aval) + '"></i>' : "") + esc(o.nome) +
            " <small>" + esc(o.datas.replace("c. ", "").replace(" a.C.", "")) + "</small></button>").join("") + "</div>";
      };
      const reisNorte = grupo("Reis de Israel (norte) na mesma época", (o) => o.tipo === "rei" && o.reino === "israel");
      const reisSul = grupo("Reis de Judá e do reino unido na mesma época", (o) => o.tipo === "rei" && o.reino !== "israel");
      const profNorte = grupo(it.tipo === "rei" && it.reino === "israel" ? "Profetas que falaram neste reinado" : "Profetas no norte na mesma época", (o) => o.faixa === "prof-norte");
      const profSul = grupo(it.tipo === "rei" && it.reino !== "israel" ? "Profetas que falaram neste reinado" : "Profetas em Judá na mesma época", (o) => o.faixa === "prof-sul");
      const blocos = it.tipo === "rei"
        ? it.reino === "israel" ? [profNorte, profSul, reisSul] : [profSul, profNorte, reisNorte]
        : it.faixa === "prof-norte" ? [reisNorte, reisSul, profNorte, profSul] : [reisSul, reisNorte, profSul, profNorte];
      const corpo = blocos.join("");
      html += corpo || (it.tipo === "rei" ? '<p class="mudo">Nenhum profeta desta lista é datado neste reinado.</p>' : "");
      detalhe.innerHTML = html;
    }
    r.addEventListener("click", (ev) => {
      const gente = ev.target.closest("[data-pessoa-ir]");
      if (gente) return window.Vistas.irPessoa(gente.dataset.pessoaIr);
      const b = ev.target.closest("[data-rp]");
      if (!b) return;
      const daLinha = b.classList.contains("rp-item");
      selecionar(b.dataset.rp, !daLinha);
      // Em tela estreita a ficha fica abaixo da linha do tempo: leva o olhar até ela (ou de volta à linha).
      if (window.matchMedia("(max-width: 1099px)").matches) (daLinha ? detalhe : rolagem).scrollIntoView({ behavior: "smooth", block: daLinha ? "nearest" : "start" });
    });
    if (reiSel && porK.has(reiSel)) selecionar(reiSel, true);
    else {
      detalhe.innerHTML = '<p class="mudo">Nenhum nome selecionado. As linhas verticais marcam a divisão do reino, as quedas de Samaria e de Jerusalém e o retorno.</p>';
      rolagem.scrollLeft = x(960);
    }
  };

  // ======================= PASSAGENS DIFÍCEIS =======================
  let difSel = null;
  let difBusca = "";
  window.Vistas.irDificil = function (id) {
    difSel = id;
    difBusca = "";
    App.abrirVista("dificeis");
  };
  window.Vistas.dificeis = function (el) {
    const todas = Array.isArray(window.DIFICEIS) ? window.DIFICEIS : [];
    if (!todas.length) return aviso(el, "As passagens difíceis ainda não foram carregadas.");
    const r = raiz(
      el,
      "harm-layout",
      '<aside class="harm-lista"><input class="campo" id="dif-busca" type="search" placeholder="Procurar passagem ou assunto" aria-label="Procurar passagem difícil" style="font-weight:400;font-size:14px" value="' + esc(difBusca) + '">' +
        '<div id="dif-lista"></div></aside><div class="harm-conteudo" id="dif-conteudo"></div>'
    );
    const listaEl = r.querySelector("#dif-lista");
    const conteudo = r.querySelector("#dif-conteudo");
    function listar() {
      const f = semAcento(difBusca);
      let html = "";
      for (const cat of [...new Set(todas.map((d) => d.categoria))]) {
        const itens = todas.filter((d) => d.categoria === cat && (!f || semAcento(d.titulo + " " + d.pergunta + " " + (d.refs || []).map((x) => {
          const p = App.partesRef(x);
          return p ? App.porCod.get(p.cod).nome + " " + App.rotuloPartes(p) : "";
        }).join(" ")).includes(f)));
        if (!itens.length) continue;
        html += "<h3>" + esc(cat) + "</h3>";
        for (const d of itens) {
          const p = App.partesRef((d.refs || [])[0]);
          html += '<button class="harm-item' + (d.id === difSel ? " atual" : "") + '" data-dif="' + esc(d.id) + '"><span>' + esc(d.titulo) + "</span><small>" + (p ? esc(App.rotuloPartes(p)) : "") + "</small></button>";
        }
      }
      listaEl.innerHTML = html || '<p class="mudo">Nada encontrado.</p>';
    }
    function abrir(id, rolar) {
      const d = todas.find((x) => x.id === id);
      if (!d) return;
      difSel = id;
      listaEl.querySelectorAll(".harm-item").forEach((b) => b.classList.toggle("atual", b.dataset.dif === id));
      if (rolar) {
        const b = listaEl.querySelector('.harm-item[data-dif="' + id + '"]');
        if (b) b.scrollIntoView({ block: "center" });
      }
      conteudo.innerHTML =
        '<span class="etiqueta">' + esc(d.categoria) + "</span><h1>" + esc(d.titulo) + "</h1>" + chipsRefs(d.refs) +
        '<p class="dif-pergunta">' + esc(d.pergunta) + "</p>" +
        "<h3>Leituras lado a lado</h3>" + '<div class="dif-leituras">' +
        (d.leituras || []).map((l) => '<div class="cartao"><strong>' + esc(l.nome) + "</strong><p>" + esc(l.resumo) + "</p></div>").join("") + "</div>" +
        (d.comum ? "<h3>O que há em comum</h3>" + '<p class="dif-comum">' + esc(d.comum) + "</p>" : "");
      conteudo.scrollTop = 0;
      if (App.celular() && !rolar) conteudo.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    r.querySelector("#dif-busca").addEventListener("input", (ev) => {
      difBusca = ev.target.value;
      listar();
    });
    r.addEventListener("click", (ev) => {
      const b = ev.target.closest("[data-dif]");
      if (b) abrir(b.dataset.dif, false);
    });
    listar();
    abrir(difSel && todas.some((x) => x.id === difSel) ? difSel : todas[0].id, true);
  };

  // ======================= DICIONÁRIO =======================
  let dicCategoria = "";
  let dicBusca = "";

  window.Vistas.dicionario = function (el) {
    const itens = Array.isArray(window.DICIONARIO) ? window.DICIONARIO : [];
    if (!itens.length) return aviso(el, "Os dados do dicionário ainda não foram carregados.");
    const categorias = [...new Set(itens.map((x) => x.categoria))];
    const r = raiz(
      el,
      "cit-layout",
      "<h1>Dicionário bíblico</h1>" +
        '<p class="mudo">' + itens.length + " verbetes sobre festas, culto, templo, moedas, medidas, costumes e grupos. Equivalências são aproximadas.</p>" +
        '<div class="chips" id="dic-cats"></div>' +
        '<input class="campo" id="dic-busca" type="search" placeholder="Procurar termo" aria-label="Procurar termo" style="font-weight:400;font-size:15px;max-width:420px">' +
        '<div id="dic-lista"></div>'
    );
    const lista = r.querySelector("#dic-lista");
    const cats = r.querySelector("#dic-cats");
    const campo = r.querySelector("#dic-busca");
    campo.value = dicBusca;
    function desenhar() {
      cats.innerHTML = '<button class="chip' + (dicCategoria === "" ? " atual" : "") + '" data-cat="">Todas</button>' +
        categorias.map((c) => '<button class="chip' + (c === dicCategoria ? " atual" : "") + '" data-cat="' + esc(c) + '">' + esc(c) + "</button>").join("");
      const f = semAcento(dicBusca);
      const visiveis = itens
        .filter((x) => (!dicCategoria || x.categoria === dicCategoria) && (!f || semAcento(x.termo + " " + x.texto).includes(f)))
        // Com busca, quem tem o termo no título vem antes de quem só o cita no texto.
        .sort((a, b) => (f ? semAcento(b.termo).includes(f) - semAcento(a.termo).includes(f) : 0) || a.termo.localeCompare(b.termo, "pt"));
      lista.innerHTML = visiveis.length
        ? visiveis.map((x) =>
            '<article class="cartao verbete"><span class="etiqueta">' + esc(x.categoria) + "</span><h2>" + esc(x.termo) + "</h2><p>" + esc(x.texto) + "</p>" +
            (x.dados && x.dados.length ? '<dl class="ficha">' + x.dados.map((d) => "<dt>" + esc(d[0]) + "</dt><dd>" + esc(d[1]) + "</dd>").join("") + "</dl>" : "") +
            chipsRefs(x.refs) + "</article>").join("")
        : '<p class="mudo">Nenhum verbete encontrado.</p>';
    }
    campo.addEventListener("input", () => {
      dicBusca = campo.value;
      desenhar();
    });
    r.addEventListener("click", (ev) => {
      const c = ev.target.closest("[data-cat]");
      if (!c) return;
      dicCategoria = c.dataset.cat;
      desenhar();
    });
    desenhar();
  };

  // ======================= MEMORIZAR =======================
  // Cartões de revisão dos versículos salvos (★), com repetição espaçada simples (sistema de caixas de Leitner):
  // acertou, o cartão sobe de caixa e volta daqui a mais dias; errou, volta para a primeira.
  const INTERVALOS = [0, 1, 3, 7, 14, 30]; // dias até a próxima revisão, por caixa
  let modoMemo = "lembrar";

  function isoMais(dias) {
    const d = new Date();
    d.setDate(d.getDate() + dias);
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function lerChave(k) {
    const [cod, cap, v] = k.split(".");
    return App.porCod.has(cod) ? { k, cod, cap: Number(cap), v: Number(v) } : null;
  }
  // Esconde uma a cada duas palavras com mais de três letras, deixando a inicial como pista.
  function comLacunas(texto) {
    let n = 0;
    return esc(texto).replace(/[\p{L}]{4,}/gu, (p) => (n++ % 2 === 0 ? p : '<span class="lacuna">' + p[0] + "<i>" + "_".repeat(Math.min(p.length - 1, 8)) + "</i></span>"));
  }

  window.Vistas.memorizar = function (el) {
    const estado = App.estado;
    const memo = estado.memo;
    const baralho = Object.keys(estado.salvos).map(lerChave).filter((x) => x && Number.isInteger(x.v));
    if (!baralho.length) {
      raiz(el, "plano-layout",
        "<h1>Memorizar</h1><p>Os cartões são feitos dos versículos que você salva.</p>" +
        '<p class="aviso">Ainda não há versículos salvos. Na Bíblia, toque num versículo e use <b>☆ Salvar</b> na barra que aparece embaixo dele; ele vira um cartão aqui.</p>');
      return;
    }
    const hoje = isoMais(0);
    const ordemLivro = new Map(App.todos.map((l, i) => [l.cod, i]));
    baralho.sort((a, b) => ordemLivro.get(a.cod) - ordemLivro.get(b.cod) || a.cap - b.cap || a.v - b.v);
    const vencido = (x) => !memo[x.k] || !memo[x.k].p || memo[x.k].p <= hoje;
    let fila = baralho.filter(vencido).sort((a, b) => ((memo[a.k] || {}).c || 0) - ((memo[b.k] || {}).c || 0));
    let revelado = false;

    const r = raiz(el, "plano-layout",
      '<h1>Memorizar</h1><p class="mudo" id="memo-resumo"></p>' +
      '<p class="ferr"><button class="botao" data-modo-memo="lembrar">Lembrar o texto</button><button class="botao" data-modo-memo="completar">Completar as lacunas</button></p>' +
      '<div id="memo-cartao"></div><h3>Todos os cartões</h3><div id="memo-lista"></div>');
    const cartaoEl = r.querySelector("#memo-cartao");
    const rotulo = (x) => App.porCod.get(x.cod).nome + " " + x.cap + ":" + x.v;
    const textoDe = (x) => App.carregarLivro(estado.versao, x.cod).then((d) => ((d[x.cap] || []).find((y) => y[0] === x.v) || [])[1] || "", () => "");

    function resumo() {
      const firmes = baralho.filter((x) => memo[x.k] && memo[x.k].c >= 4).length;
      r.querySelector("#memo-resumo").textContent =
        baralho.length + (baralho.length === 1 ? " cartão" : " cartões") + " · " + fila.length + " para revisar hoje · " + firmes + " bem memorizados";
      r.querySelectorAll("[data-modo-memo]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.modoMemo === modoMemo)));
      r.querySelector("#memo-lista").innerHTML = baralho
        .map((x) => {
          const m = memo[x.k];
          const nivel = m ? m.c : 0;
          return '<div class="memo-linha"><button class="link" data-ref="' + x.cod + "/" + x.cap + "/" + x.v + '">' + esc(rotulo(x)) + "</button>" +
            '<span class="niveis" title="Nível ' + nivel + ' de 5">' + [1, 2, 3, 4, 5].map((i) => '<i class="' + (i <= nivel ? "cheio" : "") + '"></i>').join("") + "</span>" +
            '<small class="mudo">' + (!m ? "novo" : m.p <= hoje ? "revisar hoje" : "volta em " + m.p.split("-").reverse().slice(0, 2).join("/")) + "</small></div>";
        })
        .join("");
    }
    async function mostrar() {
      resumo();
      const x = fila[0];
      if (!x) {
        const proximas = baralho.map((y) => memo[y.k] && memo[y.k].p).filter((p) => p && p > hoje).sort();
        cartaoEl.innerHTML =
          '<div class="cartao memo-cartao"><h2>Tudo revisado por hoje</h2><p class="mudo">' +
          (proximas.length ? "Próxima revisão em " + proximas[0].split("-").reverse().join("/") + "." : "") +
          '</p><button class="botao" data-memo="tudo">Revisar todos mesmo assim</button></div>';
        return;
      }
      const texto = await textoDe(x);
      if (fila[0] !== x) return;
      let html = '<div class="cartao memo-cartao"><span class="etiqueta">' +
        (fila.length > 1 ? "Faltam " + fila.length + " cartões" : "Último cartão de hoje") + "</span><h2>" + esc(rotulo(x)) + "</h2>";
      if (!revelado) {
        html += modoMemo === "completar" ? '<p class="memo-texto">' + comLacunas(texto) + "</p>" : '<p class="mudo">Diga o versículo em voz alta ou de cabeça e depois confira.</p>';
        html += '<p><button class="botao principal" data-memo="revelar">Mostrar o texto</button></p>';
      } else {
        html += '<p class="memo-texto">' + App.formatarVerso(texto) + '</p><p class="mudo">' + esc(App.VERSOES[estado.versao].nome) + "</p>" +
          '<p class="ferr"><button class="botao" data-memo="errei">Errei</button><button class="botao" data-memo="dificil">Lembrei com dificuldade</button>' +
          '<button class="botao principal" data-memo="lembrei">Lembrei bem</button></p>';
      }
      cartaoEl.innerHTML = html + "</div>";
    }
    r.addEventListener("click", (ev) => {
      const modo = ev.target.closest("[data-modo-memo]");
      if (modo) {
        modoMemo = modo.dataset.modoMemo;
        revelado = false;
        return mostrar();
      }
      const b = ev.target.closest("[data-memo]");
      if (!b) return;
      const acao = b.dataset.memo;
      if (acao === "tudo") {
        fila = baralho.slice();
        revelado = false;
        return mostrar();
      }
      if (acao === "revelar") {
        revelado = true;
        return mostrar();
      }
      const x = fila.shift();
      if (!x) return;
      const m = memo[x.k] || { c: 0, p: "" };
      if (acao === "errei") {
        m.c = 0;
        m.p = hoje;
        fila.push(x); // volta ainda nesta sessão
      } else if (acao === "dificil") {
        m.c = Math.max(m.c, 1);
        m.p = isoMais(1);
      } else {
        m.c = Math.min(m.c + 1, 5);
        m.p = isoMais(INTERVALOS[m.c]);
      }
      memo[x.k] = m;
      App.salvar();
      revelado = false;
      mostrar();
    });
    // Tira do registro os cartões cujo versículo deixou de estar salvo.
    for (const k of Object.keys(memo)) if (!estado.salvos[k]) delete memo[k];
    mostrar();
  };
})();
