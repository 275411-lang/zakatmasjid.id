/* ============================================
   HAMBURGER MENU JAVASCRIPT
   Paste ini SEBELUM tag </body> di SEMUA HALAMAN
   ============================================ */

<script>
  // Hamburger Menu Toggle Function
  (function() {
    // Tunggu sampai DOM selesai dimuat
    document.addEventListener('DOMContentLoaded', function() {
      // Get elements
      const hamburger = document.getElementById('hamburger');
      const mainNav = document.getElementById('mainNav');
      const navOverlay = document.getElementById('navOverlay');
      
      // Check if elements exist (safety check)
      if (!hamburger || !mainNav || !navOverlay) {
        console.warn('Hamburger menu elements not found');
        return;
      }
      
      // Toggle menu function
      function toggleMenu() {
        const isActive = mainNav.classList.contains('active');
        
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('active');
        navOverlay.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (!isActive) {
          document.body.style.overflow = 'hidden';
          document.body.style.height = '100vh';
        } else {
          document.body.style.overflow = '';
          document.body.style.height = '';
        }
      }
      
      // Close menu function
      function closeMenu() {
        if (mainNav.classList.contains('active')) {
          hamburger.classList.remove('active');
          mainNav.classList.remove('active');
          navOverlay.classList.remove('active');
          document.body.style.overflow = '';
          document.body.style.height = '';
        }
      }
      
      // Open/Close on hamburger click
      hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
      });
      
      // Close on overlay click
      navOverlay.addEventListener('click', function() {
        closeMenu();
      });
      
      // Close on nav link click (mobile only)
      const navLinks = mainNav.querySelectorAll('.nav-link');
      navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          // Only close menu on mobile
          if (window.innerWidth <= 968) {
            closeMenu();
          }
        });
      });
      
      // Close menu on window resize to desktop
      let resizeTimer;
      window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
          if (window.innerWidth > 968 && mainNav.classList.contains('active')) {
            closeMenu();
          }
        }, 250);
      });
      
      // Close menu on escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mainNav.classList.contains('active')) {
          closeMenu();
        }
      });
      
      // Set active nav link based on current page
      // Hanya jalankan jika ada navLinks
      if (navLinks.length > 0) {
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop() || 'index.html';
        
        navLinks.forEach(function(link) {
          // Hapus class active dari semua link terlebih dahulu
          link.classList.remove('active');
          
          const linkHref = link.getAttribute('href');
          if (!linkHref) return;
          
          // Normalisasi perbandingan
          const linkPage = linkHref.split('/').pop();
          
          // Cek beberapa kemungkinan
          if (linkPage === currentPage) {
            link.classList.add('active');
          } 
          // Handle index/dashboard page
          else if ((currentPage === '' || currentPage === 'index.html' || currentPage === 'index') && 
                  (linkPage === 'dashboard.html' || linkPage === 'dashboard' || linkPage === 'index.html' || linkPage === 'index')) {
            link.classList.add('active');
          }
          // Handle hash links
          else if (linkHref.startsWith('#') && window.location.hash === linkHref) {
            link.classList.add('active');
          }
        });
      }
      
      // Close menu when clicking outside (optional enhancement)
      document.addEventListener('click', function(e) {
        if (mainNav.classList.contains('active') && 
            !mainNav.contains(e.target) && 
            !hamburger.contains(e.target) &&
            window.innerWidth <= 968) {
          closeMenu();
        }
      });
    });
    
  })();
</script>