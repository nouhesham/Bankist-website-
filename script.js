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
  console.log(e);
  if (e.target.classList.contains('.nav__link')) {
    const link = e.target;
    console.log(link);

    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', handHover.bind(0.5));

nav.addEventListener('mouseout', handHover.bind(1));

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
