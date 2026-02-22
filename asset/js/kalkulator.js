    // Elements
    const form = document.getElementById('zakatForm');
    const jumlahJiwaInput = document.getElementById('jumlahJiwa');
    const hargaBerasInput = document.getElementById('hargaBeras');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const increaseBtn = document.getElementById('increaseBtn');
    const resultBody = document.getElementById('resultBody');
    const resultContent = document.getElementById('resultContent');
    const resultStatus = document.getElementById('resultStatus');
    
    // Stepper buttons
    decreaseBtn.addEventListener('click', () => {
      const current = parseInt(jumlahJiwaInput.value) || 1;
      if (current > 1) {
        jumlahJiwaInput.value = current - 1;
      }
    });
    
    increaseBtn.addEventListener('click', () => {
      const current = parseInt(jumlahJiwaInput.value) || 1;
      if (current < 50) {
        jumlahJiwaInput.value = current + 1;
      }
    });
    
    // Form submit
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get values
      const jumlahJiwa = parseInt(jumlahJiwaInput.value) || 0;
      const jenisZakat = document.querySelector('input[name="jenisZakat"]:checked').value;
      const hargaBeras = parseInt(hargaBerasInput.value) || 0;
      
      // Validate
      if (jumlahJiwa < 1) {
        alert('Jumlah jiwa minimal 1 orang');
        return;
      }
      
      if (hargaBeras < 1000) {
        alert('Harga beras minimal Rp 1.000');
        return;
      }
      
      // Calculate
      const berasPerJiwa = 2.5; // kg
      const totalBeras = jumlahJiwa * berasPerJiwa;
      const totalUang = totalBeras * hargaBeras;
      
      // Display results
      document.getElementById('displayJiwa').textContent = `${jumlahJiwa} Orang`;
      document.getElementById('displayJenis').textContent = jenisZakat === 'beras' ? 'Beras' : 'Uang';
      document.getElementById('displayHarga').textContent = `Rp ${hargaBeras.toLocaleString('id-ID')}`;
      document.getElementById('totalBeras').textContent = `${totalBeras} Kg`;
      document.getElementById('totalUang').textContent = `Rp ${totalUang.toLocaleString('id-ID')}`;
      
      // Show result
      resultBody.style.display = 'none';
      resultContent.style.display = 'block';
      resultStatus.textContent = 'Sudah Dihitung';
      resultStatus.style.background = 'var(--success-light)';
      resultStatus.style.color = 'var(--success)';
      
      // Scroll to result (mobile)
      if (window.innerWidth < 968) {
        resultContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    
    // Save button
    document.getElementById('saveBtn')?.addEventListener('click', () => {
      alert('Perhitungan berhasil disimpan! (Fitur ini akan dikembangkan)');
    });
    
    // Pay button
    document.getElementById('payBtn')?.addEventListener('click', () => {
      window.location.href = 'pembayaran.html';
    });