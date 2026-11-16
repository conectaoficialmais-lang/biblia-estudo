// Junta as glosas traduzidas (pt-0.json ... pt-9.json) com as dos prefixos e sufixos hebraicos
// e grava dados/lexico/glosas-pt.json  { strong: "glosa em português" }.
// Uso: node tools/juntar-glosas.mjs <pasta-com-os-pt-N.json>
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const pasta = process.argv[2];

// Prefixos, sufixos e pronomes presos do hebraico (H9001–H9049).
const AFIXOS = {
  H9001: "e", H9002: "e", H9003: "em/com", H9004: "como", H9005: "para/a", H9006: "de", H9007: "que",
  H9008: "?", H9009: "o/a", H9010: "o/a", H9011: "para", H9012: "", H9013: "",
  H9020: "meu", H9021: "teu", H9022: "teu", H9023: "seu (dele)", H9024: "seu (dela)", H9025: "nosso",
  H9026: "vosso", H9027: "vosso", H9028: "seu (deles)", H9029: "seu (delas)",
  H9030: "me", H9031: "te", H9032: "te", H9033: "o", H9034: "a", H9035: "nos", H9036: "vos", H9037: "vos",
  H9038: "os", H9039: "as",
  H9040: "eu", H9041: "tu", H9042: "tu", H9043: "ele", H9044: "ela", H9045: "nós", H9046: "vós", H9047: "vós",
  H9048: "eles", H9049: "elas",
};

// Correções manuais de palavras muito frequentes, aplicadas por cima da tradução automática.
const CORRECOES = {
  H0776G: "terra", H1121A: "filho", H1004B: "casa", H6213A: "fazer", H0853: "(objeto direto)", H0859A: "tu",
  G3588: "o/a", G1161: "mas/e", G3739: "que/o qual", G0846: "ele/ela/mesmo", H0413: "a/para", H3605: "todo/tudo",
};

const saida = { ...AFIXOS };
let arquivos = 0;
for (const nome of fs.readdirSync(pasta).sort()) {
  if (!/^pt-\d+\.json$/.test(nome)) continue;
  const dados = JSON.parse(fs.readFileSync(path.join(pasta, nome), "utf8"));
  for (const [k, v] of Object.entries(dados)) {
    if (typeof v !== "string") continue;
    let g = v.replace(/`/g, "").trim();
    const p = g.indexOf(": "); // sobra do formato "sentido: subsentido"
    if (p !== -1 && g.slice(p + 2).trim()) g = g.slice(p + 2).trim();
    saida[k] = g;
  }
  arquivos++;
}
Object.assign(saida, CORRECOES);
fs.writeFileSync(path.join(raiz, "dados", "lexico", "glosas-pt.json"), JSON.stringify(saida));
console.log("arquivos:", arquivos, "glosas:", Object.keys(saida).length);
