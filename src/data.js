//funcion de filtrar 
export const filterFamily = (family, arrdata) => {
  const filter1 = (i) => {
    if (i["family"] === family) {
      return true;
    } else {
      return false;
    }

  }
  const filtro1 = arrdata.filter(filter1)
  return filtro1;
};

//Contar personajes
export const contarPersonajes = (personajes) => {
  const personajesContados = personajes.length;
  return personajesContados;
};


//Funcion de ordenar
export const sortAz = (data, sortType) => {
  const sortedDate = data.slice().sort((a, b) => {
    const fullNameA = a.fullName;
    const fullNameB = b.fullName;
    if (fullNameA < fullNameB) {
      return -1;
    } else {
      return 1;
    }

  })

  if (sortType === "") {
    return false
  }
  if (sortType === "AZ") {
    return sortedDate
  } else {
    return sortedDate.reverse()
  }
};

//Funcion buscar
export function buscarPersonajes(searchValue, data) {
  return data.filter(function (character) {
    const fullNameLowerCase = character.fullName.toLowerCase();
    return fullNameLowerCase.indexOf(searchValue) === 0;
  });
}



//Contar personajes por familia
export function contarFamilia(data) {
  
  const sumarFamilia = {};

  data.got.forEach(element => {
    if (sumarFamilia[element.family]) {
      sumarFamilia[element.family] ++;
    } else {
      sumarFamilia[element.family] = 1;
    }
  });
  return sumarFamilia;
}
