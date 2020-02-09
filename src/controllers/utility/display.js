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
        column.style.background = 'rgba(255,0,0,.1)';
    };

    ships.forEach(ship => {

        if(ship.location && show) {
            ship.location.forEach((location, i ) => {
                let [x,y] = location;
                let row = gameboard.querySelector(`#row-${y}`);
                let column = row.querySelector(`#column-${x}`);
                column.style.background = 'black';
                column.style.border = '0px';
                column.style.borderLeft = '1px solid rgba(0,125,255,.5)';
                column.style.borderRight = '1px solid rgba(0,125,255,.5)';
                //column.style.boxShadow = '0px 0px 7px 3px rgba(0,125,255,.5)';
            });
        };
        ship.hits.forEach(hit => {
            const gameboard = document.querySelector(identifier);
            let [x, y] = hit;
            let row = gameboard.querySelector(`#row-${y}`);
            let column = row.querySelector(`#column-${x}`);
            column.style.backgroundImage = 'url("https://media.giphy.com/media/1wmdI5Nk5MjD0XIwdy/giphy.gif")' || 'purple';
            column.style.opacity = '1';
            column.style.backgroundSize = 'cover';
            column.style.backgroundPosition = 'center';
            column.style.backgroundRepeat = 'no-repeat';
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
    const { gameboardSetup, positionButtons } = Setup.generate();
    const components = {
        'gameboard': gameboard,
        'gameboardSetup': gameboardSetup,
        'positionButtons' : positionButtons
    };

    const domElement = document.querySelector(parent);
    domElement.appendChild(components[component].cloneNode(true));
};

const enableSubmit = () => {
    const submitButton = document.querySelector('.submit_setup');
    submitButton.style.pointerEvents = 'auto';
    submitButton.style.background = '#008F11';
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

const setShipVertical = () => {
    const vertical = document.querySelector('.vertical_button');
    const horizontal = document.querySelector('.horizontal_button');
    vertical.style.color = 'white';
    horizontal.style.color = 'black';
    return 'vertical';
};

const setShipHorizontal = () => {
    const vertical = document.querySelector('.vertical_button');
    const horizontal = document.querySelector('.horizontal_button');
    vertical.style.color = 'black';
    horizontal.style.color = 'white';
    return 'horizontal';
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
    const startButton = document.querySelector('.submit_setup');
    startButton.innerText = 'Start Game';
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
    setShipVertical,
    setShipHorizontal,
    enableGameboard,
    disableGameboard,
};