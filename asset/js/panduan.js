/* ===========================
   panduan.js
   Halaman Panduan / Edukasi
   =========================== */

document.addEventListener('DOMContentLoaded', function () {

  // ── FAQ Accordion Toggle ────────────────────────────────
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    const answer   = item.querySelector('.faq-answer');

    question.addEventListener('click', function () {
      // Tutup semua FAQ lain
      faqItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle FAQ yang diklik
      item.classList.toggle('active');
    });
  });

});