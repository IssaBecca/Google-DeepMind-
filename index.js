const btnNavEl = document.querySelector(".btn-mobile-nav-container");
const headerEl = document.querySelector(".header-container");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
