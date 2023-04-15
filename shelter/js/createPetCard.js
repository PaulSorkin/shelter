import pets from '../assets/pets.json' assert { type: "json" };

function createPetItem(i) {
    const petItem = document.createElement('div');
    petItem.classList.add('pet__item');
    petItem.id = i;
    const img = document.createElement('img');
    img.src = pets[i].img;
    img.alt = pets[i].name;
    img.classList.add('pet_img');
    petItem.append(img);
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

  export default createPetItem;