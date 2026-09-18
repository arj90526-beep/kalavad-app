// जब ऐप इंस्टॉल होता है, तब यह काम करता है
self.addEventListener('install', (event) => {
    console.log('Service Worker इंस्टॉल हो गया है!');
    self.skipWaiting();
});

// यह इंटरनेट न होने पर भी साइट को क्रैश होने से बचाता है
self.addEventListener('fetch', (event) => {
    // अभी के लिए इसे खाली छोड़ सकते हैं
});
