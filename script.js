const container = document.getElementById('grid-container');
const changeSizeButton = document.querySelector('.change-size');
const clearButton = document.querySelector('.clear');
const fontIcons = document.querySelectorAll('.fas');
const root = document.querySelector(':root');
let size = 16;

container.addEventListener('mouseover', sketch);
changeSizeButton.addEventListener('click', changeGridSize);
clearButton.addEventListener('click', () => createGrid(size, container));

createGrid(size, container);

function createGrid(size, container) {
  container.innerHTML = '';
  for (let i = 1; i <= size * size; i++) {
    let div = document.createElement('div');
    div.id = `grid-item-${i}`;
    div.classList.add('grid-item');
    container.appendChild(div);
  }
  root.style.setProperty('--size', size);
}

function changeGridSize() {
  let newSize;
  do {
    newSize = prompt('Enter an integer between 1 and 100', 16);
    // newSize = (newSize === null) ? size : +newSize;
    if (newSize === null) return;
    newSize = +newSize;
  } while (!Number.isInteger(newSize) || newSize <= 0 || newSize > 100);
  size = newSize;
  createGrid(newSize, container);
}

function getRandomHSL() {
  return `hsla(${Math.floor(Math.random() * 360)}, 100%, 60%, 0.7)`;
}

function sketch(e) {
  let gridItem = e.target;
  let newBackgroundColor = getRandomHSL();
  gridItem.style.backgroundColor = newBackgroundColor;
  fontIcons.forEach(icon => icon.style.color = newBackgroundColor);
}


