const CACHE = 'prompt-generator-v1.0.2';
const ASSETS = [
  './',
  'css/base.css',
  'css/components.css',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/icon.svg',
  'index.html',
  'js/core/common.js',
  'js/core/dom.js',
  'js/core/form.js',
  'js/core/icons.js',
  'js/core/output.js',
  'js/core/router.js',
  'js/core/storage.js',
  'js/core/theme.js',
  'js/core/workspace.js',
  'js/main.js',
  'js/prompts/answer.js',
  'js/prompts/flashcards.js',
  'js/prompts/index.js',
  'js/prompts/presentation.js',
  'js/prompts/report.js',
  'js/prompts/reviewer.js',
  'js/prompts/study/build.js',
  'js/prompts/study/index.js',
  'js/prompts/study/math.js',
  'js/prompts/study/options.js',
  'js/prompts/study/panels.js',
  'js/prompts/study/types/cross.js',
  'js/prompts/study/types/enum.js',
  'js/prompts/study/types/essay.js',
  'js/prompts/study/types/fib.js',
  'js/prompts/study/types/id.js',
  'js/prompts/study/types/index.js',
  'js/prompts/study/types/match.js',
  'js/prompts/study/types/mcq.js',
  'js/prompts/study/types/ord.js',
  'js/prompts/study/types/ps.js',
  'js/prompts/study/types/scen.js',
  'js/prompts/study/types/tf.js',
  'js/prompts/study/types/wc.js',
  'manifest.webmanifest'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(
      (hit) =>
        hit ||
        fetch(event.request)
          .then((response) => {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, copy));
            return response;
          })
          .catch(() => caches.match('index.html'))
    )
  );
});
