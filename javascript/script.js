let dokter =[
    {
        "nama" : "Dr. John Smith, Sp.A",
        "spesialis" : "Spesialis Anak",
        "gambar" : "assets/picture/docter-man.jpg"
    },
    {
        "nama" : "Dr. Emily Brown, Sp.JP",
        "spesialis" : "Spesialis Jantung dan Pembuluh Darah",
        "gambar" : "assets/picture/docter-woman.jpg"
    },
    {
        "nama" : "Dr. Syar Johnson, Sp.KK",
        "spesialis" : "Spesialis Kesehatan Kulit dan Kelamin",
        "gambar" : "assets/picture/docter-man.jpg"
    },
    {
        "nama" : "Dr. Johnson",
        "spesialis" : "Spesialis Kesehatan",
        "gambar" : "assets/picture/docter-man.jpg"
    },
    {
        "nama" : "Dr. Jenny Johnson",
        "spesialis" : "Spesialis Kesehatan",
        "gambar" : "assets/picture/docter-woman.jpg"
    }
];

let listDokter = document.getElementById("list-dokter");

for(let i = 0; i < dokter.length; i++){
    let cardDokter = `
    <div class="list">
        <img id="gambar-dokter" src=${dokter[i].gambar}/>
        <h3 id="nama-dokter">${dokter[i].nama}</h3>
        <p id="profile-dokter">${dokter[i].spesialis}</p>
    </div>
    `;

    listDokter.innerHTML += cardDokter;
};
