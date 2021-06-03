const hamburgerButton = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

function toggle() {
  navLinks.classList.toggle("show");
}

hamburgerButton.addEventListener("click", toggle);
