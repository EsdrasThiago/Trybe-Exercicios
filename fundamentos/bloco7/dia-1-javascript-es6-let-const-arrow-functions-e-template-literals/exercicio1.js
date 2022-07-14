//1

// function testingScope(escopo) {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//       console.log(elseScope);
//     }
//   }

//   testingScope(false);

//2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

function order() {
    
    let ordered = oddsAndEvens.sort((a,b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    return ordered
}

console.log(`Os números ${order()} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉