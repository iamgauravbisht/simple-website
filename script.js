const menuopen = document.querySelector(".menu");
const menuclose = document.querySelector(".close");
const header = document.querySelector(".header");
menuopen.addEventListener("click", function () {
  header.style.display = "block";
});
menuclose.addEventListener("click", function () {
  header.style.display = "none";
});
