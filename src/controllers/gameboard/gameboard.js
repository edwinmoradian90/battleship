const display = require('../utility/display');
const arrays = require('../utility/arrays');
const wrong = document.createElement('audio');
wrong.src = '../src/assets/sounds/wrong.mp3';

const gameboard = () => {
    const _ships = [];
    const _misses = [];
    let selectedShip = '';

    const _checkBoundaries = location => {
        let result = false;
        location.forEach((location, i) => {
            let [newShipLocationX, newShipLocationY] = location;
            if(newShipLocationX > 9 || newShipLocationY > 9){
                console.log('bigger')
                wrong.currentTime = 0;
                wrong.play();
                result = true;
            };
        });

        return result;
    };

    const _checkShipCollision = location => {
        let result = false;
        location.forEach(location => {
            let [newShipLocationX, newShipLocationY] = location;
            if(_ships !== []) {
                _ships.forEach(ship => {
                    ship.location.forEach(shipLocation => {
                        let [placedShipLocationX, placedShipLocationY] = shipLocation;
                        if(placedShipLocationY == newShipLocationY && placedShipLocationX == newShipLocationX) {
                        console.log(placedShipLocationY, newShipLocationY)
                            wrong.currentTime = 0;
                            wrong.play();
                            result = true;
                        };
                    });
                });
            };
        });

        return result;
    };

    const selectShip = event => {
        let ships = document.querySelectorAll('.ship');
        selectedShip = document.querySelector(`#${event.target.id}`);
        for(let ship of ships) {
            ship.style.border = '0px';
        };

        selectedShip.style.border = '3px solid lightseagreen';

        return selectedShip;
    };

    const placeShip = (shipFactory, location, position, length) => {

        const ship = shipFactory;

        ship.location = arrays.rangeGenerator(location, length, position);
        if(_checkBoundaries(ship.location)) {
            ship.location = '';
            return false;
        } else
        
        if(_checkShipCollision(ship.location)) {
            console.log('ships crashing')
            ship.location = '';
            return false;
        }
        
        else {
            selectedShip ? selectedShip.style.display = 'none' : null;
            ship.position = position;
            _ships.push(ship);
        };

        return ship;
    };

    const receiveAttack = coordinates => {
        for(ship of _ships) {
            let shipHasNotBeenHit = ship.hit(coordinates);
            console.log(coordinates)
            if(!shipHasNotBeenHit) {
                _misses.push(coordinates);
                console.log(coordinates)
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

    const isReady = gameboard => {
        let result = false;
        result = gameboard.length == 5 ? true : false;

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
        identifier == 'computer'
            ? render('gameboard', '.gameboard_one', disabled, show)
            : render('gameboard', '.gameboard_two', disabled, show);
    };

    const togglePosition = ship => {
        ship.position = ship.position == 'vertical' 
            ? ship.position = 'horizontal'
            : ship.position = 'vertical';

        ship.location = arrays.rangeGenerator(ship.location, ship.length, ship.position);
    }

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