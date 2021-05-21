const container = document.getElementById('grid-container');
const changeSizeButton = document.querySelector('button');
const root = document.querySelector(':root');
const size = 16;

container.addEventListener('mouseover', sketch);
changeSizeButton.addEventListener('click', changeGridSize);

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
    newSize = (newSize === null) ? size : +newSize;
  } while (!Number.isInteger(newSize) || newSize <= 0 || newSize > 100);
  createGrid(newSize, container);
}

function sketch(e) {
  console.log(e.target.id);
}


