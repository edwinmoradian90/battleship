const display = require('../utility/display');

const gameboard = () => {
    const _ships = [];
    const _misses = [];
    const placeShip = (shipFactory, location) => {
        const ship = shipFactory;
        ship.location = location;
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

    const render = (view, identifier, disable) => {
        display.clear(identifier);
        display.set(view, identifier, disable);
        display.update(_ships, _misses, identifier);
    };

    const pause = (identifier, enabled) => {
        identifier == 'computer'
            ? render('gameboard', '.gameboard_one', enabled)
            : render('gameboard', '.gameboard_two', enabled);
    };

    return {
        pause,
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