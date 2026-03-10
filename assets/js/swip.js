/*=============== TESTIMONIAL SWIPER ===============*/
const swiperTestimonial = new Swiper(".testimonial__swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  spaceBetween: 200,
  grabCursor: true,
  speed: 600,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    depth: 600,
    modifier: 0.4,
    slideShadows: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
});
