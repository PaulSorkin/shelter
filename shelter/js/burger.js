export const burger = document.querySelector('.burger');
export const smallNav = document.querySelector('.small__nav');
export const smallNavList = document.querySelector('.small__nav__list');
export const smallNavItems = document.querySelectorAll('.small_nav_link');
export const body = document.querySelector('body');
export const darken = document.querySelector('.darken');

export function toggleMenu() {
    smallNav.classList.toggle('open');
    body.classList.toggle('no-overflow');
    darken.classList.toggle('darken-active');
}
export function activeBurger() {
    burger.classList.toggle('active-burger');
}
export function closeMenu(event) {
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