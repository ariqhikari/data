console.log("Hello World!");

// Fungsi untuk menerapkan blur pada semua gambar
function blurImages() {
    const images = document.getElementsByTagName('img'); // Mengambil semua elemen gambar

    for (let img of images) {
        img.style.filter = 'blur(5px)'; // Menerapkan efek blur
    }
}

// Fungsi untuk menutupi gambar dengan overlay
function coverImages() {
    const images = document.getElementsByTagName('img'); // Mengambil semua elemen gambar

    for (let img of images) {
        // Membuat elemen overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = img.offsetTop + 'px';
        overlay.style.left = img.offsetLeft + 'px';
        overlay.style.width = img.offsetWidth + 'px';
        overlay.style.height = img.offsetHeight + 'px';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Warna latar belakang transparan
        overlay.style.color = 'white';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.fontSize = '20px';
        overlay.style.zIndex = '1000'; // Pastikan overlay di atas gambar
        overlay.innerText = 'Content Sensitive';

        // Membuat tombol "See Image"
        const button = document.createElement('button');
        button.innerText = 'See Image';
        button.style.marginTop = '10px';
        button.onclick = function() {
            alert('This is a sensitive image.'); // Menampilkan alert saat tombol diklik
        };

        overlay.appendChild(button); // Menambahkan tombol ke overlay
        img.style.position = 'relative'; // Pastikan gambar memiliki posisi relatif
        img.parentNode.insertBefore(overlay, img); // Menambahkan overlay di atas gambar
        img.style.display = 'none'; // Menyembunyikan gambar asli
    }
}

coverImages()


