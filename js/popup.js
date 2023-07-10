const close = document.querySelector(".pop-up__close");
const popUp = document.querySelector(".pop-up__fon");
const open = document.querySelector("#pol");
open.addEventListener("click", function () {
  popUp.classList.toggle("active");
});
close.addEventListener("click", function () {
  popUp.classList.remove("active");
});
