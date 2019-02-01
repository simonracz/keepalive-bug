# Possible Firefox bug in service workers
The code installs a service worker for a local download. It intercepts the fetch call and starts serving it via a ReadableStream. The download will fail after around 10 seconds, as the service worker gets terminated.

# Usage
```
python3 -m http.server 8000
```


