const display = require('../utility/display');
const arrays = require('../utility/arrays');

const gameboard = () => {
    const _ships = [];
    const _misses = [];
    const _placed = [];
    let selectedShip = '';

    const selectShip = (event) => {
        let ships = document.querySelectorAll('.ship');
        selectedShip = document.querySelector(`#${event.target.id}`);
        for(let ship of ships) {
            ship.style.border = '0px';
        };
        selectedShip.style.border = '3px solid lightseagreen';

        return selectedShip;
    };

    const placeShip = (shipFactory, location, position, length) => {
        if(selectedShip) {
            selectedShip.style.display = 'none';
        };

        const ship = shipFactory;
        ship.location = arrays.rangeGenerator(location, length, position);
        ship.position = position;
        _ships.push(ship);
    };

    const receiveAttack = (coordinates) => {
       for(let i=0; i<_ships.length; i++) {
            if(!_ships[i].hit(coordinates)) {
                _misses.push(coordinates);
                console.log('attack missed');
            };
       };
    };

    const allSunk = () => {
        for(let i=0; i<_ships.length; i++) {
            if(!_ships[i].isSunk()) return false;
        };
        return true;
    };

    const render = (view, identifier, disable, show) => {
        display.clearAll(identifier);
        display.set(view, identifier, disable);
        display.update(_ships, _misses, identifier, show);
    };

    // Refactor
    const componentRender = (component, parent, child, disabled, show) => {
        display.clear(child);
        display.componentSet(component, disabled, parent);
        display.update(_ships, _misses, parent, show);
    };

    const pause = (identifier, disabled, show) => {
        identifier == 'computer'
            ? render('gameboard', '.gameboard_one', disabled, show)
            : render('gameboard', '.gameboard_two', disabled, show);
    };

    return {
        pause,
        selectShip,
        placeShip,
        receiveAttack,
        componentRender,
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