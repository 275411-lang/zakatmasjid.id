/* ===========================
   MASJID PAGE – masjid.js
   =========================== */

document.addEventListener('DOMContentLoaded', function () {

  // ── 1. Filter Pills : toggle .active ──────────────────
  const pills = document.querySelectorAll('.pill');

  pills.forEach(pill => {
    pill.addEventListener('click', function () {
      // buang .active dari semua pill
      pills.forEach(p => p.classList.remove('active'));
      // pasang .active ke yang diklik
      this.classList.add('active');

      // ── filter logic berdasarkan label pill ──
      const filter = this.textContent.trim().toLowerCase();
      const cards  = document.querySelectorAll('.masjid-card');

      cards.forEach(card => {
        // "Semua" → tampilkan semuanya
        if (filter === 'semua') {
          card.style.display = '';
          return;
        }

        // "Terdekat" → tampilkan semua
        // (bisa dikembangkan jadi sort berdasarkan jarak nanti)
        if (filter === 'terdekat') {
          card.style.display = '';
          return;
        }

        // "Beras" / "Uang" → cek ada .zakat-tag yang match
        const tags = card.querySelectorAll('.zakat-tag');
        let match  = false;

        tags.forEach(tag => {
          if (tag.textContent.toLowerCase().includes(filter)) {
            match = true;
          }
        });

        card.style.display = match ? '' : 'none';
      });
    });
  });

  // ── 2. Search : filter real-time berdasarkan teks ──────
  const searchInput = document.querySelector('.search-input');
  const allCards    = document.querySelectorAll('.masjid-card');

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const query = this.value.toLowerCase().trim();

      allCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

});