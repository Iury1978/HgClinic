
const swiperDoctors = new Swiper(".doctors-list", {
  // loop: true,
  slidesPerView: 5,
  spaceBetween: 16,
});


const swiperDoctor = new Swiper(".doctor", {
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 60,

  navigation: {
    nextEl: ".doctors__btn_next",
    prevEl: ".doctors__btn_prev",
  },
  thumbs: {
    swiper: swiperDoctors,
    slideThumbActiveClass: "swiper-slide-active",
  },
});


