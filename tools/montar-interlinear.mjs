// Converte os dados palavra a palavra do STEPBible (TAHOT / TAGNT, CC BY 4.0, Tyndale House)
// em:
//   dados/interlinear/<LIVRO>.json   { cap: { verso: [[original, transliteração, tags, morfologia, raiz], ...] } }
//   dados/lexico/<prefixo>.json      { strong: { l: lema, t: transliteração, c: classe, e: glosa em inglês, d: definição, n: ocorrências, r: [refs] } }
//   <fontes>/glosas-en.tsv           lista de lemas usados, para traduzir as glosas
//
// Uso: node tools/montar-interlinear.mjs <pasta-com-os-arquivos-do-STEPBible>
// Arquivos esperados na pasta: tahot1..4.txt, tagnt1..2.txt, tbesh.txt, tbesg.txt
// (https://github.com/STEPBible/STEPBible-Data)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const fontes = process.argv[2];
if (!fontes) {
  console.error("Informe a pasta das fontes.");
  process.exit(1);
}
const ler = (nome) => fs.readFileSync(path.join(fontes, nome), "utf8").replace(/^﻿/, "").split(/\r?\n/);

const indice = JSON.parse(fs.readFileSync(path.join(raiz, "dados", "indice.json"), "utf8"));
const codigosAT = Object.keys(indice.hebraico);
const codigosNT = Object.keys(indice.grego);

const usos = new Map(); // strong -> { n, r: [] }
function registrar(strong, ref) {
  let u = usos.get(strong);
  if (!u) usos.set(strong, (u = { n: 0, r: [] }));
  u.n++;
  if (ref && u.r[u.r.length - 1] !== ref) u.r.push(ref);
}

const dirInter = path.join(raiz, "dados", "interlinear");
fs.mkdirSync(dirInter, { recursive: true });

function gravarLivros(livros, codigos, rotulo) {
  const nomes = [...livros.keys()];
  if (nomes.length !== codigos.length) throw new Error(rotulo + ": esperava " + codigos.length + " livros, achei " + nomes.length);
  let palavras = 0;
  nomes.forEach((nome, i) => {
    const caps = livros.get(nome);
    for (const c of Object.values(caps)) for (const v of Object.values(c)) palavras += v.length;
    fs.writeFileSync(path.join(dirInter, codigos[i] + ".json"), JSON.stringify(caps));
  });
  console.log(rotulo, "livros:", nomes.length, "palavras:", palavras);
  return nomes;
}

// ---------- hebraico ----------
const livrosHeb = new Map();
const linhasHeb = [];
for (const arq of ["tahot1.txt", "tahot2.txt", "tahot3.txt", "tahot4.txt"]) {
  for (const linha of ler(arq)) {
    const m = linha.match(/^([1-3A-Za-z]{3})\.(\d+)\.(\d+)(?:\([^)]*\))?#(\d+)=([A-Za-z]+)/);
    if (!m) continue;
    if (!/^[LQR]/.test(m[5])) continue; // ignora variantes (Ketiv, restauradas pelo grego etc.)
    linhasHeb.push([m, linha.split("\t")]);
  }
}
for (const [m, col] of linhasHeb) {
  const [, livro, cap, ver] = m;
  if (!livrosHeb.has(livro)) livrosHeb.set(livro, {});
  const caps = livrosHeb.get(livro);
  ((caps[cap] ||= {})[ver] ||= []).push(col);
}
{
  const nomes = [...livrosHeb.keys()];
  nomes.forEach((nome, i) => {
    const caps = livrosHeb.get(nome);
    for (const cap of Object.keys(caps)) {
      for (const ver of Object.keys(caps[cap])) {
        const ref = codigosAT[i] + "." + cap + "." + ver;
        caps[cap][ver] = caps[cap][ver].map((col) => {
          const partesTag = (col[4] || "").split(/[\/\\]/).map((s) => s.trim()).filter(Boolean);
          const partesMorf = (col[5] || "").split("/");
          let iRaiz = partesTag.findIndex((t) => t.startsWith("{"));
          const tags = partesTag.map((t) => t.replace(/[{}]/g, "").replace(/\+$/, ""));
          if (iRaiz === -1) iRaiz = tags.findIndex((t) => !/^H9/.test(t));
          // Pontuação (H9014–H9019) não entra na glosa.
          const uteis = [];
          let raizNova = -1;
          tags.forEach((t, k) => {
            if (/^H901[4-9]/.test(t)) return;
            if (k === iRaiz) raizNova = uteis.length;
            uteis.push(t);
          });
          const lingua = (partesMorf[0] || "H")[0];
          let morf = partesMorf[iRaiz] || "";
          if (iRaiz > 0 && morf) morf = lingua + morf;
          uteis.forEach((t, k) => registrar(t, k === raizNova ? ref : null));
          return [col[1].replace(/[\/\\]/g, ""), col[2].replace(/[\/\\]/g, ""), uteis, morf, raizNova];
        });
      }
    }
  });
}
gravarLivros(livrosHeb, codigosAT, "hebraico");

// ---------- grego ----------
const livrosGre = new Map();
for (const arq of ["tagnt1.txt", "tagnt2.txt"]) {
  for (const linha of ler(arq)) {
    const m = linha.match(/^([1-3A-Za-z]{3})\.(\d+)\.(\d+)(?:\([^)]*\))?#(\d+)=/);
    if (!m) continue;
    const col = linha.split("\t");
    if (!(col[5] || "").split("+").includes("TR")) continue; // só as palavras do Textus Receptus
    const [, livro, cap, ver] = m;
    if (!livrosGre.has(livro)) livrosGre.set(livro, {});
    const caps = livrosGre.get(livro);
    ((caps[cap] ||= {})[ver] ||= []).push(col);
  }
}
{
  const nomes = [...livrosGre.keys()];
  nomes.forEach((nome, i) => {
    const caps = livrosGre.get(nome);
    for (const cap of Object.keys(caps)) {
      for (const ver of Object.keys(caps[cap])) {
        const ref = codigosNT[i] + "." + cap + "." + ver;
        caps[cap][ver] = caps[cap][ver].map((col) => {
          const mw = col[1].match(/^(.*?)\s*\(([^)]*)\)\s*$/);
          const [tag, morf] = (col[3] || "").split("=");
          registrar(tag, ref);
          return [mw ? mw[1] : col[1], mw ? mw[2] : "", [tag], morf || "", 0];
        });
      }
    }
  });
}
gravarLivros(livrosGre, codigosNT, "grego");

// ---------- léxico ----------
const dirLex = path.join(raiz, "dados", "lexico");
fs.mkdirSync(dirLex, { recursive: true });
const baldes = new Map();
const glosas = [];
let semVerbete = 0;

function lerLexico(arq, comDefinicao) {
  const mapa = new Map();
  for (const linha of ler(arq)) {
    const col = linha.split("\t");
    if (!/^[HG]\d{4}/.test(col[0]) || col.length < 7) continue;
    const chave = (col[1] || "").split(/\s|=/)[0];
    if (!chave || mapa.has(chave)) continue;
    mapa.set(chave, {
      l: col[3].replace(/\//g, ""),
      t: col[4],
      c: col[5],
      e: col[6],
      d: comDefinicao ? (col[7] || "").trim() : undefined,
    });
  }
  return mapa;
}
// As definições hebraicas do TBESH vêm do BDB resumido da Online Bible, que pede permissão
// antes do uso; por isso só aproveitamos lema, transliteração e glosa (trabalho do STEPBible).
const lexHeb = lerLexico("tbesh.txt", false);
const lexGre = lerLexico("tbesg.txt", true);

for (const [strong, uso] of usos) {
  const lex = strong[0] === "H" ? lexHeb : lexGre;
  const verbete = lex.get(strong) || lex.get(strong.replace(/[A-Za-z]$/, ""));
  if (!verbete) {
    semVerbete++;
    continue;
  }
  const prefixo = strong.slice(0, 3);
  if (!baldes.has(prefixo)) baldes.set(prefixo, {});
  baldes.get(prefixo)[strong] = { ...verbete, n: uso.n, r: /^H9/.test(strong) ? [] : uso.r };
  glosas.push([strong, verbete.l, verbete.e, uso.n]);
}
for (const [prefixo, dados] of baldes) fs.writeFileSync(path.join(dirLex, prefixo + ".json"), JSON.stringify(dados));
glosas.sort((a, b) => b[3] - a[3]);
fs.writeFileSync(path.join(fontes, "glosas-en.tsv"), glosas.map((g) => g.join("\t")).join("\n"));
console.log("lemas usados:", usos.size, "com verbete:", glosas.length, "sem verbete:", semVerbete, "arquivos de léxico:", baldes.size);
