document.body.onload = function () {
  setTimeout(function () {
    const cookies = document.querySelector(".cookie");
    const reject = document.querySelector(".cookie__btn_reject");
    const accept = document.querySelector(".cookie__btn_accept");
    const cookieFon = document.querySelector(".cookie_fon");
    const cookieMobile = document.querySelector(".cookie_mobile");
    cookies.classList.add("done");
    reject.addEventListener("click", function () {
      cookies.classList.remove("done");
      cookieFon.classList.remove("active");
    });
    accept.addEventListener("click", function () {
      cookies.classList.remove("done");
      cookieFon.classList.remove("active");
    });
    // Проверяем ширину экрана
    if (window.innerWidth <= 900) {
      cookieFon.classList.toggle("active");
      cookieMobile.classList.toggle("active");
    }
  });
};
