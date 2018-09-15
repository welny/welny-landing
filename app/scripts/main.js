/* eslint-disable */

// const slides = Array.from(document.querySelectorAll('.swiper-slide'));

const menuBtn = document.querySelector('.js-toggle');
const headerList = document.querySelector('.header-menu-list');

window.onresize = function () {
  if (window.innerWidth >= 1440) {
    headerList.classList.remove('visually-hidden');
  } else if (window.innerWidth < 1440 & !headerList.classList.contains('visually-hidden')) {
    headerList.classList.add('visually-hidden');
  }
}

menuBtn.addEventListener('click', function () {
  if (headerList.classList.contains('visually-hidden')) {
    headerList.classList.remove('visually-hidden');
    menuBtn.classList.remove('menu-closed');
    menuBtn.classList.add('menu-opened');
  } else {
    headerList.classList.add('visually-hidden');
    menuBtn.classList.add('menu-closed');
    menuBtn.classList.remove('menu-opened');
  }
});



/* eslint-enable */
