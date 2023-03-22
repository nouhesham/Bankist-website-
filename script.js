'use strict';

///////////////////////////////////////
// Modal window

const btnscroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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
const header = document.querySelector('.header');
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

    const id = this.getAttribute('href');

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });

    console.log('link');
  });
});

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
