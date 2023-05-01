const sliderWave = document.querySelector(".product-page-hero-slider");
const mainContent = document.getElementById('main');
const heroSlidesAmount = document.querySelectorAll('.hero-slider').length;

if(sliderWave) {
    mainContent.classList.add("slider-wave");
}

const swiper = new Swiper('.product-page-hero-slider', {
    loop: heroSlidesAmount > 1,
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    pagination: {
        el: '.product-hero-slider-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.hero-slider-button-next-hc',
        prevEl: '.hero-slider-button-prev-hc',
    },
});