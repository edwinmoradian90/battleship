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

    return {
        placeShip,
        receiveAttack,
        allSunk,
        get ships() {
            return _ships;
        }, 
        get misses() {
            return _misses;
        },
    };
};

module.exports = gameboard;