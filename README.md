# Possible keepalive bug in Firefox

The code installs a service worker for a local download. It intercepts a fetch and start serving it via a ReadableStream. The download will fail, as the service worker gets terminated.

# Usage
```
python3 -m http.server 8000
```


