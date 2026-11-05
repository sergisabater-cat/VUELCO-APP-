// Vuelco offline cache. Network first for the page (so updates arrive), cache for the rest.
const C='vuelco-4b45d62a',FILES=["./", "index.html", "three.min.js", "config.js", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png", "fonts/rubik-latin-700-normal.woff2", "fonts/rubik-latin-500-normal.woff2", "fonts/titan-one-latin-400-normal.woff2", "fonts/rubik-latin-800-normal.woff2", "fonts/fonts.css"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;
  if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put('index.html',cp));return res}).catch(()=>caches.match('index.html')));return}
  e.respondWith(caches.match(r).then(m=>m||fetch(r)))});
