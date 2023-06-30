// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//funcion de filtrar y ordenar

export const sortCharactersAscendente = (got) => { 
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


export function familyFilter(got, family)  { 
  if(family === ''){ 
    return false    
  }
  const filtro = got.filter(item => item.lastName === family); 
  return filtro; 
};