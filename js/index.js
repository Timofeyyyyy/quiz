const btn = document.querySelector(".left_side__btn");
const quiz = document.querySelector(".quiz");

btn.addEventListener("click", function () {
  quiz.classList.toggle("active");
});
