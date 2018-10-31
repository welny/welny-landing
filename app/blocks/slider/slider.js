/* eslint-disable  */
// http://idangero.us/swiper/#.WcIu5oy0OHs
import * as Swiper from "swiper/dist/js/swiper";

const $ = window.$;

export default function slider() {
  const mySlider = new Swiper(".js-slider", {
    loop: true,
    speed: 600,
    nested: true,
    // autoplay: {
    //   delay: 2000,
    // },
    centeredSlides: true,
    slidesPerView: 5,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".slider__button_next",
      prevEl: ".slider__button_prev"
    },
    // pagination: {
    //   el: '.slider__dots',
    //   clickable: true,
    //   paginationClickableClass: 'slider__dots_clickable',
    //   bulletClass: 'slider__dot',
    //   bulletActiveClass: 'active',
    // },
    onSlidePrevStart: function(evt) {
      swiper2.slidePrev();
    },
    onSlideNextStart: function(evt) {
      swiper2.slideNext();
    },
    touchEventsTarget: "wrapper",
    direction: "horizontal",
    on: {
      progress: function() {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * -0.5;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(
            ".type-slide-wrapper"
          ).style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
        }
      },
      touchStart: function() {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "0.3s ease";
        }
      },
      setTransition: function(speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(
            ".type-slide-wrapper"
          ).style.transition = speed + "ms";
        }
      }
    },
    roundLengths: true,
    breakpoints: {
      320: {
        centeredSlides: true,
        slidesPerView: 1
      },
      559: {
        centeredSlides: true,
        slidesPerView: 1
      },
      560: {
        centeredSlides: false,
        slidesPerView: 2
      },
      767: {
        centeredSlides: false,
        slidesPerView: 2
      },
      768: {
        centeredSlides: true,
        slidesPerView: 3
      },
      1199: {
        centeredSlides: true,
        slidesPerView: 3
      },
      1200: {
        centeredSlides: true,
        slidesPerView: 5
      },
      1440: {
        centeredSlides: true,
        slidesPerView: 5
      }
    }
  });

  const mySlider2 = new Swiper(".js-slider2", {
    loop: true,
    speed: 600,
    // autoplay: {
    //   delay: 2000,
    // },
    slidesPerView: 3,
    centeredSlides: true,
    navigation: {
      nextEl: ".slider2__button_next",
      prevEl: ".slider2__button_prev"
    },
    // pagination: {
    //   el: '.slider__dots',
    //   clickable: true,
    //   paginationClickableClass: 'slider__dots_clickable',
    //   bulletClass: 'slider__dot',
    //   bulletActiveClass: 'active',
    // },
    slideToClickedSlide: true,
    roundLengths: true,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      559: {
        slidesPerView: 1
      },
      560: {
        centeredSlides: false,
        slidesPerView: 2
      },
      768: {
        centeredSlides: false,
        slidesPerView: 2
      },
      1199: {
        centeredSlides: false,
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      },
      1440: {
        slidesPerView: 3
      },
      1441: {
        slidesPerView: 3
      }
    }
  });

  const mySlider3 = new Swiper(".js-slider3", {
    loop: true,
    speed: 600,
    // autoplay: {
    //   delay: 2000,
    // },
    slidesPerView: 1,
    // centeredSlides: true,
    // parallax: true,
    navigation: {
      nextEl: ".slider3__button_next",
      prevEl: ".slider3__button_prev"
    },
    // pagination: {
    //   el: '.slider__dots',
    //   clickable: true,
    //   paginationClickableClass: 'slider__dots_clickable',
    //   bulletClass: 'slider__dot',
    //   bulletActiveClass: 'active',
    // },
    roundLengths: true,
    breakpoints: {
      320: {
        slidesPerView: 1
      }
    }
  });
}

/* eslint-enable no-unused-vars */
