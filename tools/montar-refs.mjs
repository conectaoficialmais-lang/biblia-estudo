// Converte as referências cruzadas do OpenBible.info (CC BY) em um JSON por livro:
//   dados/refs/<LIVRO>.json   { "cap.verso": ["JOH.1.1", "ROM.8.28-30", ...] }  (as mais votadas primeiro)
// Fonte: https://a.openbible.info/data/cross-references.zip (cross_references.txt)
// Uso: node tools/montar-refs.mjs <caminho-do-cross_references.txt>
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const MAX_POR_VERSO = 14;

const NOMES = ("Gen Exod Lev Num Deut Josh Judg Ruth 1Sam 2Sam 1Kgs 2Kgs 1Chr 2Chr Ezra Neh Esth Job Ps Prov Eccl Song Isa Jer Lam Ezek Dan Hos Joel Amos Obad Jonah Mic Nah Hab Zeph Hag Zech Mal " +
  "Matt Mark Luke John Acts Rom 1Cor 2Cor Gal Eph Phil Col 1Thess 2Thess 1Tim 2Tim Titus Phlm Heb Jas 1Pet 2Pet 1John 2John 3John Jude Rev").split(" ");
const CODIGOS = ("GEN EXO LEV NUM DEU JOS JDG RUT 1SA 2SA 1KI 2KI 1CH 2CH EZR NEH EST JOB PSA PRO ECC SOL ISA JER LAM EZE DAN HOS JOE AMO OBA JON MIC NAH HAB ZEP HAG ZEC MAL " +
  "MAT MAR LUK JOH ACT ROM 1CO 2CO GAL EPH PHI COL 1TH 2TH 1TI 2TI TIT PHM HEB JAM 1PE 2PE 1JO 2JO 3JO JUD REV").split(" ");
const mapa = new Map(NOMES.map((n, i) => [n, CODIGOS[i]]));

function ler(ref) {
  const [livro, cap, ver] = ref.split(".");
  const cod = mapa.get(livro);
  return cod ? { cod, cap: Number(cap), ver: Number(ver) } : null;
}

const porLivro = new Map();
let lidas = 0;
let ignoradas = 0;
for (const linha of fs.readFileSync(process.argv[2], "utf8").split(/\r?\n/).slice(1)) {
  const [de, para, votos] = linha.split("\t");
  if (!de || !para) continue;
  const a = ler(de);
  const [ini, fim] = para.split("-");
  const b = ler(ini);
  const c = fim ? ler(fim) : null;
  const v = Number(votos);
  if (!a || !b || !(v > 0)) {
    ignoradas++;
    continue;
  }
  let destino = b.cod + "." + b.cap + "." + b.ver;
  if (c && c.cod === b.cod && c.cap === b.cap && c.ver > b.ver) destino += "-" + c.ver;
  if (!porLivro.has(a.cod)) porLivro.set(a.cod, new Map());
  const versos = porLivro.get(a.cod);
  const k = a.cap + "." + a.ver;
  if (!versos.has(k)) versos.set(k, []);
  versos.get(k).push([v, destino]);
  lidas++;
}

const dir = path.join(raiz, "dados", "refs");
fs.mkdirSync(dir, { recursive: true });
let gravadas = 0;
for (const [cod, versos] of porLivro) {
  const saida = {};
  for (const [k, lista] of versos) {
    lista.sort((x, y) => y[0] - x[0]);
    saida[k] = lista.slice(0, MAX_POR_VERSO).map((x) => x[1]);
    gravadas += saida[k].length;
  }
  fs.writeFileSync(path.join(dir, cod + ".json"), JSON.stringify(saida));
}
console.log("livros:", porLivro.size, "ligações lidas:", lidas, "ignoradas (voto <= 0 ou livro desconhecido):", ignoradas, "gravadas:", gravadas);
