import { filterFamily, sortAz } from './data.js';
import data from './data/got/got.js';


// manipulacion del DOM

function dibujarPersonajes(datos) {
  datos.forEach(element => {
    createCharacter(element)

  });
}
dibujarPersonajes(data["got"])


function createElement(elementType, classCss, container) {
  const element = document.createElement(elementType);
  if (classCss !== "") {
    element.classList.add(classCss);
  }
  container.appendChild(element);

  return element;
}

function createCharacter(element) {
  const containerMain = document.querySelector(".container_main");
  const divContainer = createElement("div", "container", containerMain);
  const divCharacter = createElement("div", "character", divContainer);
  const divCardFront = createElement("div", "card_front", divCharacter);
  const newImg = createElement("img", "", divCardFront)
  newImg.src = element["imageUrl"];
  const titleCardFront = createElement("h3", "", divCardFront);
  titleCardFront.textContent = element["fullName"];
  const divCardBack = createElement("div", "card_back", divCharacter);
  const titleCardBack = createElement("h3", "", divCardBack);
  titleCardBack.textContent = element["fullName"];
  const infoCardBack1 = createElement("p", "", divCardBack);
  infoCardBack1.textContent = element["title"];
  const infoCardBack2 = createElement("p", "", divCardBack);
  infoCardBack2.textContent = element["family"];
  const infoCardBack3 = createElement("p", "", divCardBack);
  infoCardBack3.textContent = element["born"];

}

const selectFamily = document.getElementById("family_filter")
selectFamily.addEventListener("change", function () {
  const family = selectFamily.value;
  const familiafiltrada = filterFamily(family, data["got"]);
  document.querySelector(".container_main").innerHTML = '';
  if (family !== "") {
    dibujarPersonajes(familiafiltrada);

  } else {
    dibujarPersonajes(data["got"]);

  }

});

const selectOrder = document.getElementById("alphabetical")
selectOrder.addEventListener("change", function () {
  const sortType = selectOrder.value;
  console.log(sortType);
  const sortName = sortAz(data["got"], sortType);
  console.log(sortName);

  document.querySelector(".container_main").innerHTML = '';
  if (sortType === "all") {
    dibujarPersonajes(data["got"]);
  }
  if (sortType === "AZ") {
    dibujarPersonajes(sortName);

  } else if (sortType === "ZA") {
    dibujarPersonajes(sortName);
  }

});

