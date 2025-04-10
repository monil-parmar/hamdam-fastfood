// Toggle mobile navbar
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

navToggler.forEach(btn => {
  btn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

// Back to top button
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  window.scrollY > 100
    ? backTopBtn.classList.add("active")
    : backTopBtn.classList.remove("active");
});

// Preloader
window.addEventListener("load", () => {
  document.querySelector(".preload")?.classList.add("loaded");
  document.body.classList.add("loaded");
});

// Light/Dark mode toggle
const toggleBtn = document.createElement("button");
toggleBtn.classList.add("toggle-btn");
toggleBtn.textContent = "Toggle Mode";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
