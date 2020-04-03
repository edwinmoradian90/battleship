const gameboard = require('../gameboard/gameboard');

const generate = () => {
  const setupContainer = document.createElement('div');
  setupContainer.classList.add('setup_container');

  const shipDrawerContainer = document.createElement('div');
  shipDrawerContainer.classList.add('ship_drawer_container');

  const shipDrawer = document.createElement('div');
  shipDrawer.classList.add('ship_drawer');

  const shipTitle = document.createElement('span');
  shipTitle.classList.add('ship_title');
  shipTitle.innerText = 'Ships';

  shipDrawerContainer.appendChild(shipTitle);

  for (let i = 0; i < 5; i += 1) {
    const ship = document.createElement('div');
    ship.classList.add('ship');
    ship.id = `ship-${i}`;
    ship.setAttribute('data-ship', i);
    shipDrawer.appendChild(ship);
  }

  shipDrawer.children[0].setAttribute('data-length', '2');
  shipDrawer.children[0].setAttribute('data-name', 'Destroyer');
  shipDrawer.children[1].setAttribute('data-length', '3');
  shipDrawer.children[1].setAttribute('data-name', 'Submarine');
  shipDrawer.children[2].setAttribute('data-length', '3');
  shipDrawer.children[2].setAttribute('data-name', 'Cruiser');
  shipDrawer.children[3].setAttribute('data-length', '4');
  shipDrawer.children[3].setAttribute('data-name', 'Battleship');
  shipDrawer.children[4].setAttribute('data-length', '5');
  shipDrawer.children[4].setAttribute('data-name', 'Carrier');

  const gameboardContainer = document.createElement('div');
  gameboardContainer.classList.add('gameboard_container');

  const submitSetup = document.createElement('div');
  submitSetup.classList.add('submit_setup');
  submitSetup.innerText = 'Place Your Ships';

  const positionButtonsContainer = document.createElement('div');
  positionButtonsContainer.classList.add('position_buttons_container');

  const horizontalButton = document.createElement('div');
  horizontalButton.classList.add('horizontal_button');
  horizontalButton.innerText = 'horizontal';

  const verticalButton = document.createElement('div');
  verticalButton.classList.add('vertical_button');
  verticalButton.innerText = 'vertical';

  const setupBoard = gameboard.generate();

  positionButtonsContainer.appendChild(horizontalButton);
  positionButtonsContainer.appendChild(verticalButton);
  gameboardContainer.appendChild(setupBoard);
  gameboardContainer.appendChild(submitSetup);
  shipDrawerContainer.appendChild(shipDrawer);
  shipDrawerContainer.appendChild(positionButtonsContainer);
  setupContainer.appendChild(shipDrawerContainer);
  setupContainer.appendChild(gameboardContainer);

  return {
    setup: setupContainer,
    gameboardSetup: gameboardContainer,
    positionButtons: positionButtonsContainer,
  };
};

module.exports = { generate };
