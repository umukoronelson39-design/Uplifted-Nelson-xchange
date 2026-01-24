const cacheName = 'uplifted-nelson-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // Add other files like CSS, JS here if needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});