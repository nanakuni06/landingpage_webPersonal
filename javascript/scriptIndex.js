const btnStart = document.getElementById('btn-start');
btnStart.addEventListener('click', function() {
  window.location.href = 'file:///C:/MSIB/webPersonal/portofolio.html'; // Ganti URL dengan URL halaman portofolio yang sesuai
});

let logoBurger = document.getElementById("logo-burger")
let nav = document.getElementById("nav")

// function myFunction(x) {
//   x.classList.toggle("change");
// }

logoBurger.addEventListener("click", () => {
  // x.classList.toggle("change");
  nav.classList.toggle("navbar")
})
