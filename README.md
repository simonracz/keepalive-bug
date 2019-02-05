# Updates
## Update 1
According to this w3c spec communication this is not a bug : https://github.com/w3c/ServiceWorker/issues/882#issuecomment-262754779

The official solution is to try to wrap long running operations up in a Promise and pass that to `event.waitUntil`. I found that hard to do without causing deadlocks in the sw in corner cases.

What I implemented is a PING message to the sw, to keep it alive while it is needed.

## Update 2
Contrary to Update 1, this is assumed to be a bug.

Firefox : https://bugzilla.mozilla.org/show_bug.cgi?id=1302715
Chrome : https://bugs.chromium.org/p/chromium/issues/detail?id=678798

# Possible Firefox bug in service workers
The code installs a service worker for a local download. It intercepts the fetch call and starts serving it via a ReadableStream. The download will fail after around 10 seconds, as the service worker gets terminated.

# Usage
```
python3 -m http.server 8000
```


