import { filterFamily, contarPersonajes, sortAz, buscarPersonajes, contarFamilia } from './data.js';
import data from './data/got/got.js';


const containerMain = document.querySelector(".container_main");
const mensaje = document.getElementById("mensaje");
const selectFamily = document.getElementById("family_filter");
const selectOrder = document.getElementById("alphabetical");
const searchInput = document.getElementById("buscar");
const buttonHome = document.getElementById("home");
const botonTabla = document.getElementById("boton_tabla");
const tablaFamilia = document.getElementById("tabla_container");


dibujarPersonajes(data["got"]);

function dibujarPersonajes(datos) {
  mensaje.innerHTML = "Hay " + contarPersonajes(datos) + " personajes";
 
  datos.forEach(element => {
    createCharacter(element)
  });
  
}


//Funcion crear elemento
function createElement(elementType, classCss, container) {
  const element = document.createElement(elementType);
  if (classCss !== "") {
    element.classList.add(classCss);
  }
  container.appendChild(element);

  return element;
}

//Funcion crear personaje
function createCharacter(element) {
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


let familiafiltrada = data["got"];

//Select filtrar familia
selectFamily.addEventListener("change", function () {
  const family = selectFamily.value;
  containerMain.innerHTML = '';
  searchInput.value = ""
  if (family !== "all") {
    familiafiltrada = filterFamily(family, data["got"]);
    dibujarPersonajes(familiafiltrada);
  } else {
    familiafiltrada = data["got"];
    dibujarPersonajes(data["got"]);
  }

});


//Select ordenar
selectOrder.addEventListener("change", function () {
  const sortType = selectOrder.value;
  const family = selectFamily.value;
  searchInput.value = ""
  containerMain.innerHTML = '';
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

//Buscar por nombre
searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase();
  const resultadosBusqueda = buscarPersonajes(searchValue, familiafiltrada);
  containerMain.innerHTML = '';
  dibujarPersonajes(resultadosBusqueda);

});

//Boton cargar pagina
buttonHome.addEventListener("click", function () {
  location.reload()

});


// resultadoContador
const resultadoContador = contarFamilia(data);

//Crear contenido tabla
tablaFamilia.style.display = "none";
const cuerpoTabla = document.createElement("tbody");

const tituloFila = document.createElement("tr");
const tituloFamilia = document.createElement("th");
tituloFamilia.textContent = "Familia";
tituloFila.appendChild(tituloFamilia);
const tituloCantidad = document.createElement("th");
tituloCantidad.textContent = "Cantidad";
tituloFila.appendChild(tituloCantidad);
tablaFamilia.appendChild(tituloFila);


for (const f in resultadoContador) {
  const fila = document.createElement("tr");
  let td = document.createElement("td")

  td.innerText = f;
  fila.appendChild(td);

  td = document.createElement("td");
  td.innerText = resultadoContador[f];
  fila.appendChild(td);

  cuerpoTabla.appendChild(fila)
}

tablaFamilia.appendChild(cuerpoTabla);

//Boton tabla
botonTabla.addEventListener("click", function () {
  
  if (tablaFamilia.style.display === "none") {
    tablaFamilia.style.display = "block";
  } else {
    tablaFamilia.style.display = "none";
  }

});










