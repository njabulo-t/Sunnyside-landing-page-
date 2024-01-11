document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger-menu");
  const mobileNav = document.querySelector(".mobile-nav");

  hamburgerBtn.addEventListener("click", function () {
    this.classList.toggle("open");
    mobileNav.classList.toggle("open");
  });
});