import data from './data/got/got.js';
import { 
  familyFilter, 
  sortCharactersAscendente
  
} from './data.js';



//(example, data);

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

const selectores = document.getElementById("alphabetical");
selectores.addEventListener("change", () => {
  //llamamos al change para lea cuando el usurio cambia de opcion en el selector del dom
  const opciones = selectores.value; //obtenemos el valor del select
  const newDataOrder = sortCharactersAscendente(data.got);
  //console.log(sortCharactersAscendente(data.characters));
  if (opciones == "ascendente") {
    dibujarPersonajes(newDataOrder);
  } else if (opciones == "descendente") {
    dibujarPersonajes(newDataOrder.reverse());
  } else {
    dibujarPersonajes(data.got); //funcion principal del llamado a los personajes establecida en Linea 5 del main.
  }
});

const select1 = document.getElementById("family_filter");
select1.addEventListener("change", (e) => {
  const family = e.target.value;
  const arrfamilias = familyFilter(data.got, family);
  dibujarPersonajes(arrfamilias);
  if (family === "Filtrar por") {
    dibujarPersonajes(data.got); 
    
    console.log(arrfamilias);
  }
});

