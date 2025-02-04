function getRandomHSLcolor() {
  const h = Math.floor(Math.random() * 360);
  const s = 60;
  const l = 50;
  color = `hsl(${h}, ${s}%, ${l}%)`;

  return [color, {h, s, l}];
}

const colorAndObject = getRandomHSLcolor();
document.getElementById('rectangle').style.backgroundColor = colorAndObject[0];

function generateColorOptions(baseColor, variation = 75) {
  const options = [`hsl(${baseColor.h}, ${baseColor.s}%, ${baseColor.l}%)`];

  for (let i = 0; i < 5; i++) {
    let newColor = (baseColor.h + variation * i) % 360;
    if (Math.abs(baseColor.h - newColor <= 20)) {
      newColor += 35 % 360;
    }
    options.push(`hsl(${newColor}, ${baseColor.s}%, ${baseColor.l}%)`);
  }
  return options;
}
const baseColor = colorAndObject;
const colorOptions = generateColorOptions(baseColor[1]);
console.log('color options: ' + colorOptions);

const buttons = document.querySelectorAll('.color-option');
buttons.forEach((button, index) => {
  button.style.backgroundColor = colorOptions[index];
});

function getGameStatus(event) {
  const buttonColor = event.target.style.backgroundColor;
  const status =
    buttonColor === colorAndObject[0] ? 'Correct 🎉' : 'Wrong color, try again';
  document.getElementById('game-status').innerHTML = status;
}

buttons.forEach((button) => {
  button.addEventListener('click', getGameStatus);
});

function updateScoreCount() {
  let score = 0;
  score += 1;
  return score;
}
document.getElementById(
  'score-count'
).innerHTML = `Score count: ${updateScoreCount()}`;

console.log('color from color and object: ' + colorAndObject[0]);

