window.onload = function () {
  let texts = document.querySelectorAll(
    ".section2 .content > div .texts > div"
  );
  let btns = document.querySelectorAll(".section2 .content > div .btns button");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function fun() {
      for (let n = 0; n < btns.length; n++) {
        btns[n].classList.remove("active");
        texts[n].classList.add("hide");
      }
      btns[i].classList.add("active");
      texts[i].classList.remove("hide");
    });
  }
  // -----------------

  let radios = document.querySelectorAll(
    ".section2 .paymentMethod > div > label"
  );
  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", function fun() {
      for (let n = 0; n < radios.length; n++) {
        radios[n].classList.remove("active");
      }
      radios[i].classList.add("active");
    });
  }
  // -----------------
  // Blogs page
  let Blogbtns = document.querySelectorAll(
    ".section2 > div > div:nth-of-type(3) .btns button"
  );
  let blogContent = document.querySelectorAll(
    ".section2 > div > div:nth-of-type(3) .content > div"
  );
  for (let i = 0; i < Blogbtns.length; i++) {
    Blogbtns[i].addEventListener("click", function fun() {
      for (let n = 0; n < Blogbtns.length; n++) {
        Blogbtns[n].classList.remove("active");
        blogContent[n].classList.remove("show");
      }
      Blogbtns[i].classList.add("active");
      blogContent[i].classList.add("show");
    });
  }
};
