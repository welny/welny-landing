/* eslint-disable */

'use strict';

var menuBtn = document.querySelector('.js-toggle');
var headerList = document.querySelector('.header-menu-list');
var accordion = document.querySelector(".accordion");
var sliderTop = document.querySelector('.slider-wrapper');
var slider1 = document.querySelector(".swiper-wrapper");
var slides = slider1.querySelectorAll('.swiper-slide');
var titles = document.querySelectorAll('.wrapper-question-title');
var answers = document.querySelectorAll('.answers');
var orders = document.querySelectorAll('.order');
var images = document.querySelectorAll('.img-wrapper');
var blocksArr = Array.from(orders).concat(Array.from(titles)).concat(Array.from(answers)).concat(Array.from(images));

function toggleSlides(className) {
  blocksArr.forEach(function (element) {
    if (element.classList.contains(className) && element.classList.contains('visually-hidden')) {
      element.classList.remove('visually-hidden');
    } else if (!element.classList.contains(className) && !element.classList.contains('visually-hidden')) {
      element.classList.add('visually-hidden');
    }
  });
};

sliderTop.addEventListener('DOMAttrModified', function () {
  var element = slider1.querySelector('.swiper-slide-active');
  var subElement = element.querySelector('.slider__slide');
  if (subElement.classList.contains('js-sport')) {
    toggleSlides('js-sport');
  } else if (subElement.classList.contains('js-anti')) {
    toggleSlides('js-anti');
  } else if (subElement.classList.contains('js-limfo')) {
    toggleSlides('js-limfo');
  } else if (subElement.classList.contains('js-limfo2')) {
    toggleSlides('js-limfo2');
  } else if (subElement.classList.contains('js-classic')) {
    toggleSlides('js-classic');
  }
});

window.onresize = function () {
  if (window.innerWidth >= 1200) {
    headerList.classList.remove('visually-hidden');
  } else if (window.innerWidth < 1200 & !headerList.classList.contains('visually-hidden')) {
    headerList.classList.add('visually-hidden');
  }
};

if (window.innerWidth >= 1200) {
  headerList.classList.remove('visually-hidden');
} else if (window.innerWidth < 1200 & !headerList.classList.contains('visually-hidden')) {
  headerList.classList.add('visually-hidden');
}

if (window.innerWidth >= 1200) {
  if (!accordion.classList.contains("is-active")) {
    accordion.classList.add("is-active");
  }
} else {
  accordion.classList.remove("is-active");
}

menuBtn.addEventListener('click', function () {
  if (headerList.classList.contains('visually-hidden')) {
    headerList.classList.remove('visually-hidden');
    menuBtn.classList.remove('menu-closed');
    menuBtn.classList.add('menu-opened');
    menuBtn.classList.add('js-freeze');
    menuBtn.classList.remove('js-unfreeze');
  } else {
    headerList.classList.add('visually-hidden');
    menuBtn.classList.add('menu-closed');
    menuBtn.classList.remove('menu-opened');
    menuBtn.classList.add('js-unfreeze');
    menuBtn.classList.remove('js-freeze');
  }
});

/* eslint-enable */
