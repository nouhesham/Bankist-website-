'use strict';

///////////////////////////////////////
// Modal window

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

const header = document.querySelector('.header');
const message = document.createElement('span');
message.classList.add('cookie-message');
message.innerHTML = `this site has cookies <button class="btn btn--close-cookie">Got it </button>`;
header.append(message);

const closeCookiee = document.querySelector('.btn--close-cookie');
console.log(closeCookiee);
closeCookiee.addEventListener('click', function () {
  message.remove();
});

//to know the real color for the element
console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty('--color-primary', 'orangered');
const logo = document.querySelector('.nav__logo');

console.log(logo.className);

const btnscroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnscroll.addEventListener('click', function (e) {
  // const sec = section1.getBoundingClientRect();
  // window.scrollTo({
  //   left: sec.left + window.pageXOffset,
  //   top: sec.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});
