const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  // #1

// function authorBornIn1947(ano) {
//   // escreva aqui o seu código
//   return ano.author.birthYear === 1947;
// }
//   console.log(books.find(authorBornIn1947));

  // #2 (ou #5)

//   const expectedResult = false;

// function everyoneWasBornOnSecXX(sec) {
//   return sec.author.birthYear > 1901
// }
//   console.log(books.every(everyoneWasBornOnSecXX));

  // #3 (ou #6)

//   const expectedResult = true;

function someBookWasReleaseOnThe80s(sec) {
    // escreva seu código aqui
    return sec.releaseYear > 1979 && sec.releaseYear < 1990
}

console.log(books.some(someBookWasReleaseOnThe80s));