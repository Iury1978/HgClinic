const swiper = new Swiper(".hero__swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,

  navigation: {
    nextEl: ".hero__next-btn",
    prevEl: ".hero__prev-btn",
  },

  pagination: {
    el: ".hero__swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
