import pets from '../assets/pets.json' assert { type: "json" };

const MODAL_WINDOW = document.querySelector('.modal-window');
const MODAL_WRAPPER = document.querySelector('.modal-wrapper');
const MODAL_ARROW = document.querySelector('.modal-arrow');
const body = document.querySelector('body');

export function createModal(i) {
    const modalPic = document.querySelector('.modal_pic');
    modalPic.src = pets[i].img;
    modalPic.alt = pets[i].name;
    modalPic.classList.add('modal_pic');
    const modalName = document.querySelector('.modal-name');
    modalName.innerHTML = pets[i].name
    const modalType = document.querySelector('.modal-type');
    modalType.innerHTML = `${pets[i].type} - ${pets[i].breed}`;
    const modalDescription = document.querySelector('.modal-description');
    modalDescription.innerHTML = pets[i].description;
    const modalFacts = document.querySelector('.modal-facts');
    const modalFact1 = document.querySelector('#fact1');
    modalFact1.innerHTML = pets[i].age;
    const modalFact2 = document.querySelector('#fact2');
    modalFact2.innerHTML = pets[i].inoculations;
    const modalFact3 = document.querySelector('#fact3');
    modalFact3.innerHTML = pets[i].diseases;
    const modalFact4 = document.querySelector('#fact4');
    modalFact4.innerHTML = pets[i].parasites;
  }
  
  
  export function openModal(el) {
    if (el.target.classList.contains('pet__item')) {
      MODAL_WINDOW.classList.remove('hidden');
      MODAL_WRAPPER.classList.remove('hidden');
      body.classList.add('no-overflow');
      createModal(el.target.id);
    } else {
      if (el.target.closest('.pet__item')) {
        MODAL_WINDOW.classList.remove('hidden');
        MODAL_WRAPPER.classList.remove('hidden');
        body.classList.add('no-overflow');
        createModal(el.target.parentElement.id);
      }
    }
    MODAL_WRAPPER.addEventListener('click', closeModal);
    MODAL_ARROW.addEventListener('click', closeModal);
  }
  
  export function closeModal(event) {
    MODAL_WINDOW.classList.add('hidden');
    MODAL_WRAPPER.classList.add('hidden');
    body.classList.remove('no-overflow');
  }
  
  MODAL_WRAPPER.addEventListener('click', closeModal);
  MODAL_ARROW.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.code === "Escape") {
      closeModal();
    }
  });