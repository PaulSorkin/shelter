import { toggleMenu, activeBurger, closeMenu, burger, smallNavList, darken } from '../../js/burger.js';
import createPetItem  from '../../js/createPetCard.js';
import { createModal, openModal, closeModal} from '../../js/modal.js'

burger.addEventListener('click', toggleMenu);
burger.addEventListener('click', activeBurger);
smallNavList.addEventListener('click', closeMenu);
darken.addEventListener('click', closeMenu);

const tabletWidth = window.matchMedia('(max-width: 1024px)');
const mobileWidth = window.matchMedia('(max-width: 711px)');

const BTN_LEFT = document.querySelector('#button-left');
const BTN_RIGHT = document.querySelector('#button-right');
const CAROUSEL = document.querySelector("#carousel");
const ITEMS_LEFT = document.querySelector("#items-left");
const ITEMS_RIGHT = document.querySelector("#items-right");
const ITEMS_ACTIVE = document.querySelector('#items-active');

const allCards = [0, 1, 2, 3, 4, 5, 6, 7];
let nowActive;
if (mobileWidth.matches) {
  nowActive = [4];
} else {
  if (tabletWidth.matches) {
    nowActive = [4, 0];
} else {
nowActive = [4, 0, 2];
}}

let restCards;
let sideCards;

const randomCards = (n, arr) => {           //Helps to pick up random array elements
  for (let i=0; i<n; i++) {
    let random = Math.floor(Math.random() * (arr.length - i)) + i;
    let item = arr[random];
    arr[random] = arr[i];
    arr[i] = item;
  }
  return arr.slice(0, n)
}

function setCards() {
  restCards = allCards.filter(x => !nowActive.includes(x)); //returns other cards
  if (mobileWidth.matches) {
    sideCards = randomCards(1, restCards);
  } else {
    if (tabletWidth.matches) {
      sideCards = randomCards(2, restCards);
    } else {
      sideCards = randomCards(3, restCards);
    }
  }
 
  return sideCards;
}
setCards();

function createPetItems() {
  nowActive.forEach((element) => {
    ITEMS_ACTIVE.append(createPetItem(element));
  });
}
createPetItems();

function createSideItems() {
  sideCards.forEach((element) => {
    ITEMS_LEFT.append(createPetItem(element));
    ITEMS_RIGHT.append(createPetItem(element));
  })
}
createSideItems();

const moveLeft = () => {
  CAROUSEL.classList.add('transition-left');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
}

const moveRight = () => {
  CAROUSEL.classList.add('transition-right');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
}

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);

  
CAROUSEL.addEventListener('animationend', (animationEvent) => {
  if (animationEvent.animationName === 'move-left') {
    CAROUSEL.classList.remove('transition-left');
    document.querySelector('#items-active').innerHTML = ITEMS_LEFT.innerHTML;
    nowActive = sideCards;
    ITEMS_LEFT.innerHTML = '';
    ITEMS_RIGHT.innerHTML = '';
    setCards();
  } else {
    CAROUSEL.classList.remove('transition-right');
    document.querySelector('#items-active').innerHTML = ITEMS_RIGHT.innerHTML;
    nowActive = sideCards;
    ITEMS_LEFT.innerHTML = '';
    ITEMS_RIGHT.innerHTML = '';
    setCards();
  }

  createSideItems();

  BTN_LEFT.addEventListener('click', moveLeft);
  BTN_RIGHT.addEventListener('click', moveRight);
});

ITEMS_ACTIVE.addEventListener('click', openModal);