
const navBtn = document.querySelector("#nav-btn");
const overlay = document.querySelector("#menu");
const closeBtn = document.querySelector("#closeBtn");

navBtn.addEventListener("click", function () {
  navBtn.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
closeBtn.addEventListener("click", () => {
  navBtn.classList.remove("close");
  overlay.classList.remove("overlay");
});
function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}
function enableScrolling(){
  window.onscroll=function(){};
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640 : {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 90,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".cardsSlider", {
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".shopsSlider", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640 : {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 90,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

