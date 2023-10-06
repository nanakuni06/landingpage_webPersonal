let logoBurger = document.getElementById("logo-burger");
let nav = document.getElementById("nav");
let desain = document.getElementById("desain");

logoBurger.addEventListener("click", () => {
    desain.style.top = "330px";
  nav.classList.toggle("navbar");
});