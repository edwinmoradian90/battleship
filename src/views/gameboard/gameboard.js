const generate = (disabled) => {
    const board = document.createElement('div');
    board.classList.add('gameboard');

    for(let i=0; i<=9; i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.setAttribute('data-row', i);
        grid.id = `row-${i}`;
        for(let i=0; i<=9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-column', i);
            if(disabled) {
                cell.style.pointerEvents = 'none';
            };
            cell.id = `column-${i}`;
            grid.appendChild(cell);
        };
        board.appendChild(grid);
    };

    return board;
};



module.exports = { generate };

