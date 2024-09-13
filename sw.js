self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
            '/SALVIXX/',  // Update this path
            '/SALVIXX/index.html',  // Update this path
            '/SALVIXX/CSS/styles.css',  // Update this path
            '/SALVIXX/SCRIPTS/script.js',  // Update this path
            '/SALVIXX/FAVICON/favicon-192x192.png',  // Update this path
            '/SALVIXX/FAVICON/favicon-512x512.png'  // Update this path
        ]);
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