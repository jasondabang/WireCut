const C="wirecut-v1";
self.oninstall=e=>e.waitUntil(caches.open(C).then(c=>c.addAll(["./","./index.html","./style.css","./app.js"])));
self.onfetch=e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
