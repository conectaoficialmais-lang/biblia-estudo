// Junta os verbetes de léxico em português (pt-0.json ... pt-9.json) em dados/lexico/verbetes-pt.json
// { strong: "explicação em português" }. Os verbetes foram redigidos por IA a partir de léxicos de domínio público.
// Uso: node tools/juntar-verbetes.mjs <pasta-com-os-pt-N.json>
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const pasta = process.argv[2];
const saida = {};
let arquivos = 0;
for (const nome of fs.readdirSync(pasta).sort()) {
  if (!/^pt-\d+\.json$/.test(nome)) continue;
  const dados = JSON.parse(fs.readFileSync(path.join(pasta, nome), "utf8"));
  for (const [k, v] of Object.entries(dados)) {
    if (typeof v === "string" && v.trim()) saida[k] = v.replace(/\s+/g, " ").trim();
  }
  arquivos++;
}
fs.writeFileSync(path.join(raiz, "dados", "lexico", "verbetes-pt.json"), JSON.stringify(saida));
const tam = Object.values(saida).map((v) => v.split(" ").length);
console.log("arquivos:", arquivos, "verbetes:", tam.length, "média de palavras:", Math.round(tam.reduce((a, b) => a + b, 0) / (tam.length || 1)));
