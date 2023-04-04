const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const hamburgerIcon = document.getElementById("hamburger");
const closeIcon = document.getElementById("close");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});
