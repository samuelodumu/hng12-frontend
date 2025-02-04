const getRGBColors = [
  'rgb(192, 192, 192)', // Silver
  'rgb(250, 199, 148)', // Peru (lighter)
  'rgb(204, 255, 255)', // Light Cyan
  'rgb(204, 204, 255)', // Light Lavender
  'rgb(255, 204, 255)', // Light Pink
  'rgb(204, 255, 204)', // Light Mint
  'rgb(255, 255, 204)', // Light Yellow
  'rgb(255, 240, 245)', // Light Rose
  'rgb(240, 255, 240)', // Light Green
  'rgb(255, 255, 180)', // Pale Lemon
  'rgb(240, 230, 140)', // Khaki
  'rgb(230, 230, 255)', // Light Periwinkle
  'rgb(255, 218, 185)', // Peach Puff
  'rgb(255, 222, 173)', // Navajo White
  'rgb(255, 182, 193)' // Light Pink (hotter)

  // some other colors
  // 'rgb(255, 0, 0)', // Red
  // 'rgb(0, 255, 0)', // Green
  // 'rgb(0, 0, 255)', // Blue
  // 'rgb(255, 229, 204)', // Light Peach
  // 'rgb(255, 255, 0)', // Yellow
  // 'rgb(0, 255, 255)', // Cyan
  // 'rgb(255, 0, 255)', // Magenta
  // 'rgb(128, 0, 0)', // Maroon
  // 'rgb(0, 128, 0)', // Dark Green
  // 'rgb(0, 0, 128)', // Navy
  // 'rgb(128, 128, 0)', // Olive
  // 'rgb(128, 0, 128)', // Purple
  // 'rgb(0, 128, 128)', // Teal
  // 'rgb(255, 165, 0)', // Orange
  // 'rgb(255, 105, 180)', // Hot Pink
  // 'rgb(0, 0, 0)', // Black
  // 'rgb(255, 255, 255)', // White
  // 'rgb(255, 192, 203)', // Pink
  // 'rgb(75, 0, 130)', // Indigo
  // 'rgb(34, 139, 34)' // Forest Green
];

let lastRandomColor = null;
function getRandomColor() {
  let randomColor;
  do {
    randomColor = getRGBColors[Math.floor(Math.random() * getRGBColors.length)];
  } while (randomColor === lastRandomColor);
  lastRandomColor = randomColor;
  return randomColor;
}

let setColor = getRandomColor();
document.getElementById('rectangle').style.backgroundColor = setColor;

function selectColorOptions(chosenColor) {
  const colorOptions = [chosenColor];
  while (colorOptions.length < 6) {
    let randomColor = getRandomColor();
    if (!colorOptions.includes(randomColor)) {
      colorOptions.push(randomColor);
    }
  }
  return colorOptions;
}

let colorOptions = shuffleArray(selectColorOptions(setColor));

const buttons = document.querySelectorAll('.color-option');
buttons.forEach((button, index) => {
  button.style.backgroundColor = colorOptions[index];
  button.addEventListener('click', getGameStatus);
});

function updateGame() {
  // update rectangle color
  setColor = getRandomColor();
  document.getElementById('rectangle').style.backgroundColor = setColor;
  // update color options
  colorOptions = shuffleArray(selectColorOptions(setColor));
  // console.log('color options: ' + colorOptions);
  colorOptions.forEach((color, index) => {
    buttons[index].style.backgroundColor = color;
  });
  return setColor;
}

function getGameStatus(event) {
  // console.log('button color: ' + event.target.style.backgroundColor);
  const buttonColor = event.target.style.backgroundColor;
  const status =
    buttonColor === setColor ? 'Correct 🎉' : 'Wrong color, start a new game';
  const gameStatus = document.getElementById('game-status')
  gameStatus.innerHTML = status;
  gameStatus.style.color = buttonColor === setColor ? 'green' : '#fc5f71';

  if (buttonColor === setColor) {
    updateScoreCount();
    const scoreCount = document.getElementById('score-count')
    scoreCount.innerHTML = `Score count: ${score}`;
    scoreCount.style.color = 'green';
    updateGame();
  } else {
    score = 0;
    document.getElementById('score-count').innerHTML = `Score count: ${score}`;
  }
}

let score = 0;
function updateScoreCount() {
  score += 1;
  return score;
}

function newGame() {
  document.getElementById('game-status').innerHTML = '';
  document.getElementById('score-count').innerHTML = '';
  updateGame();
}
document.getElementById('reset').addEventListener('click', newGame);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Pick a random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}
