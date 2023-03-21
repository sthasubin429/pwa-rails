importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

const pageFallback = 'offline'

workbox.routing.setDefaultHandler(
  new workbox.strategies.NetworkOnly()
);

function onInstall(event) {
  console.log('[Serviceworker]', "Installing!", event);

  const files = [pageFallback];

  console.log(files);

  event.waitUntil(self.caches.open('workbox-offline-fallbacks')
    .then(cache => {
      console.log(cache, cache);
      return cache.addAll(files);
    }));
}

const handler = async (options) => {
  const cache = await self.caches.open('workbox-offline-fallbacks');

  if (options.request.destination === 'document') {
    return (await cache.match(pageFallback)) || Response.error();
  }

  return Response.error();
}

workbox.routing.setCatchHandler(handler);

function onActivate(event) {
  console.log('[Serviceworker]', "Activating!", event);
}

function onFetch(event) {
  console.log('[Serviceworker]', "Fetching!", event);
}

self.addEventListener('install', onInstall);
self.addEventListener('activate', onActivate);
self.addEventListener('fetch', onFetch);