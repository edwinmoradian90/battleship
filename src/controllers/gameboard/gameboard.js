/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
const display = require('../utility/display');
const arrays = require('../utility/arrays');

const gameboard = () => {
  const _ships = [];
  const _misses = [];
  let selectedShip = '';

  const _checkBoundaries = (locations) => {
    let result = false;
    locations.forEach((location) => {
      const [newShipLocationX, newShipLocationY] = location;
      if (newShipLocationX > 9 || newShipLocationY > 9) {
        result = true;
      }
    });

    return result;
  };

  const _checkShipCollision = (locations) => {
    let result = false;
    locations.forEach((location) => {
      const [newShipLocationX, newShipLocationY] = location;
      if (_ships !== []) {
        _ships.forEach((ship) => {
          ship.location.forEach((shipLocation) => {
            const [placedShipLocationX, placedShipLocationY] = shipLocation;
            if (
              placedShipLocationY === newShipLocationY && placedShipLocationX === newShipLocationX
            ) {
              result = true;
            }
          });
        });
      }
    });

    return result;
  };

  const selectShip = (event) => {
    const ships = document.querySelectorAll('.ship');
    selectedShip = document.querySelector(`#${event.target.id}`);
    for (const ship of ships) {
      ship.style.border = '0px';
    }

    selectedShip.style.border = '3px solid lightseagreen';

    return selectedShip;
  };

  const placeShip = (shipFactory, location, position, length) => {
    const ship = shipFactory;

    ship.location = arrays.rangeGenerator(location, length, position);
    if (_checkBoundaries(ship.location)) {
      ship.location = '';
      return false;
    } if (_checkShipCollision(ship.location)) {
      ship.location = '';
      return false;
    }

    selectedShip ? selectedShip.style.display = 'none' : null;
    ship.position = position;
    _ships.push(ship);

    return ship;
  };

  const receiveAttack = (coordinates) => {
    for (ship of _ships) {
      const shipHasNotBeenHit = ship.hit(coordinates);
      if (!shipHasNotBeenHit) {
        _misses.push(coordinates);
      }
    }
  };

  const allSunk = () => {
    for (let i = 0; i < _ships.length; i += 1) {
      if (!_ships[i].isSunk()) return false;
    }
    return true;
  };

  const isReady = (gameBoard) => {
    let result = false;
    result = gameBoard.length === 5;

    return result;
  };

  const render = (view, identifier, disable, show) => {
    display.clearAll(identifier);
    display.set(view, identifier, disable);
    display.update(_ships, _misses, identifier, show);
  };

  // Refactor
  const componentRender = (component, parent, child, disabled, show) => {
    display.clear(parent, child);
    display.componentSet(component, parent, disabled);
    display.update(_ships, _misses, parent, show);
  };

  const pause = (identifier, disabled, show) => {
    identifier === 'computer'
      ? render('gameboard', '.gameboard_one', disabled, show)
      : render('gameboard', '.gameboard_two', disabled, show);
  };

  const togglePosition = (ship) => {
    ship.position = ship.position === 'vertical'
      ? ship.position = 'horizontal'
      : ship.position = 'vertical';

    ship.location = arrays.rangeGenerator(ship.location, ship.length, ship.position);
  };

  return {
    pause,
    isReady,
    selectShip,
    placeShip,
    receiveAttack,
    componentRender,
    togglePosition,
    allSunk,
    render,
    get ships() {
      return _ships;
    },
    get misses() {
      return _misses;
    },
  };
};

module.exports = gameboard;
