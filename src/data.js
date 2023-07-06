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
export const contarPersonajesFamilia = (personajes) => { 
  const personajesContados = personajes.length; 
  return personajesContados; 
}

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

  if(sortType === ""){ 
    return false
  } 
  if (sortType === "AZ") {
    return sortedDate
  } else {
    return sortedDate.reverse()
  }
};



