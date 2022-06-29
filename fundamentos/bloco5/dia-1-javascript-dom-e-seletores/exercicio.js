//1
function futuro(texto) {
document.getElementById('futuro').innerText = texto;
}
futuro("Planejo estar vivendo uma vida tranquila em sp")

//2

function background(cor) {
    let corFundo = document.getElementsByClassName('main-content')[0];
    corFundo.style.background = cor
}

background('rgb(76,164,109)')

//3

function background2(cor) {
    let corQuadrado = document.getElementsByClassName('center-content')[0]
    corQuadrado.style.background = cor
}

background2('white')

//4