//import pets from '../../assets/pets.json' assert { type: "json" };
import createPetItem from '../../js/createPetCard.js'
import { toggleMenu, activeBurger, closeMenu, burger, smallNavList, darken } from '../../js/burger.js';
import {  openModal } from '../../js/modal.js';

const PET_ITEMS = document.querySelector('.pet__items');
const tabletWidth = window.matchMedia('(max-width: 1024px)');
const mobileWidth = window.matchMedia('(max-width: 711px)');

const allCards = [0, 1, 2, 3, 4, 5, 6, 7];

// function createPetItems() {
//   allCards.forEach((element) => {
//         PET_ITEMS.append(createPetItem(element));
//     });
//   }

  function createPetItems(n) {
    for (let i=0; i<n; i++) {
      PET_ITEMS.append(createPetItem(i))
    }
  }

let n;
if (mobileWidth.matches) {
  n = 3;
} else {
  if (tabletWidth.matches) {
    n = 6;
} else {
n = 8;
}}

  createPetItems(n);
  PET_ITEMS.addEventListener('click', openModal);



//Burger====
// const burger = document.querySelector('.burger');
// const smallNav = document.querySelector('.small__nav');
// const smallNavList = document.querySelector('.small__nav__list');
// const smallNavItems = document.querySelectorAll('.small_nav_link');
// const body = document.querySelector('body');
// const darken = document.querySelector('.darken');

// function toggleMenu() {
//     smallNav.classList.toggle('open');
//     body.classList.toggle('no-overflow');
//     darken.classList.toggle('darken-active');
// }
// function activeBurger() {
//     burger.classList.toggle('active-burger');
// }
// function closeMenu(event) {
//     if (event.target.classList.contains('small_nav_link') || event.target.classList.contains('darken')) {
//         smallNav.classList.remove('open');
//         burger.classList.remove('active-burger');
//         body.classList.remove('no-overflow');
//         darken.classList.remove('darken-active');
//     }
// }

// burger.addEventListener('click', toggleMenu);
// burger.addEventListener('click', activeBurger);
// smallNavList.addEventListener('click', closeMenu);
// darken.addEventListener('click', closeMenu);