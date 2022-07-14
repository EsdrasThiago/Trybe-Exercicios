let body = document.querySelector('body')
let counter = document.createElement('h3')
let botao = document.querySelector('input')
body.appendChild(counter)

let number = 0;
counter.innerText = number;

botao.addEventListener('click', function(event) {
    event.target = number += 1;
    counter.innerText = number;
    
});

function replace(nome){

    const frase = `Tryber ${nome} aqui!`
    console.log(frase);
}
replace('Esdras')