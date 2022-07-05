const pixelBoard = document.getElementById('pixel-board')
function criaBoard(n) {
  for (let i = 1; i <= n; i++) {
    const linhas = document.createElement('div');
    linhas.className = 'linhas';
    pixelBoard.appendChild(linhas);
    for (let j = 1; j <= n; j++) {
      const colunas = document.createElement('div');
      colunas.classList.add('pixel');
      linhas.appendChild(colunas);
    }

  }
}

criaBoard(5)

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
function mudaCor() {
  const pegaPixel = document.querySelectorAll('.pixel');
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
  const pegaPixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pegaPixel.length; i += 1) {
    pegaPixel[i].className = 'pixel';
  }
}

pegaBotao.addEventListener('click', limpar);

function escolheTamanho() {
  const pixelBoard = document.getElementById('pixel-board');
  const geraBoard = document.getElementById('generate-board');
  const inputNumber = document.getElementById('board-size');

  geraBoard.addEventListener('click', function () {
    const valorAtual = inputNumber.value;

    if (valorAtual <= 0) {
      return alert('Board inválido!');
    }
    if (valorAtual < 5) {
      pixelBoard.innerHTML = '';
      criaBoard(5);
      mudaCor();
      return;

    }
    if (valorAtual > 50) {
      pixelBoard.innerHTML = '';
      criaBoard(50);
      mudaCor();
      return alert('Board inválido');
    }

    pixelBoard.innerHTML = '';
    criaBoard(valorAtual);
    mudaCor();
  });
}

escolheTamanho();

const corAleatoria = document.getElementById('cor-random');
window.addEventListener('load', function () {
  const corDois = document.querySelector('.cor2');
  const corTres = document.querySelector('.cor3');
  const corQuatro = document.querySelector('.cor4');
  const numerosDasCores = [];

  for (let i = 0; i < 9; i += 1) {
    numerosDasCores.push(Math.floor(Math.random() * 256));
  }
  corDois.style.backgroundColor = 'rgb(' + numerosDasCores[0] + ', ' + numerosDasCores[1]
    + ', ' + numerosDasCores[2] + ')';
  corTres.style.backgroundColor = 'rgb(' + numerosDasCores[3] + ', ' + numerosDasCores[4]
    + ', ' + numerosDasCores[5] + ')';
  corQuatro.style.backgroundColor = 'rgb(' + numerosDasCores[6] + ', ' + numerosDasCores[7]
    + ', ' + numerosDasCores[8] + ')';
  return numerosDasCores;
});