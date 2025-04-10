// ========== Mobile Navbar Toggle ==========
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

navTogglers.forEach(btn => {
  btn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  });
});

// ========== Back To Top Button ==========
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backTopBtn.classList.add("active");
  } else {
    backTopBtn.classList.remove("active");
  }
});

// ========== Preloader ==========
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preload");
  preloader?.classList.add("loaded");
  document.body.classList.add("loaded");
});

// ========== Light/Dark Mode Toggle ==========
const modeToggleBtn = document.createElement("button");
modeToggleBtn.classList.add("toggle-btn");
modeToggleBtn.textContent = "Toggle Mode";
document.body.appendChild(modeToggleBtn);

// Optional: Remember mode with localStorage
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
}

modeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
