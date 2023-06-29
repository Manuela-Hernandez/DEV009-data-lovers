import { example } from './data.js';

import data from './data/got/got.js';

console.log(example, data);

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
    const newContent = document.createTextNode("h3");
    newContent.textContent = element["fullName"];
    divCardFront.appendChild(newContent);

       
  });
}
dibujarPersonajes()
