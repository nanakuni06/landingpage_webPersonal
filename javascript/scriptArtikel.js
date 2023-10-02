let artikel = [
    {
        "tanggal" : "29 September 20223",
        "judul" : "5 Cara Menjaga Kesehatan Jantung dengan Pola Hidup Sehatl",
        "isi" : "Berdasarkan laporan Kemenkes RI, penyakit jantung merupakan penyakit penyebab kematian kedua di Indonesia setelah penyakit stroke.."
    },
    {
        "tanggal" : "28 September 2023",
        "judul" : "Ketahui 10 Tips Gaya Hidup Sehat untuk Mencegah Kanker",
        "isi" : "Berdasarkan data Globocan 2020, saat ini ada 396.914 kasus baru kanker di Indonesia. Penyakit kanker di Indonesia didominasi oleh kanker"
    },
    {
        "tanggal" : "25 September 2023",
        "judul" : "Bagaimana Menangani Flu Pada Anak? Yuk, Simak Artikel Berikut!",
        "isi" : "Sistem kekebalan tubuh pada balita yang masih kurang optimal dapat menjadikan balita rentan terserang berbagai penyakit termasuk flu.."
    },
    {
        "tanggal" : "22 Agustus 2023",
        "judul" : "8 Tips Menjaga Kesehatan Dari Polusi Udara",
        "isi" : "Saat ini, polusi udara menjadi masalah kesehatan yang perlu diwaspadai. Polusi udara adalah suatu kondisi dimana udara tercemar oleh zat-zat.."
    },
    {
        "tanggal" : "11 Agustus 2023",
        "judul" : "Demam Berdarah - Gejala, Penyebab, dan Pencegahan",
        "isi" : "Demam Berdarah Dengue atau DBD merupakan infeksi yang disebarkan oleh nyamuk Aedes aegypti dengan efek pada kesehatan masyarakat.."
    },
    {
        "tanggal" : "11 Mei 2023",
        "judul" : "Jangan Terlewat, Ini Jadwal Imunisasi Dasar Lengkap Anak!",
        "isi" : "Imunisasi dasar merupakan hal yang sangat penting bagi anak, karena sistem kekebalan tubuh pada anak belum terbentuk sempurna.."
    }
]

let listArtikel = document.getElementById("list-artikel");

for(let i = 0; i < artikel.length; i++){
    let cardArtikel = `
    <div class="artikel">
        <img id="gambar-artikel"/>
        <p id="tanggal-artikel">${artikel[i].tanggal}</p>
        <h3 id="judul-artikel">${artikel[i].judul}</h3>
        <p id="isi-artikel">${artikel[i].isi}</p>
    </div>`;

    listArtikel.innerHTML += cardArtikel;
};