const close = document.querySelector(".pop-up__close");
const popUp = document.querySelector(".pop-up__fon");
const popUpp = document.querySelector(".pop-up__fonn");
const open = document.querySelector("#pol");
const link = document.querySelector("#link");
const linkPop = document.querySelector("#close");

link.addEventListener("click", function () {
  popUpp.classList.toggle("active");
});
linkPop.addEventListener("click", function () {
  popUpp.classList.remove("active");
});

open.addEventListener("click", function () {
  popUp.classList.toggle("active");
});
close.addEventListener("click", function () {
  popUp.classList.remove("active");
});
