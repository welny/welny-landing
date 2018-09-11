/* eslint-disable no-unused-vars */
// http://idangero.us/swiper/#.WcIu5oy0OHs
import * as Swiper from 'swiper/dist/js/swiper';

const $ = window.$;

export default function slider() {
  const mySlider = new Swiper('.js-slider', {
    loop: true,
    speed: 300,
    // autoplay: {
    //   delay: 2000,
    // },
    slidesPerView: 5,
    centeredSlides: true,
    parallax: true,
    navigation: {
      nextEl: '.slider__button_next',
      prevEl: '.slider__button_prev',
    },
    pagination: {
      el: '.slider__dots',
      clickable: true,
      paginationClickableClass: 'slider__dots_clickable',
      bulletClass: 'slider__dot',
      bulletActiveClass: 'active',
    },
    roundLengths: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
        // spaceBetween: 35,
      },
      1439: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 5,
        // spaceBetween: 56,
      },
    },
  });
}
/* eslint-enable no-unused-vars */
