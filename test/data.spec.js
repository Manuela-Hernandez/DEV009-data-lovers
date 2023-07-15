import { filterFamily, sortAz, contarPersonajesFamilia, buscarPersonajes, contarFamilia } from '../src/data.js';

// Pruebas para filterFamily
const arrdata = [
  { 
    fullName: "Daenerys Targaryen", 
    title: "Mother of Dragons", 
    family: "House Targaryen" 
  },
  { 
    fullName: "Sansa Stark", 
    title: "Lady of Winterfell", 
    family: "House Stark" 
  },
  { 
    fullName: "Theon Greyjoy", 
    title: "Captain of Sea Bitch", 
    family: "House Greyjoy" 
  },
  { 
    fullName: "Tyrion Lannister", 
    title: "Hand of the Queen", 
    family: "House Lannister" 
  },
  { 
    fullName: "Stannis Baratheon", 
    title: "Lord of Dragonstone", 
    family: "House Baratheon" 
  },
  { 
    fullName: "Margaery Tyrell", 
    title: "Queen of the Seven Kingdoms", 
    family: "House Tyrell"
  },
];

describe('filterFamily', () => {  
  it('Debería filtrar la familia Targaryen', () => { 
    const filteredData = filterFamily("House Targaryen", arrdata); 
    expect(filteredData).toEqual([
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

// Pruebas para funcion ordenar
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

// Pruebas para funcion contar 
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

  it('contar personajes de la familia lannister', () => {
    const data2 = [
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
    const contar1= 4;
    expect(contarPersonajesFamilia(data2,"House Lannister")).toBe(contar1);
  });
});

// Prueba para funcion buscar personaje
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

//Prueba para funcion contar personajes tabla
const tabla = [
  {
    id: 12,
    fullName: "Theon Greyjoy",
    family: "House Greyjoy",
  },

  {
    id: 45,
    fullName: "Yara Greyjoy",
    family: "House Greyjoy",
  },

  {
    id: 46,
    fullName: "Euron Greyjoy",
    family: "House Greyjoy",
  }
]
describe('contarFamilia', () => {
  it('Deberia contar los personajes por familia', () => {
    const contar2 = {"House Greyjoy": 3};
    expect(contarFamilia({ got: tabla }, "House Greyjoy")).toEqual(contar2);
    
  });
});




