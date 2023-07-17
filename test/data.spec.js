import { filterFamily, sortAz, contarPersonajes, buscarPersonajes, contarFamilia } from '../src/data.js';

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
    fullName: "Margaery Tyrell",
    title: "Queen of the Seven Kingdoms",
    family: "House Tyrell"
  },
];

describe('filterFamily', () => {
  it('Debería filtrar la familia Targaryen', () => {
    const filteredData = filterFamily("House Targaryen", arrdata);
    expect(filteredData).toEqual([
      { fullName: "Daenerys Targaryen", title: "Mother of Dragons", family: "House Targaryen" },
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
    const result1 = [
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
    expect(sortAz(data, "AZ")).toEqual(result1);
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
    expect(sortAz(data, "ZA")).toEqual(result2);
  });


  it('return array vacio', () => {
    expect(sortAz(data, "")).toEqual(false)

  });
});

// Pruebas para funcion contar 
describe('contarPersonajes', () => {
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
    expect(typeof contarPersonajes).toBe('function');
  });

  it('contar personajes', () => {
    const contar1 = 3;
    expect(contarPersonajes(data)).toBe(contar1);
  });

  it('contar personajes', () => {
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
      },
      {
        id: 2,
        firstName: "Jon",
        lastName: "Snow",
        family: "House Stark",
      },
    ];
    const contar1 = 5;
    expect(contarPersonajes(data2)).toBe(contar1);
  });

  it('return 0 cuando se pasa un array vacio', () => {
    const data2 = []
    expect(contarPersonajes(data2)).toEqual(0)
  });

});

// Prueba para funcion buscar personaje
const data = [
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

  it('return array vacio', () => {
    const arrdata = [];
    expect(buscarPersonajes("joya", arrdata)).toEqual([]);
  });

});

//Prueba para funcion contar personajes tabla
describe('contarFamilia', () => {
  it('Debería contar las familias', () => {
    const tabla = {
      got: [
        { family: 'Stark' },
        { family: 'Lannister' },
        { family: 'Stark' },
        { family: 'Targaryen' },
        { family: 'Lannister' }
      ]
    };
    const result = {
      Stark: 2,
      Lannister: 2,
      Targaryen: 1
    };
    expect(contarFamilia(tabla)).toEqual(result);
  });

  it('return objeto vacio', () => {
    const tabla = {
      got: []
    };

    const result = contarFamilia(tabla);
    expect(result).toEqual({});

  });
});

