// firebase-messaging-sw.js
// Bu dosya root dizininde olmalı (index.html ile aynı klasörde)

// Firebase SDK'ları import et
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Firebase config
firebase.initializeApp({
  apiKey: "AIzaSyCugtMDUMD9D6lxbpQ52_fOUV3WIoLrllo",
  authDomain: "sp-b-b272d.firebaseapp.com",
  projectId: "sp-b-b272d",
  messagingSenderId: "519404683421",
  appId: "1:519404683421:web:6e8a403c372e9fcd9d5474"
});

const messaging = firebase.messaging();

// Background notification handler
// Uygulama kapalıyken veya arka plandayken çalışır
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification?.title || 'SPI İş Takip';
  const notificationOptions = {
    body: payload.notification?.body || 'Yeni bildiriminiz var',
    icon: '/spistakip.ico',
    badge: '/spistakip.ico',
    tag: payload.data?.jobId || 'spi-notification',
    requireInteraction: true,
    vibrate: [200, 100, 200],
    data: payload.data || {}
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  console.log('[Service Worker] Notification click received.', event);
  
  event.notification.close();
  
  // Uygulamayı aç
  event.waitUntil(
    clients.openWindow('/')  // veya spesifik job sayfası: `/job/${event.notification.data.jobId}`
  );
});
