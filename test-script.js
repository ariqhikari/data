console.log("Hello World!");
alert("Hello!");

// Fungsi untuk menerapkan blur pada semua gambar
function blurImages() {
    const images = document.getElementsByTagName('img'); // Mengambil semua elemen gambar

    for (let img of images) {
        img.style.filter = 'blur(5px)'; // Menerapkan efek blur
    }
}

blurImages()

