import { filterFamily,} from '../src/data.js';

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
