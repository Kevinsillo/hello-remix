/*
 * ServiceWorker to make site function as a PWA (Progressive Web App)
 *
 * Based on https://glitch.com/~pwa by https://glitch.com/@PaulKinlan
 */

// Specify what we want added to the cache for offline use
self.addEventListener("install", e => {
  e.waitUntil(
    // Give the cache a name
    caches.open("glitch-in-bio-pwa").then(cache => {
      // Cache the homepage and stylesheets - add any assets you want to cache!
      return cache.addAll([
        "/", 
        "/public/styles/style.css",
        "/public/styles/bootstrap.css",
        "/public/styles/fontawesome.all.css",
        "/public/scripts/bootstrap.bundle.js",
        "/public/scripts/jquery.js",
        "/public/scripts/script.js",
      ]);
    })
  );
});

// Network falling back to cache approach 
// https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
