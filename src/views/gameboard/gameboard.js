const container = document.createElement('div');
container.classList.add('container');

const gameboard = document.createElement('div');
gameboard.classList.add('gameboard');

for(let i=0; i<=9; i++){
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.id = i;
    for(let i=0; i<=9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = i;
        grid.appendChild(cell);
    };
    gameboard.appendChild(grid);
};
container.appendChild(gameboard);

module.exports = container;

