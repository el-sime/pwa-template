const cacheName = "pwa-template";
const filesToCache = [
    '/',
    'index.html',
    '/css/main.css',
    '/js/main.js'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => cache.addAll(filesToCache))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((resp) => resp || fetch(e.request))
    );
});