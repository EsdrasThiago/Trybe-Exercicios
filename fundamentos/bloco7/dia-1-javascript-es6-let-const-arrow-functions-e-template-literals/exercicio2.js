let body = document.querySelector('body')
let counter = document.createElement('p')
let botao = document.querySelector('input')
body.appendChild(counter)

let number = 0;
counter.innerText = number;

botao.addEventListener('click', function(event) {
    event.target = number += 1;
    counter.innerText = number;
    
});

