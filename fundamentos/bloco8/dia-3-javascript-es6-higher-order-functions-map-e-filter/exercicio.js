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

  //#1

//   function formatedBookNames(nomes) {
//     // escreva seu código aqui
//     return nomes.map((nome) => `${nome.name}, ${nome.genre}, ${nome.author.name}` )
//   }
//   console.log(formatedBookNames(books));

  //#2

  // function nameAndAge(idades) {
  //   // escreva seu código aqui
  //   const age = idades.map((idade) => `age: ${idade.releaseYear - idade.author.birthYear}, author: ${idade.author.name}`);
  //   return age.sort()
  // }
  // console.log(nameAndAge(books));

  //3

  // function fantasyOrScienceFiction(genre) {
  //   // escreva seu código aqui
  //   return genre.filter((genero) => (genero.genre === 'Fantasia' | genero.genre === 'Ficção Científica'))
  // }
  // console.log(fantasyOrScienceFiction(books));

  //4 

  function oldBooksOrdered(anos) {
    // escreva seu código aqui
    const antigo = anos.filter((velho) => (2022 - velho.releaseYear > 60))
    return antigo.sort((a,b) => a.releaseYear - b.releaseYear)
  }

  console.log(oldBooksOrdered(books));