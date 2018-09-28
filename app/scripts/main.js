/* eslint-disable */

// const slides = Array.from(document.querySelectorAll('.swiper-slide'));

const menuBtn = document.querySelector('.js-toggle');
const headerList = document.querySelector('.header-menu-list');
const accordion = document.querySelector(".accordion");
const sliderTop = document.querySelector('.slider-wrapper');
const slider1 = document.querySelector(".swiper-wrapper");
const slides = slider1.querySelectorAll('.swiper-slide')
const titles = document.querySelectorAll('.wrapper-question-title');
const answers = document.querySelectorAll('.answers');
const orders = document.querySelectorAll('.order');
const titlesArr = Array.from(titles);
const answersArr = Array.from(answers);
const slidesArr = Array.from(slides);
const ordersArr = Array.from(orders);

console.log(answersArr);


// var mySwiper = document.querySelector('.swiper-container').swiper;

// console.log(mySwiper);
sliderTop.addEventListener('click', function () {
  let element = slider1.querySelector('.swiper-slide-active');
  let subElement = element.querySelector('.slider__slide');
  if (subElement.classList.contains('js-sport')) {
    titlesArr.forEach(title => {
      if (title.classList.contains('js-sport') && title.classList.contains('visually-hidden')) {
        title.classList.remove('visually-hidden');
      } else if (!title.classList.contains('js-sport') && !title.classList.contains('visually-hidden')) {
        title.classList.add('visually-hidden');
      }
    });
    answersArr.forEach(answer => {
      if (answer.classList.contains('js-sport') && answer.classList.contains('visually-hidden')) {
        answer.classList.remove('visually-hidden');
      } else if (!answer.classList.contains('js-sport') && !answer.classList.contains('visually-hidden')) {
        answer.classList.add('visually-hidden');
      }
    });
    ordersArr.forEach(order => {
      if (order.classList.contains('js-sport') && order.classList.contains('visually-hidden')) {
        order.classList.remove('visually-hidden');
      } else if (!order.classList.contains('js-sport') && !order.classList.contains('visually-hidden')) {
        order.classList.add('visually-hidden');
      }
    });
  } else if (subElement.classList.contains('js-anti')) {
    titlesArr.forEach(title => {
      if (title.classList.contains('js-anti') && title.classList.contains('visually-hidden')) {
        title.classList.remove('visually-hidden');
        console.log(title.classList);
      } else if (!title.classList.contains('js-anti') && !title.classList.contains('visually-hidden')) {
        title.classList.add('visually-hidden');
      }
    });
    answersArr.forEach(answer => {
      if (answer.classList.contains('js-anti') && answer.classList.contains('visually-hidden')) {
        answer.classList.remove('visually-hidden');
      } else if (!answer.classList.contains('js-anti') && !answer.classList.contains('visually-hidden')) {
        answer.classList.add('visually-hidden');
      }
    });
    ordersArr.forEach(order => {
      if (order.classList.contains('js-anti') && order.classList.contains('visually-hidden')) {
        order.classList.remove('visually-hidden');
      } else if (!order.classList.contains('js-anti') && !order.classList.contains('visually-hidden')) {
        order.classList.add('visually-hidden');
      }
    });
  } else if (subElement.classList.contains('js-limfo')) {
    titlesArr.forEach(title => {
      if (title.classList.contains('js-limfo') && title.classList.contains('visually-hidden')) {
        title.classList.remove('visually-hidden');
      } else if (!title.classList.contains('js-limfo') && !title.classList.contains('visually-hidden')) {
        title.classList.add('visually-hidden');
      }
    });
    answersArr.forEach(answer => {
      if (answer.classList.contains('js-limfo') && answer.classList.contains('visually-hidden')) {
        answer.classList.remove('visually-hidden');
      } else if (!answer.classList.contains('js-limfo') && !answer.classList.contains('visually-hidden')) {
        answer.classList.add('visually-hidden');
      }
    });
    ordersArr.forEach(order => {
      if (order.classList.contains('js-limfo') && order.classList.contains('visually-hidden')) {
        order.classList.remove('visually-hidden');
      } else if (!order.classList.contains('js-limfo') && !order.classList.contains('visually-hidden')) {
        order.classList.add('visually-hidden');
      }
    });
  } else if (subElement.classList.contains('js-limfo2')) {
    titlesArr.forEach(title => {
      if (title.classList.contains('js-limfo2') && title.classList.contains('visually-hidden')) {
        title.classList.remove('visually-hidden');
      } else if (!title.classList.contains('js-limfo2') && !title.classList.contains('visually-hidden')) {
        title.classList.add('visually-hidden');
      }
    });
    answersArr.forEach(answer => {
      if (answer.classList.contains('js-limfo2') && answer.classList.contains('visually-hidden')) {
        answer.classList.remove('visually-hidden');
      } else if (!answer.classList.contains('js-limfo2') && !answer.classList.contains('visually-hidden')) {
        answer.classList.add('visually-hidden');
      }
    });
    ordersArr.forEach(order => {
      if (order.classList.contains('js-limfo2') && order.classList.contains('visually-hidden')) {
        order.classList.remove('visually-hidden');
      } else if (!order.classList.contains('js-limfo2') && !order.classList.contains('visually-hidden')) {
        order.classList.add('visually-hidden');
      }
    });
  } else if (subElement.classList.contains('js-classic')) {
    titlesArr.forEach(title => {
      if (title.classList.contains('js-classic') && title.classList.contains('visually-hidden')) {
        title.classList.remove('visually-hidden');
      } else if (!title.classList.contains('js-classic') && !title.classList.contains('visually-hidden')) {
        title.classList.add('visually-hidden');
      }
    });
    answersArr.forEach(answer => {
      if (answer.classList.contains('js-classic') && answer.classList.contains('visually-hidden')) {
        answer.classList.remove('visually-hidden');
      } else if (!answer.classList.contains('js-classic') && !answer.classList.contains('visually-hidden')) {
        answer.classList.add('visually-hidden');
      }
    });
    ordersArr.forEach(order => {
      if (order.classList.contains('js-classic') && order.classList.contains('visually-hidden')) {
        order.classList.remove('visually-hidden');
      } else if (!order.classList.contains('js-classic') && !order.classList.contains('visually-hidden')) {
        order.classList.add('visually-hidden');
      }
    });

  }
});


// slidesArr.forEach(element => {
//   if (element.classList.contains('swiper-slide-active')) {
//     let tempElem = element.children;
//     console.log(element);
//   }
// });



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
