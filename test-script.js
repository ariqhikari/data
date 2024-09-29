// Fungsi untuk menutupi gambar dengan overlay
function coverImages() {
    const images = document.getElementsByTagName('img'); // Mengambil semua elemen gambar

    for (let img of images) {
        // Hanya menambahkan overlay jika gambar belum ditutupi
        if (!img.dataset.covered) {
            // Membuat elemen overlay
            const overlay = document.createElement('div');
            overlay.style.position = 'absolute'; // Gunakan posisi absolut
            overlay.style.top = '0'; // Atur posisi atas
            overlay.style.left = '0'; // Atur posisi kiri
            overlay.style.width = '100%'; // Lebar overlay 100% dari gambar
            overlay.style.height = '100%'; // Tinggi overlay 100% dari gambar
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Warna latar belakang transparan
            overlay.style.color = 'white';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.fontSize = '20px';
            overlay.style.zIndex = '1000'; // Pastikan overlay di atas gambar
            overlay.innerText = 'Content Image';

            // Membuat tombol "See Image"
            const button = document.createElement('button');
            button.innerText = 'See Image';
            button.style.marginTop = '10px';
            button.onclick = function() {
                alert('This is a sensitive image.'); // Menampilkan alert saat tombol diklik
                overlay.remove(); // Menghapus overlay
                img.style.display = 'block'; // Menampilkan gambar
                img.dataset.covered = 'true'; // Tandai bahwa gambar sudah dilihat
            };

            overlay.appendChild(button); // Menambahkan tombol ke overlay
            img.style.position = 'relative'; // Pastikan gambar memiliki posisi relatif
            img.parentNode.insertBefore(overlay, img); // Menambahkan overlay di atas gambar
            img.style.display = 'none'; // Menyembunyikan gambar asli

            // Tandai gambar sebagai telah ditutupi
            img.dataset.covered = 'false'; // Tandai sebagai belum dilihat
        }
    }
}

// Menjalankan fungsi setelah halaman dimuat
    coverImages(); // Panggil saat halaman dimuat

    // Mengatur event listener untuk berbagai interaksi
    const events = ['scroll', 'click', 'keydown', 'mousemove'];

    events.forEach(event => {
        window.addEventListener(event, () => {
            // Debounce: Menghindari pemanggilan fungsi berulang kali
            clearTimeout(window.interactionTimeout);
            window.interactionTimeout = setTimeout(() => {
                coverImages(); // Panggil fungsi lagi setelah interaksi
            }, 100);
        });
    });
