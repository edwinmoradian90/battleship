const display = require('../utility/display');
const arrays = require('../utility/arrays');

const gameboard = () => {
    const _ships = [];
    const _misses = [];

    const selectShip = (event) => {
        let ships = document.querySelectorAll('.ship');
        let ship = document.querySelector(`#${event.target.id}`);
        ships.forEach(ship => ship.style.border = '0px');
        ship.style.border = '3px solid lightseagreen';

        return ship;
    }

    const placeShip = (shipFactory, location, position, length) => {
        const ship = shipFactory;
        ship.location = arrays.rangeGenerator(location, length, position);
        console.log(ship.location)
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
        display.clear(identifier);
        display.set(view, identifier, disable);
        display.update(_ships, _misses, identifier, show);
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