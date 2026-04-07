# othello20--STAK-P

## Yapılan iyileştirmeler

- Admin kullanıcıların **silme yetkisi kaldırıldı** (kullanıcı silme ve iş silme aksiyonları arayüzden kaldırıldı).
- Firestore tabanlı **Bildirim Merkezi** eklendi.
- Dashboard'a **Bildirim Sistemi Durumu** kartı eklendi (cihaz tipi, izin durumu, okunmamış sayaç, test bildirimi).
- Web Push altyapısı için Service Worker kayıt akışı güçlendirildi.
- Bildirimler şu senaryolarda otomatik üretiliyor:
  - Yeni iş atandığında (atanan teknisyene),
  - İş başlatıldığında (adminlere),
  - İş tamamlandığında (adminlere).
- Bildirimler uygulama içinde listelenir, ayrıca izin verilirse cihazın yerel bildirim API’si ile gösterilir.
