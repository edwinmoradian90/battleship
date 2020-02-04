const set = (view, identifier, disabled) => {
    const main = require('../../views/main');
    const gameboard = require('../../views/gameboard/gameboard');
    const game = require('../../views/game/game');
    let board = gameboard.generate(disabled);
    console.log(board)
    const displays = {
        'main': main,
        'game': game,
        'gameboard': board
    };
    const element = document.querySelector(identifier);
    console.log(element)
    element.appendChild(displays[view].cloneNode(true));
};

const clear = (identifier) => {
    const element = document.querySelector(identifier);
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    };
};

const update = (ships, misses, identifier) => {
    const gameboard = document.querySelector(identifier);
    for(miss of misses) {
        let [x, y] = miss;
        const row = gameboard.querySelector(`#row-${y}`);
        const column = row.querySelector(`#column-${x}`);
        column.style.background = 'red';
    }

    ships.forEach(ship => {
        const gameboard = document.querySelector(identifier)
        ship.hits.forEach(hit => {
            let [x, y] = hit;
            const row = gameboard.querySelector(`#row-${y}`);
            const column = row.querySelector(`#column-${x}`);
            column.style.background = 'green';
        });
    });
    
};



module.exports = { set, clear, update };