const set = (view, identifier, disabled) => {
    const main = require('../../views/main');
    const Gameboard = require('../../views/gameboard/gameboard');
    const game = require('../../views/game/game');
    const Setup = require('../../views/setup/setup');

    let gameboard = Gameboard.generate(disabled);
    let setup = Setup.generate();

    const displays = {
        'setup': setup,
        'main': main,
        'game': game,
        'gameboard': gameboard
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

const update = (ships, misses, identifier, show) => {
    const gameboard = document.querySelector(identifier);
    console.log(misses)
    for(miss of misses) {
        let [x, y] = miss;
        const row = gameboard.querySelector(`#row-${y}`);
        const column = row.querySelector(`#column-${x}`);
        column.style.background = 'red';
    }

    ships.forEach(ship => {

        const gameboard = document.querySelector(identifier);
        if(ship.location && show) {
            ship.location.forEach((location, i ) =>{
                let [x,y] = location;
                let row = gameboard.querySelector(`#row-${y}`);
                let column = row.querySelector(`#column-${x}`);
                column.style.background = 'lightseagreen';
            });
        };
        ship.hits.forEach(hit => {
            let [x, y] = hit;
            let row = gameboard.querySelector(`#row-${y}`);
            let column = row.querySelector(`#column-${x}`);
            column.style.background = 'green';
        });
    });
    
};



module.exports = { set, clear, update };