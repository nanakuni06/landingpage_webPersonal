let logoBurger = document.getElementById("logo-burger");
let nav = document.getElementById("nav");
let desain = document.getElementById("desain");
let isExpanded = false;

logoBurger.addEventListener("click", () => {
  if (isExpanded) {
    // Return the desain div to its original position
    desain.style.top = "330px";
  } else {
    // Move the desain div down
    desain.style.top = "512px";
  }
  // Toggle the "navbar" class to show/hide the navigation
  nav.classList.toggle("navbar");
  // Update the state
  isExpanded = !isExpanded;
});