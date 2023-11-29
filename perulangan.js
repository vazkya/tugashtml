function cek() {
    let x = parseInt(prompt("Masukkan angka pertama: "));
    let y = parseInt(prompt("Masukkan terakhir: "));
    let hasilPerulangan = "";

    for (let u = x; u <= y; u++) {
        hasilPerulangan += u + "<br>";
    }

    // Menampilkan hasil di elemen dengan id 'hasilPerulangan'
    document.getElementById("hasilPerulangan").innerHTML = hasilPerulangan;
}

// Panggil fungsi cek()
cek();
