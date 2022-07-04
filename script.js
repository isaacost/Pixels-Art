//Requisito 4: cria uma grade nxn

const pixelBoard = document.getElementById('pixel-board');
function linhas(n) {
    for (let i = 1; i <= n; i += 1) {
        const criaDiv = document.createElement('div');
        criaDiv.className = 'pixel';
        pixelBoard.appendChild(criaDiv);
    }
}

function criaPixels(n) {
    for (let i = 1; i <= n; i += 1) {
        linhas(n);
    }
}
criaPixels(5);

//Requisito 7: captura uma cor adicionando a classe selected
const corUm = document.querySelector('.cor1');
const corDois = document.querySelector('.cor2');
const corTres = document.querySelector('.cor3');
const corQuatro = document.querySelector('.cor4');

function adicionandoSelected(event) {
    const classeSelected = document.querySelector('.selected');
    classeSelected.classList.remove('selected');
    event.target.classList.add('selected');
    input.value = '';
}

corUm.addEventListener('click', adicionandoSelected);
corDois.addEventListener('click', adicionandoSelected);
corTres.addEventListener('click', adicionandoSelected);
corQuatro.addEventListener('click', adicionandoSelected);