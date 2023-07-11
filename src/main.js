import { filterFamily, contarPersonajesFamilia, sortAz, buscarPersonajes} from './data.js';
import data from './data/got/got.js';


// manipulacion del DOM

function dibujarPersonajes(datos) {
  datos.forEach(element => {
    createCharacter(element)


  });
}
dibujarPersonajes(data["got"])
const mensaje = document.getElementById("mensaje");
mensaje.innerHTML = "Hay " + contarPersonajesFamilia(data["got"]) + " personajes";



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
/* //crear select 
function crearSelect (tipoElemento, classCss, atributo, texto ) {
const elementSelect = document.characterSet(tipoElemento);
  if (classCss !== "") {
    elementSelect.classList.add(classCss);
  }

  container.appendChild(element);

  return element;
}

function selectFamily () {
  crearSelect

} */

function select () {
  const containerMain = document.querySelector(".container_main");
  let select = document.createElement("select");

  let option1 = document.createElement("option");
  option1.setAttribute("value", "value1");
  let option1Texto = document.createTextNode("opcion 1");
  option1.appendChild(option1Texto);

  let option2 = document.createElement("option");
  option2.setAttribute("value", "value2");
  let option2Texto = document.createTextNode("opcion 2");
  option2.appendChild(option2Texto);

  let option3 = document.createElement("option");
  option3.setAttribute("value", "value3");
  let option3Texto = document.createTextNode("opcion 3");
  option3.appendChild(option3Texto);

  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);

  containerMain.appendChild(select);
   
}







let familiafiltrada = data["got"];

const selectFamily = document.getElementById("family_filter");
selectFamily.addEventListener("change", function () {
  const family = selectFamily.value;
  document.querySelector(".container_main").innerHTML = '';
  searchInput.value=""
  if (family !== "all") {
    familiafiltrada = filterFamily(family, data["got"]);
    dibujarPersonajes(familiafiltrada);
    mensaje.innerHTML = "Hay " + contarPersonajesFamilia(familiafiltrada) + " personajes";
  } else {
    familiafiltrada = data["got"];
    dibujarPersonajes(data["got"]);
    mensaje.innerHTML = "Hay " + contarPersonajesFamilia(data["got"]) + " personajes";
  }

});


const selectOrder = document.getElementById("alphabetical")
selectOrder.addEventListener("change", function () {
  const sortType = selectOrder.value;
  const family = selectFamily.value;
  searchInput.value=""
  document.querySelector(".container_main").innerHTML = '';
  if (sortType === "all") {
    dibujarPersonajes(familiafiltrada);
  } else {
    let personajesOrdenados = []
    if (family === "all") {
      personajesOrdenados = sortAz(data["got"], sortType);

    } else {
      personajesOrdenados = sortAz(familiafiltrada, sortType);
    }
    dibujarPersonajes(personajesOrdenados);
  }
   

});

const searchInput = document.getElementById("buscar");
searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase();
  const resultadosBusqueda = buscarPersonajes(searchValue, familiafiltrada);
  document.querySelector(".container_main").innerHTML = '';
  dibujarPersonajes(resultadosBusqueda);
  mensaje.innerHTML = "Hay " + contarPersonajesFamilia(resultadosBusqueda) + " personajes";

});

const buttonHome = document.getElementById ("home")
buttonHome.addEventListener("click", function() {
  location.reload()

})
