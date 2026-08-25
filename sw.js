/* ALÈ · silvia · build 2.7.mt7i4y83 · generat per build/publica.js */
var CACHE = "ale-silvia-2.7.mt7i4y83";
var FILES = ["./", "./index.html", "./app.js?v=2.7.mt7i4y83", "./client.js?v=2.7.mt7i4y83",
  "./idioma.js?v=2.7.mt7i4y83", "./coach.js?v=2.7.mt7i4y83", "./ale-brand.css?v=2.7.mt7i4y83",
  "./manifest.webmanifest?v=2.7.mt7i4y83", "./icon-180.png", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }));
});

self.addEventListener("activate", function (e) {
  // Esborra qualsevol caché d'aquest client que no sigui la d'aquest build.
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) {
      return k.indexOf("ale-silvia-") === 0 && k !== CACHE;
    }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("message", function (e) { if (e.data === "activa") self.skipWaiting(); });

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  var url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  // Network-first per al document: si hi ha xarxa, sempre la versió publicada.
  if (e.request.mode === "navigate") {
    e.respondWith(fetch(e.request).catch(function () { return caches.match("./index.html"); }));
    return;
  }
  // La resta va per URL versionada, així que la caché mai serveix res antic.
  e.respondWith(caches.match(e.request).then(function (r) {
    return r || fetch(e.request).then(function (resp) {
      if (resp && resp.ok) { var cp = resp.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, cp); }); }
      return resp;
    });
  }));
});
