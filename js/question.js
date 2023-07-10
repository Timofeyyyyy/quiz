var inputs = document.querySelectorAll(".quiz__real");
const block = document.querySelectorAll(".quiz__block");
const done = document.querySelectorAll(".quiz__done_block");
const bntSubmit = document.querySelectorAll(".form-done_submit");
const endBlock = document.querySelectorAll(".quiz__end_block");
var isScrollAllowed = true; // Флаг разрешения прокрутки
var isTransitionAllowed = true; // Флаг разрешения перехода

inputs.forEach(function (input) {
  input.addEventListener("change", function () {
    if (this.checked) {
      if (isScrollAllowed && isTransitionAllowed) {
        isScrollAllowed = false; // Запретить прокрутку
        isTransitionAllowed = false; // Запретить переход

        setTimeout(function () {
          if (input.getAttribute("data-action") === "finish") {
            block.forEach(function (b) {
              b.style.display = "none";
            });
            done.forEach(function (d) {
              d.classList.toggle("active");
            });
          } else {
            swiper.slideNext();
          }

          isScrollAllowed = true; // Разрешить прокрутку после задержки
          isTransitionAllowed = true; // Разрешить переход после задержки
        }, 500); // Задержка в 0.5 секунды
      }
    }
  });
});

// bntSubmit.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     done.forEach(function (d) {
//       d.classList.remove("active");
//     });

//     setTimeout(function () {
//       endBlock.forEach(function (e) {
//         e.classList.toggle("active");
//       });
//     }, 500); // Задержка в 0.5 секунды
//   });
// });

swiper.on("slideChangeTransitionEnd", function () {
  if (isScrollAllowed) {
    swiper.allowSlideNext = true; // Разрешить переход к следующему слайду
  } else {
    swiper.allowSlideNext = false; // Запретить переход к следующему слайду
  }
});
