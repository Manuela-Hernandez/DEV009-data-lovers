import { example } from './data.js';

import data from './data/got/got.js';

console.log(example, data);

// manipulacion del DOM

function dibujarPersonajes () {
    data["got"].forEach(element => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("personaje");
        const container = document.getElementById("container");
        container.appendChild(newDiv);
        //newDiv.textContent = element["Daenerys Targaryen"];
        const newContent = document.createTextNode("p");
        newContent.textContent = element["fullName"];
        newDiv.appendChild(newContent);
        const newImg = document.createElement ("img");
        newImg.src = element["imageUrl"];
        newDiv.appendChild(newImg);

        console.log (element["imageUrl"]);
       
    });
}
dibujarPersonajes()