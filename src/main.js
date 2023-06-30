import { example } from './data.js';

import data from './data/got/got.js';

(example, data);

// manipulacion del DOM

function dibujarPersonajes () {
  data["got"].forEach(element => { 

    const containerMain = document.querySelector(".container_main");
    const divContainer = createElement ("div", "container", containerMain);
    const divCharacter = createElement ("div", "character", divContainer);
    const divCardFront = createElement ("div", "card_front", divCharacter);
    const newImg = createElement ("img", "", divCardFront)
    newImg.src = element["imageUrl"];
    const titleCardFront = createElement ("h3", "", divCardFront);
    titleCardFront.textContent = element["fullName"];
    const divCardBack = createElement ("div", "card_back", divCharacter);
    const titleCardBack = createElement ("h3", "", divCardBack);
    titleCardBack.textContent = element["fullName"];
    const infoCardBack1 = createElement ("p", "", divCardBack);
    infoCardBack1.textContent = element["title"];
    const infoCardBack2 = createElement ("p", "", divCardBack);
    infoCardBack2.textContent = element["family"];
    const infoCardBack3 = createElement ("p", "", divCardBack);
    infoCardBack3.textContent = element["born"];     
  });
}
dibujarPersonajes()


function createElement (elementType, classCss, container) {
  const element = document.createElement (elementType);
  if (classCss !== "") {
    element.classList.add(classCss);  
  }
  container.appendChild(element);
  
  return element;
}

// eventos.js

