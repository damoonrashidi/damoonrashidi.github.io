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
    "revision": "e4ffb6bab9720abef2521fb385fe3a17"
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
    "url": "build/app/vulcudcr.es5.js",
    "revision": "66c3528ac104763b505bea932c1c60d2"
  },
  {
    "url": "build/app/vulcudcr.js",
    "revision": "56e2dcbbe0c244b272054931d3dc9f1a"
  },
  {
    "url": "build/app/vvyjmhj9.es5.js",
    "revision": "3e327568a53b4e0cb250cfd0d5391025"
  },
  {
    "url": "build/app/vvyjmhj9.js",
    "revision": "56fc899a18fd716620d3382134416dfc"
  },
  {
    "url": "build/app/vvyjmhj9.sc.es5.js",
    "revision": "46e82e9c55f3cf8ed5bfab18ea3e8d4a"
  },
  {
    "url": "build/app/vvyjmhj9.sc.js",
    "revision": "811248b88b1a1dc861cf3bf942eb23a6"
  },
  {
    "url": "index.html",
    "revision": "97c4e914a89873bb9c4332c83d80f923"
  },
  {
    "url": "manifest.json",
    "revision": "de5ada9f7f394aad5eef19f9ba00f12a"
  }
]);