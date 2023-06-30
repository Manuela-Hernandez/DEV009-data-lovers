import { example } from './data.js';

import data from './data/got/got.js';

(example, data);

// manipulacion del DOM

function dibujarPersonajes () {
  data["got"].forEach(element => { 
    //Se crea un div se le agrega la clase container
    const divContainer = document.createElement ("div")
    divContainer.classList.add("container");
    
    //Se llama el container_main desde el DOM y se le agrega el divContainer
    const containerMain = document.querySelector(".container_main");
    containerMain.appendChild(divContainer);

    //se crea div se le agrega clase caracter y se agrega al divContainer
    const divCharacter = document.createElement("div");
    divCharacter.classList.add("character");
    divContainer.appendChild(divCharacter);

    //Se crea div se agrega clase card_front y se agrega al divCharacter
    const divCardFront = document.createElement("div");
    divCardFront.classList.add("card_front");
    divCharacter.appendChild(divCardFront);

    //se agrega imagen al divCardFront
    const newImg = document.createElement ("img");
    newImg.src = element["imageUrl"];
    divCardFront.appendChild(newImg);

    //se agrega texto al divCardFront
    const titleCardFront = document.createElement("h3");
    titleCardFront.textContent = element["fullName"];
    divCardFront.appendChild(titleCardFront);

    //se crea div se agrega clase card_back y se agrega al divCharacter
    const divCardBack = document.createElement("div");
    divCardBack.classList.add("card_back");
    divCharacter.appendChild(divCardBack)
    
    //se agrega titulo al divCardBack
    const titleCardBack = document.createElement("h3");
    titleCardBack.textContent = element["fullName"];
    divCardBack.appendChild(titleCardBack);

    const infoCardBack1 = document.createElement("p");
    infoCardBack1.textContent = element["title"];
    divCardBack.appendChild(infoCardBack1);
    
    const infoCardBack2 = document.createElement("p");
    infoCardBack2.textContent = element["family"];
    divCardBack.appendChild(infoCardBack2);

    const infoCardBack3 = document.createElement("p");
    infoCardBack3.textContent = element["born"];
    divCardBack.appendChild(infoCardBack3);

       
  });
}
dibujarPersonajes()
