import { filterFamily, sortAz, contarPersonajesFamilia, buscarPersonajes} from '../src/data.js';

const arrdata = [
  { fullName: "Daenerys Targaryen", title: "Mother of Dragons", family: "House Targaryen" },
  { fullName: "Sansa Stark", title: "Lady of Winterfell", family: "House Stark" },
  { fullName: "Theon Greyjoy", title: "Captain of Sea Bitch", family: "House Greyjoy" },
  { fullName: "Tyrion Lannister", title: "Hand of the Queen", family: "House Lannister" },
  { fullName: "Stannis Baratheon", title: "Lord of Dragonstone", family: "House Baratheon" },
  { fullName: "Margaery Tyrell", title: "Queen of the Seven Kingdoms", family: "House Tyrell"},
];

// Pruebas para filterFamily
describe('filterFamily', () => {  //funcion donde se agrupan las pruebas a realizar
  it('Debería filtrar la familia Targaryen', () => { //it escribe una prueba individual 
    const filteredData = filterFamily("House Targaryen", arrdata); // recibe dos argumentos: una descripción de la prueba y una función que contiene el código de la prueba.
    expect(filteredData).toEqual([ //expect lo q se espera de la prueba debe ser igual al arreglo
      { fullName: "Daenerys Targaryen", title: "Mother of Dragons", family: "House Targaryen"},
    ]);
  });

  it('Debería filtrar la familia Stark', () => {
    const filteredData = filterFamily("House Stark", arrdata);
    expect(filteredData).toEqual([
      { fullName: "Sansa Stark", title: "Lady of Winterfell", family: "House Stark" },
    ]);
  });

  it('Debería filtrar la familia Greyjoy', () => {
    const filteredData = filterFamily("House Greyjoy", arrdata);
    expect(filteredData).toEqual([
      { fullName: "Theon Greyjoy", title: "Captain of Sea Bitch", family: "House Greyjoy" },
    ]);
  });

  it('Debería filtrar la familia Lannister', () => {
    const filteredData = filterFamily("House Lannister", arrdata);
    expect(filteredData).toEqual([
      { fullName: "Tyrion Lannister", title: "Hand of the Queen", family: "House Lannister" },
    ]);
  });

  it('Debería filtrar la familia Baratheon', () => {
    const filteredData = filterFamily("House Baratheon", arrdata);
    expect(filteredData).toEqual([
      { fullName: "Stannis Baratheon", title: "Lord of Dragonstone", family: "House Baratheon" },
    ]);
  });

  it('Debería filtrar la familia Tyrell', () => {
    const filteredData = filterFamily("House Tyrell" , arrdata);
    expect(filteredData).toEqual([
      { fullName: "Margaery Tyrell", title: "Queen of the Seven Kingdoms", family: "House Tyrell" },
    ]);
  });

  it('return array vacio', () => {
    expect(filterFamily("", arrdata)).toEqual([])
  });
});

describe('sortAz', () => {
  const data = [
    {
      id: 35,
      fullName: "Ramsey Bolton",
      family: "Bolton",
    },
    {
      id: 0,
      fullName: "Daenerys Targaryen",
      family: "House Targaryen",
    },
    {
      id: 6,
      fullName: "Ned Stark",
      family: "House Stark",
    },
    
  ];
  
  it('is a function', () => {
    expect(typeof sortAz).toBe('function');
  });

  it('returns los personajes ordenados ascendente', () => {
    const result1= [
      {
        id: 0,
        fullName: "Daenerys Targaryen",
        family: "House Targaryen",
      },

      {
        id: 6,
        fullName: "Ned Stark",
        family: "House Stark",
      },
      {
        id: 35,
        fullName: "Ramsey Bolton",
        family: "Bolton",
      },
    ];
    expect(sortAz(data, "AZ" )).toEqual(result1);
  });

  it('returns personajes ordenados descendente', () => {
    const result2 = [
      {
        id: 35,
        fullName: "Ramsey Bolton",
        family: "Bolton",
      },
      {
        id: 6,
        fullName: "Ned Stark",
        family: "House Stark",
      },
      {
        id: 0,
        fullName: "Daenerys Targaryen",
        family: "House Targaryen",
      },

    ];
    expect(sortAz(data, "ZA" )).toEqual(result2);
  });

  
  it('return array vacio', () => {
    expect(sortAz(data, "")).toEqual(false)
    
  });
});

describe('contarPersonajesFamilia', () => {
  const data = [
    {
      id: 0,
      fullName: "Daenerys Targaryen",
      family: "House Targaryen",
    },

    {
      id: 20,
      fullName: "Khal Drogo",
      family: "House Targaryen",
    },
    {
      id: 26,      
      fullName: "Viserys Targaryn",
      family: "House Targaryen"
    }
  ];
  
  it('is a function', () => {
    expect(typeof contarPersonajesFamilia).toBe('function');
  });

  it('contar personajes de la familia targaryen', () => {
    const contar1= 3;
    expect(contarPersonajesFamilia(data,"House Targaryen")).toBe(contar1);
  });

});

describe('contarPersonajesFamilia', () => {
  const data = [
    {
      id: 8,
      fullName: "Jamie Lannister",
      family: "House Lannister",
      
    },

    {
      id: 9,     
      fullName: "Cersei Lannister",
      family: "House Lannister",
     
    },
    {
      id: 14,
      fullName: "Tyrion Lannister",
      family: "House Lannister",
    },
    {
      id: 42,
      fullName: "Tywin Lannister",
      family: "House Lannister",
    }

  ];
  
  
  it('contar personajes de la familia lannister', () => {
    const contar1= 4;
    expect(contarPersonajesFamilia(data,"House Lannister")).toBe(contar1);
  });

});

const data =  [
  {
    id: 21,
    fullName: "Margaery Tyrell",
    family: "House Tyrell",   
  },

  {
    id: 24,
    fullName: "Missandei",
    family: "Naathi",
  },

  {
    id: 40,
    fullName: "Melisandre",
    family: "Unknown",
  }

]

describe('buscarPersonajes', () => {
  it('Debería filtrar los personajes por el texto ingresado', () => {
    const searchData = buscarPersonajes("m", data);
    const expectedData = [
      {
        id: 21,
        fullName: "Margaery Tyrell",
        family: "House Tyrell",
      },
      {
        id: 24,
        fullName: "Missandei",
        family: "Naathi",
      },
      {
        id: 40,
        fullName: "Melisandre",
        family: "Unknown",
      },
    ];
    expect(searchData).toEqual(expectedData);
  });
});

