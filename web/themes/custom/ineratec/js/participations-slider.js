const participationsAmount = document.querySelectorAll('.swiper-participations-slide').length;
const participationSswiper = new Swiper('.participations-slider', {
    slidesPerView: 2,
    spaceBetween: 1,
    loop: participationsAmount > 1,
    direction: 'horizontal',
    initialSlide: participationsAmount >= 5 ? 3 : 0,
    breakpoints: {
        640: {
          slidesPerView: participationsAmount >= 4 ? 4 : participationsAmount,
          spaceBetween: 1,
          loop:participationsAmount > 4,
        },
        768: {
          slidesPerView: participationsAmount >= 6 ? 6 : participationsAmount,
          spaceBetween: 1,
          loop:participationsAmount > 6,
        },
        1024: {
          slidesPerView: participationsAmount >= 8 ? 8 : participationsAmount,
          spaceBetween: 1,
          loop:participationsAmount > 8,
        },
      },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-hc',
        prevEl: '.swiper-button-prev-hc',
    },
});
