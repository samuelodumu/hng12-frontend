function getRandomHSLcolor() {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 100);
  const l = Math.floor(Math.random() * 100);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

const setColor = getRandomHSLcolor();
document.getElementById('rectangle').style.backgroundColor = setColor;

console.log(getRandomHSLcolor());
