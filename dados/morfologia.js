// Traduz os códigos de morfologia para português.
// Hebraico/aramaico: códigos do OpenScriptures (ex.: HVqp3ms). Grego: códigos de Robinson (ex.: V-AAI-3S).
(function () {
  "use strict";

  const GENERO = { m: "masculino", f: "feminino", c: "comum", b: "ambos os gêneros", n: "neutro" };
  const NUMERO = { s: "singular", p: "plural", d: "dual" };
  const ESTADO = { a: "absoluto", c: "construto", d: "determinado" };
  const PESSOA = { 1: "1ª pessoa", 2: "2ª pessoa", 3: "3ª pessoa" };

  const TRONCO_HEB = {
    q: "qal", N: "nifal", p: "piel", P: "pual", h: "hifil", H: "hofal", t: "hitpael", o: "polel", O: "polal",
    r: "hitpolel", m: "poel", M: "poal", k: "palel", K: "pulal", Q: "qal passivo", l: "pilpel", L: "polpal",
    f: "hitpalpel", D: "nitpael", j: "pealal", i: "pilel", u: "hotpaal", c: "tifil", v: "hishtafel",
    w: "nitpalel", y: "nitpoel", z: "hitpoel",
  };
  const TRONCO_ARA = {
    q: "peal", Q: "peil", u: "hitpeel", p: "pael", P: "itpaal", M: "hitpaal", a: "afel", h: "hafel", s: "shafel",
    e: "shafel", H: "hofal", i: "itpeel", t: "hishtafel", v: "ishtafel", w: "hitafel", o: "polel", z: "itpoel",
    r: "hitpolel", f: "hitpalpel", b: "hefal", c: "tifel", m: "poel", l: "palpel", L: "itpalpel", O: "itpolel", G: "itafal",
  };
  const TIPO_VERBO = {
    p: "perfeito", q: "perfeito sequencial (weqatal)", i: "imperfeito", w: "imperfeito consecutivo (wayyiqtol)",
    h: "coortativo", j: "jussivo", v: "imperativo", r: "particípio ativo", s: "particípio passivo",
    a: "infinitivo absoluto", c: "infinitivo construto",
  };

  function pgn(resto, comPessoa) {
    const partes = [];
    let i = 0;
    if (comPessoa && PESSOA[resto[i]]) partes.push(PESSOA[resto[i++]]);
    if (GENERO[resto[i]]) partes.push(GENERO[resto[i++]]);
    if (NUMERO[resto[i]]) partes.push(NUMERO[resto[i++]]);
    if (ESTADO[resto[i]]) partes.push("estado " + ESTADO[resto[i++]]);
    return partes;
  }

  function hebraico(cod) {
    const aramaico = cod[0] === "A";
    const classe = cod[1];
    const r = cod.slice(2);
    const partes = [];
    if (classe === "V") {
      partes.push("verbo");
      const tronco = (aramaico ? TRONCO_ARA : TRONCO_HEB)[r[0]];
      if (tronco) partes.push("tronco " + tronco);
      if (TIPO_VERBO[r[1]]) partes.push(TIPO_VERBO[r[1]]);
      const participio = r[1] === "r" || r[1] === "s";
      partes.push(...pgn(r.slice(2), !participio));
    } else if (classe === "N") {
      const tipo = { c: "substantivo comum", g: "gentílico", p: "nome próprio" }[r[0]] || "substantivo";
      partes.push(tipo);
      if (r[0] === "p") {
        const sub = { m: "de pessoa (masculino)", f: "de pessoa (feminino)", l: "de lugar", t: "título divino" }[r[1]];
        if (sub) partes.push(sub);
      } else {
        partes.push(...pgn(r.slice(1), false));
      }
    } else if (classe === "A") {
      partes.push({ a: "adjetivo", c: "numeral cardinal", g: "gentílico", o: "numeral ordinal" }[r[0]] || "adjetivo");
      partes.push(...pgn(r.slice(1), false));
    } else if (classe === "P") {
      partes.push("pronome " + ({ d: "demonstrativo", f: "indefinido", i: "interrogativo", p: "pessoal", r: "relativo" }[r[0]] || ""));
      partes.push(...pgn(r.slice(1), true));
    } else if (classe === "T") {
      partes.push(
        { a: "partícula afirmativa", d: "artigo definido", e: "partícula exortativa", i: "partícula interrogativa", j: "interjeição",
          m: "partícula demonstrativa", n: "partícula negativa", o: "marcador de objeto direto", r: "partícula relativa" }[r[0]] || "partícula"
      );
    } else if (classe === "R") {
      partes.push("preposição");
    } else if (classe === "C") {
      partes.push("conjunção");
    } else if (classe === "D") {
      partes.push("advérbio");
    } else if (classe === "S") {
      partes.push("sufixo pronominal");
      partes.push(...pgn(r.slice(1), true));
    } else {
      return "";
    }
    return (aramaico ? "aramaico · " : "") + partes.filter(Boolean).join(", ");
  }

  const CASO = { N: "nominativo", G: "genitivo", D: "dativo", A: "acusativo", V: "vocativo" };
  const NUM_G = { S: "singular", P: "plural" };
  const GEN_G = { M: "masculino", F: "feminino", N: "neutro" };
  const TEMPO = { P: "presente", I: "imperfeito", F: "futuro", A: "aoristo", R: "perfeito", L: "mais-que-perfeito" };
  const VOZ = { A: "ativa", M: "média", P: "passiva", E: "média ou passiva", D: "média depoente", O: "passiva depoente", N: "média ou passiva depoente", Q: "ativa impessoal", X: "sem voz definida" };
  const MODO = { I: "indicativo", S: "subjuntivo", O: "optativo", M: "imperativo", N: "infinitivo", P: "particípio" };
  const CLASSE_G = {
    N: "substantivo", A: "adjetivo", T: "artigo", V: "verbo", P: "pronome pessoal", R: "pronome relativo", C: "pronome recíproco",
    D: "pronome demonstrativo", K: "pronome correlativo", I: "pronome interrogativo", X: "pronome indefinido",
    Q: "pronome correlativo ou interrogativo", F: "pronome reflexivo", S: "pronome possessivo",
    ADV: "advérbio", CONJ: "conjunção", COND: "partícula condicional", PRT: "partícula", PREP: "preposição",
    INJ: "interjeição", ARAM: "palavra aramaica", HEB: "palavra hebraica",
  };

  function cng(s) {
    // caso, número e gênero (ex.: NSM); pronomes podem trazer a pessoa antes (ex.: 1GS).
    const partes = [];
    let i = 0;
    if (PESSOA[s[i]]) partes.push(PESSOA[s[i++]]);
    if (CASO[s[i]]) partes.push(CASO[s[i++]]);
    if (NUM_G[s[i]]) partes.push(NUM_G[s[i++]]);
    if (GEN_G[s[i]]) partes.push(GEN_G[s[i++]]);
    return partes;
  }

  function grego(cod) {
    const seg = cod.split("-");
    const classe = CLASSE_G[seg[0]];
    if (!classe) return "";
    const partes = [classe];
    if (seg[0] === "V" && seg[1]) {
      let t = seg[1];
      if (t[0] === "2") {
        partes.push("forma segunda");
        t = t.slice(1);
      }
      if (TEMPO[t[0]]) partes.push(TEMPO[t[0]]);
      if (VOZ[t[1]]) partes.push("voz " + VOZ[t[1]]);
      if (MODO[t[2]]) partes.push(MODO[t[2]]);
      if (seg[2]) {
        if (PESSOA[seg[2][0]]) {
          partes.push(PESSOA[seg[2][0]]);
          if (NUM_G[seg[2][1]]) partes.push(NUM_G[seg[2][1]]);
        } else {
          partes.push(...cng(seg[2]));
        }
      }
    } else if (seg[1]) {
      if (seg[1] === "PRI") partes.push("nome próprio indeclinável");
      else if (seg[1] === "NUI") partes.push("numeral indeclinável");
      else if (seg[1] === "LI") partes.push("letra indeclinável");
      else if (seg[1] === "OI") partes.push("indeclinável");
      else partes.push(...cng(seg[1]));
      const extra = { C: "comparativo", S: "superlativo", N: "negativo", I: "interrogativo", K: "com crase" }[seg[2]];
      if (extra) partes.push(extra);
    }
    return partes.join(", ");
  }

  // lingua: "hebraico" (inclui os trechos em aramaico) ou "grego".
  window.descreverMorfologia = function (cod, lingua) {
    if (!cod) return "";
    try {
      return lingua === "hebraico" ? hebraico(cod) : grego(cod);
    } catch (e) {
      return "";
    }
  };
})();
