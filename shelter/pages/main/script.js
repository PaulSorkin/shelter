//import pets from '../../assets/pets.json' assert { type: "json" };
import { toggleMenu, activeBurger, closeMenu, burger, smallNavList, darken } from '../../js/burger.js';
import createPetItem  from '../../js/createPetCard.js';
import { createModal, openModal, closeModal} from '../../js/modal.js'

//Burger====
// const burger = document.querySelector('.burger');
// const smallNav = document.querySelector('.small__nav');
// const smallNavList = document.querySelector('.small__nav__list');
// const smallNavItems = document.querySelectorAll('.small_nav_link');
 //const body = document.querySelector('body');
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



// function createPetItem(i) {
//   const petItem = document.createElement('div');
//   petItem.classList.add('pet__item');
//   petItem.id = i;
//   const immg = document.createElement('img');
//   immg.src = pets[i].img;
//   immg.alt = pets[i].name;
//   immg.classList.add('pet_img');
//   petItem.append(immg);
//   const petName = document.createElement('div');
//   petName.classList.add('pet-name');
//   petName.innerHTML = pets[i].name;
//   petItem.append(petName);
//   const petButton = document.createElement('button')
//   petButton.classList.add('button', 'button-bordered');
//   petButton.innerHTML = 'Learn more';
//   petItem.append(petButton);
//   return petItem;
// }

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

// let nowActive  = [2, 0, 5];
// let restCards = allCards.filter(x => !nowActive.includes(x)); //returns 5 other cards
// let sideCards = [restCards[0], restCards[1], restCards[2]];

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
  // const allCards = [0, 1, 2, 3, 4, 5, 6, 7];
  // let nowActive  = [2, 0, 5];
  // let restCards = allCards.filter(x => !nowActive.includes(x)); //returns 5 other cards
  // let sideCards = [restCards[0], restCards[1], restCards[2]];

  //let cahngedItems;
  if (animationEvent.animationName === 'move-left') {
    CAROUSEL.classList.remove('transition-left');
    document.querySelector('#items-active').innerHTML = ITEMS_LEFT.innerHTML;
    nowActive = sideCards;
    ITEMS_LEFT.innerHTML = '';
    ITEMS_RIGHT.innerHTML = '';
    setCards();
    // nowActive = sideCards;
    // restCards = allCards.filter(x => !nowActive.includes(x));
    // sideCards = [restCards[0], restCards[1], restCards[2]];
  } else {
    CAROUSEL.classList.remove('transition-right');
    document.querySelector('#items-active').innerHTML = ITEMS_RIGHT.innerHTML;
    nowActive = sideCards;
    ITEMS_LEFT.innerHTML = '';
    ITEMS_RIGHT.innerHTML = '';
    setCards();
    // nowActive = sideCards;
    // restCards = allCards.filter(x => !nowActive.includes(x));
    // sideCards = [restCards[0], restCards[1], restCards[2]];
  }
  // function createSideItemsNew() {
  //   sideCards.forEach((element) => {
  //     ITEMS_LEFT.append(createPetItem(element));
  //     ITEMS_RIGHT.append(createPetItem(element));
  //   })
  // }
  //createSideItemsNew();

  createSideItems();

  BTN_LEFT.addEventListener('click', moveLeft);
  BTN_RIGHT.addEventListener('click', moveRight);
});

ITEMS_ACTIVE.addEventListener('click', openModal);

//Modal window

// function createModal(i) {
//   const modalPic = document.querySelector('.modal_pic');
//   modalPic.src = pets[i].img;
//   modalPic.alt = pets[i].name;
//   modalPic.classList.add('modal_pic');
//   const modalName = document.querySelector('.modal-name');
//   modalName.innerHTML = pets[i].name
//   const modalType = document.querySelector('.modal-type');
//   modalType.innerHTML = `${pets[i].type} - ${pets[i].breed}`;
//   const modalDescription = document.querySelector('.modal-description');
//   modalDescription.innerHTML = pets[i].description;
//   const modalFacts = document.querySelector('.modal-facts');
//   const modalFact1 = document.querySelector('#fact1');
//   modalFact1.innerHTML = pets[i].age;
//   const modalFact2 = document.querySelector('#fact2');
//   modalFact2.innerHTML = pets[i].inoculations;
//   const modalFact3 = document.querySelector('#fact3');
//   modalFact3.innerHTML = pets[i].diseases;
//   const modalFact4 = document.querySelector('#fact4');
//   modalFact4.innerHTML = pets[i].parasites;
// }


// function openModal(el) {
//   if (el.target.classList.contains('pet__item')) {
//     MODAL_WINDOW.classList.remove('hidden');
//     MODAL_WRAPPER.classList.remove('hidden');
//     body.classList.add('no-overflow');
//     createModal(el.target.id);
//   } else {
//     if (el.target.closest('.pet__item')) {
//       MODAL_WINDOW.classList.remove('hidden');
//       MODAL_WRAPPER.classList.remove('hidden');
//       body.classList.add('no-overflow');
//       createModal(el.target.parentElement.id);
//     }
//   }
//   MODAL_WRAPPER.addEventListener('click', closeModal);
//   MODAL_ARROW.addEventListener('click', closeModal);
// }
// ITEMS_ACTIVE.addEventListener('click', openModal);

// function closeModal(event) {
//   MODAL_WINDOW.classList.add('hidden');
//   MODAL_WRAPPER.classList.add('hidden');
//   body.classList.remove('no-overflow');
// }

// MODAL_WRAPPER.addEventListener('click', closeModal);
// MODAL_ARROW.addEventListener('click', closeModal);
// document.addEventListener('keydown', e => {
//   if (e.code === "Escape") {
//     closeModal();
//   }
// });