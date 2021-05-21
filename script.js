const container = document.getElementById('grid-container');
const changeSizeButton = document.querySelector('button');
const root = document.querySelector(':root');
const size = 16;

changeSizeButton.addEventListener('click', changeSize);

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

function changeSize() {
  let newSize;
  do {
    newSize = +prompt('Enter an integer between 1 and 100', 16);
  } while (!Number.isInteger(newSize) || newSize <= 0 || newSize > 100);
  createGrid(newSize, container);
}


