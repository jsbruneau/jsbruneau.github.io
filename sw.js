self.addEventListener('install', function(event) {
  console.log('SW: install Event Called');
});
self.addEventListener('fetch', function(event) {
  console.log('SW: fetch Event Called');
  console.log(event);
  event.respondWith(
    return fetch(event.request);
  );
});
