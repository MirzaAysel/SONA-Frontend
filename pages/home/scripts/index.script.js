const searchBtns = document.querySelectorAll(".search-btn");
const searchModal = document.querySelector(".search-model");

const searchClose = document.querySelector(".search-close-switch");

searchBtns.forEach((searchBtn) => {
  searchBtn.addEventListener("click", function () {
    searchModal.style.display = "block";
  });
});

searchClose.addEventListener("click", function () {
  searchModal.style.display = "none";
});

//Hero Slider
const swiper = new Swiper(".hero-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    duration: 3000,
  },
  effect: "fade",
});

// Testimonial Slider
const testimonialSwiper = new Swiper(".testimonial__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    duration: 3000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
