import pets from '../../assets/pets.json' assert { type: "json" }

console.log(pets)

//Burger====
const burger = document.querySelector('.burger');
const smallNav = document.querySelector('.small__nav');
const smallNavList = document.querySelector('.small__nav__list');
const smallNavItems = document.querySelectorAll('.small_nav_link');
const body = document.querySelector('body');
const darken = document.querySelector('.darken');

function toggleMenu() {
    smallNav.classList.toggle('open');
    body.classList.toggle('no-overflow');
    darken.classList.toggle('darken-active');
}
function activeBurger() {
    burger.classList.toggle('active-burger');
}
function closeMenu(event) {
    if (event.target.classList.contains('small_nav_link') || event.target.classList.contains('darken')) {
        smallNav.classList.remove('open');
        burger.classList.remove('active-burger');
        body.classList.remove('no-overflow');
        darken.classList.remove('darken-active');
    }
}

burger.addEventListener('click', toggleMenu);
burger.addEventListener('click', activeBurger);
smallNavList.addEventListener('click', closeMenu);
darken.addEventListener('click', closeMenu);

//all pets are here======
// let pets = [
//     {
//       "name": "Jennifer",
//       "img": "./assets/images/pets/jennifer.png",
//       "type": "Dog",
//       "breed": "Labrador",
//       "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
//       "age": "2 months",
//       "inoculations": [
//         "none"
//       ],
//       "diseases": [
//         "none"
//       ],
//       "parasites": [
//         "none"
//       ]
//     },
//     {
//       "name": "Sophia",
//       "img": "./assets/images/pets/sophia.png",
//       "type": "Dog",
//       "breed": "Shih tzu",
//       "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
//       "age": "1 month",
//       "inoculations": [
//         "parvovirus"
//       ],
//       "diseases": [
//         "none"
//       ],
//       "parasites": [
//         "none"
//       ]
//     },
//     {
//       "name": "Woody",
//       "img": "./assets/images/pets/woody.png",
//       "type": "Dog",
//       "breed": "Golden Retriever",
//       "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
//       "age": "3 years 6 months",
//       "inoculations": [
//         "adenovirus",
//         "distemper"
//       ],
//       "diseases": [
//         "right back leg mobility reduced"
//       ],
//       "parasites": [
//         "none"
//       ]
//     },
//     {
//       "name": "Scarlett",
//       "img": "./assets/images/pets/scarlett.png",
//       "type": "Dog",
//       "breed": "Jack Russell Terrier",
//       "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
//       "age": "3 months",
//       "inoculations": [
//         "parainfluenza"
//       ],
//       "diseases": [
//         "none"
//       ],
//       "parasites": [
//         "none"
//       ]
//     },
//     {
//       "name": "Katrine",
//       "img": "./assets/images/pets/katrine.png",
//       "type": "Cat",
//       "breed": "British Shorthair",
//       "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
//       "age": "6 months",
//       "inoculations": [
//         "panleukopenia"
//       ],
//       "diseases": [
//         "none"
//       ],
//       "parasites": [
//         "none"
//       ]
//     },
//     {
//       "name": "Timmy",
//       "img": "./assets/images/pets/timmy.png",
//       "type": "Cat",
//       "breed": "British Shorthair",
//       "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
//       "age": "2 years 3 months",
//       "inoculations": [
//         "calicivirus",
//         "viral rhinotracheitis"
//       ],
//       "diseases": [
//         "kidney stones"
//       ],
//       "parasites": [
//         "none"
//       ]
//     },
//     {
//       "name": "Freddie",
//       "img": "./assets/images/pets/freddie.png",
//       "type": "Cat",
//       "breed": "British Shorthair",
//       "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
//       "age": "2 months",
//       "inoculations": [
//         "rabies"
//       ],
//       "diseases": [
//         "none"
//       ],
//       "parasites": [
//         "none"
//       ]
//     },
//     {
//       "name": "Charly",
//       "img": "./assets/images/pets/charly.png",
//       "type": "Dog",
//       "breed": "Jack Russell Terrier",
//       "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
//       "age": "8 years",
//       "inoculations": [
//         "bordetella bronchiseptica",
//         "leptospirosis"
//       ],
//       "diseases": [
//         "deafness",
//         "blindness"
//       ],
//       "parasites": [
//         "lice",
//         "fleas"
//       ]
//     }
//   ]

const tabletWidth = window.matchMedia('(max-width: 768px)');
const mobileWidth = window.matchMedia('(max-width: 320px)');


const BTN_LEFT = document.querySelector('#button-left');
const BTN_RIGHT = document.querySelector('#button-right');
const CAROUSEL = document.querySelector("#carousel");
const ITEMS_LEFT = document.querySelector("#items-left");
const ITEMS_RIGHT = document.querySelector("#items-right");
const ITEMS_ACTIVE = document.querySelector('#items-active');

function createPetItem(i) {
  const petItem = document.createElement('div');
  petItem.classList.add('pet__item')
  const immg = document.createElement('img');
  immg.src = pets[i].img;
  immg.alt = pets[i].name;
  immg.classList.add('pet_img');
  petItem.append(immg);
  const petName = document.createElement('div');
  petName.classList.add('pet-name');
  petName.innerHTML = pets[i].name;
  petItem.append(petName);
  const petButton = document.createElement('button')
  petButton.classList.add('button', 'button-bordered');
  petButton.innerHTML = 'Learn more';
  petItem.append(petButton);
  return petItem;
}

const allCards = [0, 1, 2, 3, 4, 5, 6, 7];

let nowActive;
if (mobileWidth.matches) {
  nowActive = [4];
} if (tabletWidth.matches) {
nowActive = [4, 0];
} else {
nowActive = [2, 0, 5];
}

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
  }
  if (tabletWidth.matches) {
    sideCards = randomCards(2, restCards);
  } else {
    sideCards = randomCards(3, restCards);
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
})




