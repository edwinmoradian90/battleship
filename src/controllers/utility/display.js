const Gameboard = require('../../views/gameboard/gameboard');
const main = require('../../views/main');
const game = require('../../views/game/game');
const Gameover = require('../../views/gameover/gameover');
const Setup = require('../../views/setup/setup');

const set = (view, identifier, disabled) => {

    let gameboard = Gameboard.generate(disabled);
    let gameover = Gameover.generate(); 
    let setup = Setup.generate();

    const displays = {
        'setup': setup,
        'main': main,
        'game': game,
        'gameboard': gameboard,
        'gameover': gameover
    };

    const element = document.querySelector(identifier);
    element.appendChild(displays[view].cloneNode(true));
};

const clearAll = (identifier) => {
    const element = document.querySelector(identifier);
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    };
};

const update = (ships, misses, identifier, show) => {
    const gameboard = document.querySelector(identifier);
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

const clear = (child) => {
    const domElement = document.querySelector(child);
    domElement.parentNode.removeChild(domElement);
};

const componentSet = (component, disabled, parent) => {
    const gameboard = Gameboard.generate(disabled);
    const components = {
        'gameboard': gameboard
    };

    const domElement = document.querySelector(parent);
    domElement.appendChild(components[component].cloneNode(true));
};
    

module.exports = { set, clear, clearAll, componentSet, update };