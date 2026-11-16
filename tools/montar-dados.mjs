// Converte os arquivos VPL do eBible.org (um versículo por linha: "GEN 1:1 texto")
// em um JSON por livro dentro de dados/texto/<versao>/<LIVRO>.json
//
// Uso: node tools/montar-dados.mjs <pasta-das-fontes>
// A pasta das fontes deve conter porbr2018/, porbrbsl/, hboWLC/ e grctr/ (zips do eBible já extraídos).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const fontes = process.argv[2];
if (!fontes) {
  console.error("Informe a pasta das fontes.");
  process.exit(1);
}

const VERSOES = [
  { id: "blivre", pasta: "porbr2018" },
  { id: "bpm", pasta: "porbrbsl" },
  { id: "hebraico", pasta: "hboWLC" },
  { id: "grego", pasta: "grctr" },
];

const indice = {};

for (const versao of VERSOES) {
  const dir = path.join(fontes, versao.pasta);
  const arquivo = fs.readdirSync(dir).find((n) => n.endsWith("_vpl.txt"));
  const linhas = fs.readFileSync(path.join(dir, arquivo), "utf8").split("\n");
  const livros = new Map();
  let ignoradas = 0;

  for (const bruta of linhas) {
    const linha = bruta.replace("\r", "").replace("﻿", "");
    if (!linha.trim()) continue;
    const p1 = linha.indexOf(" ");
    const p2 = linha.indexOf(" ", p1 + 1);
    const livro = linha.slice(0, p1);
    const ref = p2 === -1 ? linha.slice(p1 + 1) : linha.slice(p1 + 1, p2);
    const texto = p2 === -1 ? "" : linha.slice(p2 + 1).trim();
    const [cap, ver] = ref.split(":");
    if (!livro || !cap || !ver || !texto) {
      ignoradas++;
      continue;
    }
    if (!livros.has(livro)) livros.set(livro, {});
    const caps = livros.get(livro);
    if (!caps[cap]) caps[cap] = [];
    const n = Number(ver);
    caps[cap].push([Number.isInteger(n) ? n : ver, texto]);
  }

  const saida = path.join(raiz, "dados", "texto", versao.id);
  fs.mkdirSync(saida, { recursive: true });
  indice[versao.id] = {};
  let total = 0;
  for (const [livro, caps] of livros) {
    fs.writeFileSync(path.join(saida, livro + ".json"), JSON.stringify(caps));
    indice[versao.id][livro] = Object.keys(caps).map(Number);
    for (const c of Object.values(caps)) total += c.length;
  }
  console.log(versao.id, "livros:", livros.size, "versículos:", total, "linhas ignoradas:", ignoradas);
}

fs.writeFileSync(path.join(raiz, "dados", "indice.json"), JSON.stringify(indice));
console.log("Índice gravado.");
