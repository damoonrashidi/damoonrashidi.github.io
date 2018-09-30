importScripts('workbox-v3.4.1/workbox-sw.js')

self.workbox.skipWaiting();
self.workbox.clientsClaim();

/*
  This is our code to handle push events.
*/
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Notification';
  const options = {
    body: `${event.data.text()}`,
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.workbox.precaching.precacheAndRoute([
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.js",
    "revision": "b3904b006fa49523fea7fdb507f7482b"
  },
  {
    "url": "build/app/app.njja7zmk.js",
    "revision": "34925aed99a447bf96d8a91a851fdbac"
  },
  {
    "url": "build/app/app.ntdrpbej.js",
    "revision": "9ed76ba5b109bd121100cddd92bda443"
  },
  {
    "url": "build/app/jbnjbt7r.es5.js",
    "revision": "f5a4b368019a5c03ba816c5dbf1e16be"
  },
  {
    "url": "build/app/jbnjbt7r.js",
    "revision": "8db3496d3ed1316bbb3606c81d7aa300"
  },
  {
    "url": "build/app/jbnjbt7r.sc.es5.js",
    "revision": "8d8588438c2ee273142c5a82d4587d58"
  },
  {
    "url": "build/app/jbnjbt7r.sc.js",
    "revision": "dd585d8698c0ced9a6e975b99561c8a9"
  },
  {
    "url": "build/app/vulcudcr.es5.js",
    "revision": "66c3528ac104763b505bea932c1c60d2"
  },
  {
    "url": "build/app/vulcudcr.js",
    "revision": "56e2dcbbe0c244b272054931d3dc9f1a"
  },
  {
    "url": "index.html",
    "revision": "bff9326a64793d746055108409459548"
  },
  {
    "url": "manifest.json",
    "revision": "de5ada9f7f394aad5eef19f9ba00f12a"
  }
]);