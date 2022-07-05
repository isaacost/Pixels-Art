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

const corUm = document.querySelector('.cor1');
const corDois = document.querySelector('.cor2');
const corTres = document.querySelector('.cor3');
const corQuatro = document.querySelector('.cor4');

function adicionandoSelected(event) {
  const classeSelected = document.querySelector('.selected');
  classeSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

corUm.addEventListener('click', adicionandoSelected);
corDois.addEventListener('click', adicionandoSelected);
corTres.addEventListener('click', adicionandoSelected);
corQuatro.addEventListener('click', adicionandoSelected);

let corSelecionada = 'cor1';
const pegaPixel = document.querySelectorAll('.pixel');
function mudaCor() {
  corUm.addEventListener('click', function () {
    corSelecionada = 'cor1';
  });
  corDois.addEventListener('click', function () {
    corSelecionada = 'cor2';
  });
  corTres.addEventListener('click', function () {
    corSelecionada = 'cor3';
  });
  corQuatro.addEventListener('click', function () {
    corSelecionada = 'cor4';
  });

  for (let i = 0; i < pegaPixel.length; i += 1) {
    pegaPixel[i].addEventListener('click', function () {
      pegaPixel[i].className = 'pixel ' + corSelecionada;
    });
  }
}

mudaCor();

const pegaBotao = document.getElementById('clear-board');
function limpar() {
  for (let i = 0; i < pegaPixel.length; i += 1) {
    pegaPixel[i].className = 'pixel';
  }
}

pegaBotao.addEventListener('click', limpar);
