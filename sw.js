
// Instalação do Service Worker e Cache de recursos
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('orbita').then((cache) => {
            return cache.addAll([
                'index.html',
                'script.js',
                'style.css',
                'images/icon-144x144.png',
                'images/icon-192x192.png',
                'images/icon-512x512.png'
            ]);
        })
    );
});

// Intercepta solicitações de rede e serve os recursos do cache, se disponíveis
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
