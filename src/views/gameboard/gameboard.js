const generate = (disabled) => {
  const board = document.createElement('div');
  board.classList.add('gameboard');

  for (let i = 0; i <= 9; i += 1) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.setAttribute('data-row', i);
    grid.id = `row-${i}`;
    for (let j = 0; j <= 9; j += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-column', j);
      if (disabled) {
        cell.style.pointerEvents = 'none';
      }
      cell.id = `column-${j}`;
      grid.appendChild(cell);
    }
    board.appendChild(grid);
  }

  return board;
};

module.exports = { generate };
