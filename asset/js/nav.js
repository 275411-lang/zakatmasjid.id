/* ===========================
   nav-active.js
   Auto-set .active pada nav-link
   berdasarkan halaman yang sedang dibuka.
   
   Load di SEMUA halaman:
   <script src="asset/js/nav-active.js"></script>
   =========================== */

document.addEventListener('DOMContentLoaded', function () {

  // Ambil filename dari URL sekarang
  // misal: "http://localhost/Masjid.html" → "masjid.html"
  const currentPage = window.location.pathname.split('/').pop().toLowerCase();

  // Ambil semua nav-link
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function (link) {
    // Ambil href-nya, ambil cuma filename-nya, lowercase
    const linkPage = link.getAttribute('href').split('/').pop().toLowerCase();

    // Kalau filename match → pasang active, kalau gak → buang active
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

});