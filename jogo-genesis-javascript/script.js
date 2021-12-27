let order = [];
let clickedOrder = [];
let score = 0;

// 0 = green, 1 = red, 2 = yellow, 3 = blue

//RSELECIONA AS CLASSES DOS BOTÕES
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//CRIA ORDEM ALEATÓRIA DE CORES 
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

// ACENDE A PRÓXIMA COR
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  });
}

//CHECA SE OS BOTÕES CLICADOS SÃO OS MESMOS DA ORDEM GERADA NO JOGO
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  }
}

//CLIQUE DO USUÁRIO 
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
}

//RETORNAR A COR
let createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
}

//PRÓXIMO NÍVEL DE JOGO
let nextLevel = () => {
  score++;
  shuffleOrder();
}

//PERDE O JOGO
let gameOver = () => {
  alert(`Pontuação: ${score}\nVocê perdeu!\nClique em ok para iniciar novo jogo!`);
  order = [];
  clickedOrder = [];

  playGame();
}

//INICIA O JOGO
let playGame = () => {
  alert(`Bem vindo ao jogo!\nVocê tem 5 segundos para acertar a sequência de cores.\nClique em ok para iniciar!`);
  score = 0;

  nextLevel();
}

//ADICIONA O EVENTO DE CLIQUE
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//INICIA O JOGO
playGame();