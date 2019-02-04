# !Update!
This is NOT a bug, but by design.
The official solution is to try to wrap up things in a Promise and pass that to `event.waitUntil`. I found that hard to do without causing deadlocks in the sw in corner cases.
What I implemented is a PING message to the sw, to keep it alive while it is needed.

# Possible Firefox bug in service workers
The code installs a service worker for a local download. It intercepts the fetch call and starts serving it via a ReadableStream. The download will fail after around 10 seconds, as the service worker gets terminated.

# Usage
```
python3 -m http.server 8000
```


