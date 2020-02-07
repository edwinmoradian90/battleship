const Gameboard = require('../../views/gameboard/gameboard');
const main = require('../../views/main');
const game = require('../../views/game/game');
const Gameover = require('../../views/gameover/gameover');
const Setup = require('../../views/setup/setup');

const set = (view, identifier, disabled) => {

    let gameboard = Gameboard.generate(disabled);
    let gameover = Gameover.generate(); 
    let { setup } = Setup.generate();

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
    console.log(element)
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
                column.style.borderBottom = '0px';
                column.style.borderTop = '0px';
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

const clear = (parent, child) => {
    const domElement = document.querySelector(parent);
    const elementChild = document.querySelector(child);
    domElement.removeChild(elementChild);
};

const componentSet = (component, parent, disabled) => {
    const gameboard = Gameboard.generate(disabled);
    const { gameboardSetup } = Setup.generate();
    const components = {
        'gameboard': gameboard,
        'gameboardSetup': gameboardSetup
    };

    const domElement = document.querySelector(parent);
    domElement.appendChild(components[component].cloneNode(true));
};

const enableSubmit = () => {
    const submitButton = document.querySelector('.submit_setup');
    submitButton.style.pointerEvents = 'auto';
    submitButton.style.background = 'lightseagreen';
    submitButton.classList.add('hover_button');
};

const disableGameboard = (gameboard) => {
    let cells;
    if(gameboard) {
        const board = document.querySelector(gameboard);
        cells = board.querySelector('.cell');  
    } else {
        cells = document.querySelectorAll('.cell');
    };

    cells.forEach(cell => cell.style.pointerEvents = 'none');
};

const enableGameboard = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.pointerEvents = 'auto');
};

const showShipName = (ship) => {
    const title = document.querySelector('.ship_title');
    title.innerText = ship.dataset.name;
};

const showBoardReady = () => {
    const title = document.querySelector('.ship_title');
    title.innerText = 'Ships are set!'
}

const showWinner = (playerName) => {
    const winner = document.querySelector('.winner');

    winner.innerText = `Good work, ${playerName}, you got 'em.`;
};
    

module.exports = { 
    set, 
    clear, 
    update,
    clearAll, 
    showWinner,
    showShipName,
    componentSet,
    enableSubmit, 
    showBoardReady,
    enableGameboard,
    disableGameboard,
};