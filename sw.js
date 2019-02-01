self.addEventListener('install', event => {
  console.log("sw installed");
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  console.log("sw activated");
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', event => {
  // This is not used now, but it would make the download succeed, by keeping the sw alive.
  if (event.data === 'ping') {
    return;
  }
  return;
});

self.addEventListener('fetch', function(event) {
  let limit = 1000000;
  if (!event.request.url.endsWith('/download/')) {
    return;
  }
  const stream = new ReadableStream({
    start(controller) {
      console.log("start");
    },
    pull(controller) {
      // Side note, backpressure doesn't really work with fetch at the moment in Firefox
      console.log("pull called - enqueue new data");
      const data = new Uint8Array(10000);
      controller.enqueue(data);
      limit = limit - 1;
      if (limit == 0) {
        controller.close();
      }
    }
  });
  const headers = {
    'Content-Type': 'application/octet-stream; charset=utf-8',
    'Content-Disposition': "attachment; filename=bug.test",
    'Content-Length': 10000000000
  };

  event.respondWith(new Response(stream, { headers }));
});