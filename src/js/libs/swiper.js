import Swiper from 'swiper/bundle';

let new_heading_slider = new Swiper(".new-heading__slider", {
  slidesPerView: "auto",
  spaceBetween: 25,
  centeredSlides: true,
  loop: "true",
  speed: 500,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },

  navigation: {
    nextEl: ".new-heading__slider-arrow--next",
    prevEl: ".new-heading__slider-arrow--prev",
  },
});

let new_shops_slider = new Swiper(".new-shops__slider", {
  loop: true,
  freeMode: true,
  grabCursor: true,
  allowTouchMove: true,
  speed: 5500,
  freeModeMomentum: false,

  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 6,
      spaceBetween: 24,
    }
  }
});