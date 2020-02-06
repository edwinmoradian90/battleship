const gameboard = require('../gameboard/gameboard');

const generate = () => {
    const setupContainer = document.createElement('div');
    setupContainer.classList.add('setup_container');

    const shipDrawer = document.createElement('div');
    shipDrawer.classList.add('ship_drawer');

    const shipTitle = document.createElement('span');
    shipTitle.classList.add('ship_title');
    shipTitle.innerText = 'Ships';

    shipDrawer.appendChild(shipTitle);

    for(let i=0; i < 5; i++) {
        const ship = document.createElement('div');
        ship.classList.add('ship');
        ship.id = `ship-${i}`;
        ship.setAttribute('data-ship', i);
        shipDrawer.appendChild(ship);
    };

   shipDrawer.children[1].setAttribute('data-length','2');
   shipDrawer.children[2].setAttribute('data-length','3');
   shipDrawer.children[3].setAttribute('data-length','3');
   shipDrawer.children[4].setAttribute('data-length','4');
   shipDrawer.children[5].setAttribute('data-length','5');

    const gameboardContainer = document.createElement('div');
    gameboardContainer.classList.add('gameboard_container');
    
    const submitSetup = document.createElement('div');
    submitSetup.classList.add('submit_setup');
    submitSetup.innerText = 'Start Game';

    const setupBoard = gameboard.generate();

    gameboardContainer.appendChild(setupBoard);
    gameboardContainer.appendChild(submitSetup);
    setupContainer.appendChild(shipDrawer);
    setupContainer.appendChild(gameboardContainer);

    return setupContainer;
};

module.exports = { generate };