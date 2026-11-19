// Service worker do Estudo Bíblico: deixa o app abrir sem internet.
// - Páginas, estilos e scripts: rede primeiro (para receber atualizações), cache se estiver offline.
// - Dados (textos bíblicos, léxico, referências): cache primeiro, atualizando por trás.
// - Fontes e biblioteca do mapa (outros sites): cache primeiro. As imagens do mapa não são guardadas.
const VERSAO = "v8";
const CASCA = "biblia-casca-" + VERSAO;
const DADOS = "biblia-dados-" + VERSAO;
const FORA = "biblia-fora-" + VERSAO;
const INICIAIS = ["./", "index.html", "estilo.css", "visual.css", "app.js", "vistas.js", "sermao.js", "sinc.js", "dados/indice.json", "manifest.webmanifest", "icons/icone-192.png"];

self.addEventListener("install", (ev) => {
  ev.waitUntil(caches.open(CASCA).then((c) => c.addAll(INICIAIS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (ev) => {
  ev.waitUntil(
    caches.keys().then((nomes) => Promise.all(nomes.filter((n) => n.startsWith("biblia-") && ![CASCA, DADOS, FORA].includes(n)).map((n) => caches.delete(n)))).then(() => self.clients.claim())
  );
});

async function redePrimeiro(req, nome) {
  const cache = await caches.open(nome);
  try {
    const resp = await fetch(req);
    if (resp.ok) cache.put(req, resp.clone());
    return resp;
  } catch (e) {
    const guardado = await cache.match(req, { ignoreSearch: true });
    if (guardado) return guardado;
    throw e;
  }
}
async function cachePrimeiro(req, nome, atualizar) {
  const cache = await caches.open(nome);
  const guardado = await cache.match(req);
  const buscar = () => fetch(req).then((resp) => {
    if (resp.ok || resp.type === "opaque") cache.put(req, resp.clone());
    return resp;
  });
  if (guardado) {
    if (atualizar) buscar().catch(() => {});
    return guardado;
  }
  return buscar();
}

self.addEventListener("fetch", (ev) => {
  const req = ev.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin && url.pathname.includes("/api/")) return; // sincronização vai sempre à rede
  if (url.origin === self.location.origin) {
    if (/\/dados\/.+\.json$/.test(url.pathname) || url.pathname.includes("/icons/")) ev.respondWith(cachePrimeiro(req, DADOS, true));
    else ev.respondWith(redePrimeiro(req, CASCA));
  } else if (/fonts\.(googleapis|gstatic)\.com$|unpkg\.com$/.test(url.hostname)) {
    ev.respondWith(cachePrimeiro(req, FORA, false));
  }
});
