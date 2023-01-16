const burger = document.querySelector('.burger');
const smallNav = document.querySelector('.small__nav');
const smallNavList = document.querySelector('.small__nav__list');
const smallNavItems = document.querySelectorAll('.small_nav_link');
const body = document.querySelector('body');


function toggleMenu() {
    smallNav.classList.toggle('open');
    if (smallNav.classList.contains('open')) {
        body.classList.add('no-overflow');
    } else {
        body.classList.remove('no-overflow');
    }
}
function activeBurger() {
    burger.classList.toggle('active-burger');
}
function closeMenu(event) {
    if (event.target.classList.contains('small_nav_link')) {
        smallNav.classList.remove('open');
        burger.classList.remove('active-burger');
    }
}
burger.addEventListener('click', toggleMenu);
burger.addEventListener('click', activeBurger);
smallNavList.addEventListener('click', closeMenu);