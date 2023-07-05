//funcion de filtrar y ordenar

/* //export const filterFamily = (family, arrdata) => {
  const filter1 = (i) => {
    if (i["family"] === family ) {
      return true;
    } else{
      return false;
    }

  }
  const filtro1 = arrdata.filter(filter1)
  return filtro1;
};

export const anotherExample = () => {
  return 'OMG';
};
 */
/* export const sortCharactersAscendente = (got) => { 
  if(got === ''){ //linea 8 a 10 para usar en el test sin argumento
    return false
  }

  //con esta función sort nos ordena el array y lo devuelve ordenado 
  const dataorder = got.sort((a, b) => {
    
    if (a.name < b.name) {//orden alfabetico de A-Z
      return -1;
    }
    if (a.name > b.name) {//orden al de Z-A
      return 1;
    }
    return 0;
  });
  return dataorder;
};
 */

export const filterFamily = (family, arrdata) => {
  if (!Array.isArray(arrdata)) {
    throw new Error('ERROR: DATA INVALIDA, se espera un arreglo');
  }

  const filter1 = (i) => {
    if (i["family"] === family) {
      return true;
    } else {
      return false;
    }
  };

  const filtro1 = arrdata.filter(filter1);
  return filtro1;
};
