// Servidor estático mínimo para abrir o app localmente.
// Uso: node tools/servidor.js [porta]
const http = require("http");
const fs = require("fs");
const path = require("path");

const RAIZ = path.join(__dirname, "..");
const PORTA = Number(process.argv[2]) || 4190;
const TIPOS = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webmanifest": "application/manifest+json",
};

http
  .createServer((req, res) => {
    let caminho = decodeURIComponent(req.url.split("?")[0]);
    if (caminho === "/") caminho = "/index.html";
    const arquivo = path.join(RAIZ, caminho);
    if (!arquivo.startsWith(RAIZ + path.sep)) {
      res.writeHead(403);
      return res.end("proibido");
    }
    fs.readFile(arquivo, (erro, dados) => {
      if (erro) {
        res.writeHead(404);
        return res.end("não encontrado");
      }
      res.writeHead(200, {
        "Content-Type": TIPOS[path.extname(arquivo).toLowerCase()] || "application/octet-stream",
        "Cache-Control": "no-cache",
      });
      res.end(dados);
    });
  })
  .listen(PORTA, () => console.log("Estudo Bíblico em http://localhost:" + PORTA));
