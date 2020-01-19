const cacheName = 'pwa-conf-v1';
const staticAssets = [
    './',
    './index.html',
    './aboutUs.html',
    './availableRooms.html',
    './ids.js',
    './availability.js',
    './call25.js',
    './updatePage.js',
    './AllStyle.css',
    './availableRoomsStyle.css',
    './FirstPageStyle.css',
    './screenSizeChanges.css'
];

self.addEventListener('install', async event => {
    console.log('install event')
});

self.addEventListener('fetch', async event => {
    console.log('fetch event')
});
self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});
self.addEventListener('fetch', event => {
    const req = event.request;
    event.respondWith(cacheFirst(req));
});
async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(req);
    return cachedResponse || fetch(req);
}