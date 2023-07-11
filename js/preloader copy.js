document.body.onload = function () {
  setTimeout(function () {
    let preloader = document.getElementById("page-preloader");
    if (preloader.classList.toggle("done")) {
      preloader.classList.add("done");
    }
  }, 1000);
};
