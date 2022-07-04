let pixelBoard = document.getElementById("pixel-board");
let criaDiv = document.createElement("div");


function linhas(n) {
    for (let i = 1; i <= n; i += 1) {
            let criaDiv = document.createElement("div");
            criaDiv.className = 'pixel';
        pixelBoard.appendChild(criaDiv);   
    }
}

function criaPixels(n) {
    for (let i = 1; i <= n; i += 1){
        linhas(n);
    }
}
criaPixels(5);