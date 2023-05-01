const verticalScrollYearsSlider = new Swiper(".years-vertical-scroll", {
  mousewheel: true,
  direction: "vertical",
  // loop: true,
  // loopedSlides: 1,
});

var yearThumbs = new Swiper('.year-thumbs', {
  direction: "vertical",
  // spaceBetween: 10,
  mousewheel: true,
  centeredSlides: true,
  slidesPerView: 3,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  // loop: true,
  // loopedSlides: 1,
  breakpoints: {
    1024: {
      slidesPerView: 5,
    },
  },
  
});
verticalScrollYearsSlider.controller.control = yearThumbs;
yearThumbs.controller.control = verticalScrollYearsSlider;