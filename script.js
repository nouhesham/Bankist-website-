'use strict';

///////////////////////////////////////
// Modal window

const btnscroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');

const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
btnscroll.addEventListener('click', function (e) {
  // const sec = section1.getBoundingClientRect();
  // window.scrollTo({
  //   left: sec.left + window.pageXOffset,
  //   top: sec.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});
const message = document.createElement('span');
message.classList.add('cookie-message');
message.innerHTML = `this site has cookies <button class="btn btn--close-cookie">Got it </button>`;
header.append(message);

const closeCookiee = document.querySelector('.btn--close-cookie');

closeCookiee.addEventListener('click', function () {
  message.remove();
});

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();

    const id = e.target.getAttribute('href');

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
//tapped components

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
tabsContainer.addEventListener('click', function (e) {
  const click = e.target.closest('.operations__tab');
  console.log(click);
  if (!click) return;

  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  click.classList.add('operations__tab--active');
  //Activate content area

  tabsContent.forEach(cont =>
    cont.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${click.dataset.tab}`)
    .classList.add('operations__content--active');
});

//menu fade animation
const handHover = function (e, opacity) {
  // console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', e => {
  // console.log('1', e);
  handHover(e, 0.5);
});

nav.addEventListener('mouseout', e => handHover(e, 1));
//sticky navigation using window

// const intitalCord = section1.getBoundingClientRect();
// console.log(intitalCord);

// window.addEventListener('scroll', function () {
//   if (this.window.scrollY > intitalCord.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

//sticky navigation using intersectionObserver Api
//function
// const obsCallBack = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// //options
// const observerOptions = {
//   root: null,
//   //precentage we want to have visible
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallBack, observerOptions);
// observer.observe(section1);

//when zero percent of the header is visible we want to implement a certian function
const header1 = document.querySelector('.header');
const stickyNav = function (entries) {
  const [entry] = entries; //same as entry[0]
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, //as if a there is an invisible margin to the section
  rootMargin: '-90px',
});

headerObserver.observe(header);

const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
//lazy loading images

const images = document.querySelectorAll('img[data-src]');
const revealImage = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  //replace the image
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const ImageObserver = new IntersectionObserver(revealImage, {
  root: null,
  threshold: 0,

  rootMargin: '-200px',
});
images.forEach(function (image) {
  ImageObserver.observe(image);
});

//slider

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnright = document.querySelector('.slider__btn--right');

const curMax = slides.length;
let curSlide = 0;
const gotoslide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
gotoslide(0);
const nextSlide = function () {
  if (curSlide === curMax - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  gotoslide(curSlide);
};
const previousSlide = function () {
  if (curSlide === 0) {
    curSlide = curMax - 1;
  } else {
    curSlide--;
  }
  gotoslide(curSlide);
};

btnright.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', previousSlide);
//

//Experimenting some stuff

//to know the real color for the element
// console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty('--color-primary', 'orangered');
// const logo = document.querySelector('.nav__logo');

// logo.addEventListener('mouseenter', function (e) {
//   alert('helllo there');
// });

// const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomcolr = () =>
//   `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
// console.log(randomcolr());

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log('hello');
//   this.style.backgroundColor = randomcolr();
// });
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   console.log('hello');
//   this.style.backgroundColor = randomcolr();
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log('hello');
//   this.style.backgroundColor = randomcolr();
// });
