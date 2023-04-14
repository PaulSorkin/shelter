import pets from '../../assets/pets.json' assert { type: "json" }

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