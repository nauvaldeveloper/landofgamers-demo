# Land of Gamers — Website

Landing page + jadwal live + booking via WhatsApp untuk Land of Gamers.
Frontend HTML/CSS/JS biasa (tanpa build tool), data jadwal dari Google Sheets lewat Apps Script.

```
index.html
assets/
  css/style.css
  js/config.js     ← SEMUA pengaturan (URL API, no WA, Maps, jam buka)
  js/data.js       ← data dummy untuk mode demo
  js/app.js        ← logika website
  img/logo.jpg
apps-script/Code.gs ← backend Google Sheets
```

## Jalankan (mode demo)

Buka `index.html` langsung di browser. Selama `API_URL` di `config.js` masih kosong, website memakai data contoh dari `data.js`.

## Hubungkan ke Google Sheets

1. Buat Google Sheet baru (pakai akun Google milik Land of Gamers).
2. **Extensions → Apps Script**, hapus isi default, lalu paste isi `apps-script/Code.gs`. Simpan.
3. Pilih fungsi **`setupSheet`** → **Run** → izinkan akses. Tab `Booking` & `Ruangan` dibuat otomatis lengkap dengan dropdown.
4. Di tab **Ruangan**, ganti kolom *Game* dengan list game asli tiap ruangan (pisahkan dengan koma).
5. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Copy URL yang berakhiran `/exec`, lalu tempel ke `API_URL` di `assets/js/config.js`.

> Jika `Code.gs` diubah, buat versi baru lewat **Deploy → Manage deployments → Edit → Version: New version** supaya URL tetap sama.

## Cara admin mengisi jadwal

Tab **Booking**, satu baris = satu booking:

| Tanggal | Ruangan | Mulai | Selesai | Nama | No WA | Status | Catatan |
|---|---|---|---|---|---|---|---|
| 08/11/2026 | VIP Cody | 11:00 | 14:00 | Nauval | 08xx | Lunas | |

- **Status `Hold`** → customer sudah konfirmasi, menunggu transfer (slot tampil terbooking).
- **Status `Lunas`** → sudah bayar.
- **Status `Batal`** → slot kembali kosong di website.
- Booking walk-in juga dimasukkan ke sini agar tidak dobel.

Website hanya menerima tanggal, ruangan & jam. **Nama dan nomor WA customer tidak pernah dikirim ke website.**

Ruangan bisa disembunyikan sementara (mis. maintenance) dengan menghapus centang kolom **Aktif** di tab Ruangan. Harga & list game juga cukup diubah di tab tersebut.

## Hosting

Upload seluruh folder ini ke Netlify / Vercel / GitHub Pages (static hosting, gratis). Domain custom bisa dipasang menyusul.

## Yang masih perlu diisi

- [ ] `MAPS_URL` di `config.js` (link Google Maps asli)
- [ ] List game asli per ruangan (di Sheet; `data.js` masih contoh)
- [ ] Lantai untuk ruangan VIP PS & Reguler (opsional)
- [ ] Foto ruangan (opsional; saat ini memakai embed reels Instagram)
