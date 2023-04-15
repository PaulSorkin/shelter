import createPetItem from '../../js/createPetCard.js'
import { toggleMenu, activeBurger, closeMenu, burger, smallNavList, darken } from '../../js/burger.js';
import { openModal } from '../../js/modal.js';

const PET_ITEMS = document.querySelector('.pet__items');
const tabletWidth = window.matchMedia('(max-width: 1024px)');
const mobileWidth = window.matchMedia('(max-width: 711px)');

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