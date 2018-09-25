/* eslint-disable */

// const slides = Array.from(document.querySelectorAll('.swiper-slide'));

const menuBtn = document.querySelector('.js-toggle');
const headerList = document.querySelector('.header-menu-list');
const accordion = document.querySelector(".accordion");

window.onresize = function () {
  if (window.innerWidth >= 1200) {
    headerList.classList.remove('visually-hidden');
  } else if (window.innerWidth < 1200 & !headerList.classList.contains('visually-hidden')) {
    headerList.classList.add('visually-hidden');
  }
}

if (window.innerWidth >= 1200) {
  headerList.classList.remove('visually-hidden');
} else if (window.innerWidth < 1200 & !headerList.classList.contains('visually-hidden')) {
  headerList.classList.add('visually-hidden');
}

if (window.innerWidth >= 1200) {
  if (!accordion.classList.contains("is-active")) {
    accordion.classList.add("is-active")
  }
} else {
  accordion.classList.remove("is-active")
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
