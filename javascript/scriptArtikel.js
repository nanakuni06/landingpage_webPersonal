let artikel = [
    {
        "gbr-art" : "assets/picture/artikel1.jpg",
        "tanggal" : "9 Juli 2023",
        "judul" : "Macam-Macam Bahasa Pemrograman yang Sering Digunakan di Era Digital",
        "isi" : "Dalam era digital yang terus berkembang pesat, bahasa pemrograman telah menjadi komponen penting dalam dunia teknologi...",
        "link" : "https://www.kompasiana.com/farhanwirdiyan7781/64aa52ef4addee1956743f32/macam-macam-bahasa-pemrograman-yang-sering-digunakan-di-era-digital"

    },
    {
        "gbr-art" : "assets/picture/artikel2.jpg",
        "tanggal" : "21 April 2023",
        "judul" : "JavaScript: Bahasa Pemograman Penting untuk Pengembangan Web Modern",
        "isi" : "JavaScript adalah bahasa pemrograman yang paling sering digunakan dalam pengembangan web...",
        "link" : "https://www.kompasiana.com/zhenxxx1/6442419b08a8b52e4f2a4882/javascript-bahasa-pemograman-penting-untuk-pengembangan-web-modern"
    },
    {
        "gbr-art" : "assets/picture/artikel1.jpg",
        "tanggal" : " 26 Januari 2023",
        "judul" : "Berikut Deretan Bahasa Pemograman yang Bagus untuk Dipelajari",
        "isi" : "Salah satu keahlian terpenting yang kamu perlu dalami dalam dunia ini ialah mengetahui cara menulis program komputer....",
        "link" : "https://www.kompasiana.com/digital69164/63d240674addee4a2e5b8df3/berikut-deretan-bahasa-pemograman-yang-bagus-untuk-dipelajari"
    },
    {
        "gbr-art" : "assets/picture/artikel3.jpg",
        "tanggal" : " 09 Desember 2022",
        "judul" : "Ini Dia Roadmap Lengkap bagi Kamu yang Mau Menjadi Frontend Developer!",
        "isi" : "Di era teknologi hari ini, dimana hampir semua sektor bisnis telah beralih dan bertransformasi ke arah digital, maka hal....",
        "link" : "https://www.kompasiana.com/azzampridana/63933dcd4addee484a540552/ini-dia-roadmap-lengkap-bagi-kamu-yang-mau-menjadi-frontend-developer"
    }
]

let listArtikel = document.getElementById("list-artikel");

for(let i = 0; i < artikel.length; i++){
    let cardArtikel = `
    <div class="artikel-kumpulan">
    <div id="imgArtikel">
        <img id="gambar-artikel" src="${artikel[i]["gbr-art"]}"/>
    </div>
    <div class="rincian">
        <p id="tanggal-artikel">${artikel[i].tanggal}</p>
        <h3 id="judul-artikel"><a href="${artikel[i].link}">${artikel[i].judul}</a></h3>
        <p id="isi-artikel">${artikel[i].isi}</p>
    </div>
    </div>`;

    listArtikel.innerHTML += cardArtikel;
};



let logoBurger = document.getElementById("logo-burger")
let nav = document.getElementById("nav")

// function myFunction(x) {
//   x.classList.toggle("change");
// }

logoBurger.addEventListener("click", () => {
  // x.classList.toggle("change");
  nav.classList.toggle("navbar")
})
