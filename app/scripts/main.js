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

var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    var element = slider1.querySelector('.swiper-slide-active');
    var subElement = element.querySelector('.slider__slide');
    if (subElement.classList.contains('js-sport')) {
      toggleSlides('js-sport');
    } else if (subElement.classList.contains('js-anti')) {
      toggleSlides('js-anti');
    } else if (subElement.classList.contains('js-limfo')) {
      toggleSlides('js-limfo');
    } else if (subElement.classList.contains('js-stress')) {
      toggleSlides('js-stress');
    } else if (subElement.classList.contains('js-classic')) {
      toggleSlides('js-classic');
    };
  });
});

var config = { attributes: true }

observer.observe(slider1, config);

// var sliderTypes = document.querySelector('.slider');
// var sliderMasseur = document.querySelector('.slider2');

// function isEven(value) {
//   if (value % 2 == 0)
//     return true;
//   else
//     return false;
// }

// window.onresize = function () {
//   console.log(sliderTypes.offsetWidth);
//   if (isEven(sliderTypes.offsetWidth)) {
//     sliderTypes.offsetWidth = sliderTypes.offsetWidth - 1;
//   } else if (!isEven(sliderTypes.offsetWidth)) {
//     sliderTypes.offsetWidth = sliderTypes.offsetWidth;
//   } else if (isEven(sliderMasseur.offsetWidth)) {
//     sliderMasseur.offsetWidth = sliderMasseur.offsetWidth - 1;
//   } else if (!isEven(sliderMasseur.offsetWidth)) {
//     sliderMasseur.offsetWidth = sliderMasseur.offsetWidth;
//   } else if (window.innerWidth >= 1200) {
//     headerList.classList.remove('visually-hidden');
//   } else if (window.innerWidth < 1200 & !headerList.classList.contains('visually-hidden')) {
//     headerList.classList.add('visually-hidden');
//   }
// };

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

var breakpoints = [560, 768, 1200, 1440, 1441];
var breakpointsName = ['phablet', 'tablet', 'desktop', 'desktop-wide', 'very-wide'];

function checkbp() {
  var ww = $(window).width();
  var returnVal = breakpointsName[0];

  for (var i = 0; i < breakpoints.length; i++) {
    if (ww > breakpoints[i]) {
      returnVal = breakpointsName[i + 1];
      if (i + 1 >= breakpoints.length) {
        returnVal = breakpointsName[i];
      }
    }
  }
  return returnVal;
}

var breakpointLoaded = checkbp();
var breakpointCurrent;

$(window).resize(function () {
  breakpointCurrent = checkbp();
  if (breakpointLoaded != breakpointCurrent) {
    window.location.href = window.location.href;
    console.log('reloaded ' + breakpointCurrent);
  };
  console.log('loaded ' + breakpointLoaded + ' curent-' + breakpointCurrent);
});

/* eslint-enable */
