/**
 * DATA DUMMY — dipakai hanya kalau LOG_CONFIG.API_URL kosong.
 * Bentuknya sama persis dengan output Apps Script (apps-script/Code.gs),
 * jadi saat API asli dipasang, tidak ada kode lain yang perlu diubah.
 *
 * Harga, kapasitas, lantai & link reel diambil dari info admin.
 * LIST GAME DI BAWAH MASIH CONTOH — ganti dengan list game asli di Google Sheet.
 */
(function () {
  const REEL_VIP_PS = 'https://www.instagram.com/reel/C4Vfa8Wrssd/';
  const REEL_REG_PS = 'https://www.instagram.com/reel/C4hrgGFrJC9/';
  const REEL_NINTENDO = 'https://www.instagram.com/reel/DSJZvdRE4AH/';

  const PS_A = ['EA Sports FC 26', 'Tekken 8', 'Mortal Kombat 1', 'It Takes Two', 'GTA V'];
  const PS_B = ['EA Sports FC 26', 'NBA 2K26', 'Gran Turismo 7', 'Split Fiction', 'Overcooked! All You Can Eat'];
  const PS_C = ['EA Sports FC 26', 'Street Fighter 6', 'Crash Team Rumble', 'Spider-Man 2', 'Fall Guys'];
  const PS_D = ['EA Sports FC 26', 'WWE 2K25', 'Tekken 8', 'Minecraft', 'Sackboy: A Big Adventure'];
  const NS_A = ['Mario Kart 8 Deluxe', 'Super Smash Bros. Ultimate', 'Mario Party Jamboree', 'Overcooked! 2'];
  const NS_B = ['Mario Kart 8 Deluxe', 'Nintendo Switch Sports', 'Just Dance 2025', 'Pico Park'];
  const NS_C = ['Mario Kart 8 Deluxe', 'Super Mario Bros. Wonder', 'Kirby Star Allies', 'Snipperclips'];

  const VIP_PS_FEAT = ['Ruangan private', 'PS5', 'Netflix', 'AC'];
  const REG_PS_FEAT = ['Open space bersekat', 'PS5'];
  const VIP_NS_FEAT = ['Ruangan private', 'Nintendo Switch', 'Netflix', 'AC'];

  const rooms = [
    { name: 'VIP 1', type: 'VIP PS', floor: '', price: 34000, price3: 96000, capacity: 6, games: PS_A, reel: REEL_VIP_PS, features: VIP_PS_FEAT, description: 'Ruangan private PS5 lengkap dengan Netflix.' },
    { name: 'VIP 2', type: 'VIP PS', floor: '', price: 34000, price3: 96000, capacity: 6, games: PS_B, reel: REEL_VIP_PS, features: VIP_PS_FEAT, description: 'Ruangan private PS5 lengkap dengan Netflix.' },
    { name: 'VIP 3', type: 'VIP PS', floor: '', price: 34000, price3: 96000, capacity: 6, games: PS_C, reel: REEL_VIP_PS, features: VIP_PS_FEAT, description: 'Ruangan private PS5 lengkap dengan Netflix.' },
    { name: 'VIP 4', type: 'VIP PS', floor: '', price: 34000, price3: 96000, capacity: 6, games: PS_D, reel: REEL_VIP_PS, features: VIP_PS_FEAT, description: 'Ruangan private PS5 lengkap dengan Netflix.' },

    { name: 'Reguler 1', type: 'Reguler PS', floor: '', price: 22000, price3: 60000, capacity: 4, games: PS_A, reel: REEL_REG_PS, features: REG_PS_FEAT, description: 'Spot PS5 open space dengan sekat, pas buat main santai.' },
    { name: 'Reguler 2', type: 'Reguler PS', floor: '', price: 22000, price3: 60000, capacity: 4, games: PS_B, reel: REEL_REG_PS, features: REG_PS_FEAT, description: 'Spot PS5 open space dengan sekat, pas buat main santai.' },
    { name: 'Reguler 3', type: 'Reguler PS', floor: '', price: 22000, price3: 60000, capacity: 4, games: PS_C, reel: REEL_REG_PS, features: REG_PS_FEAT, description: 'Spot PS5 open space dengan sekat, pas buat main santai.' },
    { name: 'Reguler 4', type: 'Reguler PS', floor: '', price: 22000, price3: 60000, capacity: 4, games: PS_D, reel: REEL_REG_PS, features: REG_PS_FEAT, description: 'Spot PS5 open space dengan sekat, pas buat main santai.' },

    { name: 'VIP Mario', type: 'VIP Nintendo', floor: '2', price: 50000, price3: 140000, capacity: 8, games: [...NS_A, ...PS_A.slice(0, 3)], reel: REEL_NINTENDO, features: ['Ruangan private', 'PS5 + Nintendo Switch', 'Netflix', 'Ruangan paling luas'], description: 'Ruangan VIP terbesar: PS5 dan Nintendo Switch sekaligus. Cocok buat rombongan.' },
    { name: 'VIP Luigi', type: 'VIP Nintendo', floor: '2', price: 34000, price3: 96000, capacity: 6, games: NS_A, reel: REEL_NINTENDO, features: VIP_NS_FEAT, description: 'Ruangan private Nintendo Switch di lantai 2.' },
    { name: 'VIP May', type: 'VIP Nintendo', floor: '1', price: 34000, price3: 96000, capacity: 6, games: NS_B, reel: REEL_NINTENDO, features: VIP_NS_FEAT, description: 'Ruangan private Nintendo Switch di lantai 1.' },
    { name: 'VIP Cody', type: 'VIP Nintendo', floor: '1', price: 34000, price3: 96000, capacity: 6, games: NS_C, reel: REEL_NINTENDO, features: VIP_NS_FEAT, description: 'Ruangan private Nintendo Switch di lantai 1.' },
    { name: 'VIP Astro', type: 'VIP Nintendo', floor: '1', price: 34000, price3: 96000, capacity: 6, games: NS_B, reel: REEL_NINTENDO, features: VIP_NS_FEAT, description: 'Ruangan private Nintendo Switch di lantai 1.' },
  ];

  // Booking dummy dibuat relatif ke hari ini supaya demo selalu ada isinya.
  function iso(offset) {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    const p = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }
  const b = (day, room, start, end) => ({ date: iso(day), room, start, end });

  const bookings = [
    b(0, 'VIP Cody', '15:00', '18:00'),
    b(0, 'VIP Mario', '14:00', '17:00'),
    b(0, 'VIP 1', '10:00', '13:00'),
    b(0, 'VIP 3', '18:00', '21:00'),
    b(0, 'Reguler 2', '12:00', '14:00'),
    b(0, 'VIP May', '19:00', '21:00'),
    b(1, 'VIP Luigi', '13:00', '16:00'),
    b(1, 'VIP 2', '16:00', '19:00'),
    b(1, 'Reguler 1', '09:00', '12:00'),
    b(2, 'VIP Mario', '18:00', '21:00'),
    b(2, 'VIP Astro', '11:00', '14:00'),
    b(3, 'VIP 4', '15:00', '18:00'),
    b(5, 'VIP Mario', '10:00', '16:00'),
    b(5, 'VIP Cody', '13:00', '16:00'),
  ];

  window.LOG_DUMMY = { updatedAt: new Date().toISOString(), rooms, bookings };
})();
