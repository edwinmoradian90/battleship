const gameboard = () => {
    const _ships = [];
    const _misses = [];
    const placeShip = (shipFactory, event) => {
        shipFactory.location = event;
        _ships.push(shipFactory);
    };
    const receiveAttack = (coordinates) => {
       for(let i=0; i<_ships.length; i++) {
            if(!_ships[i].hit(coordinates)) {
                _misses.push(coordinates);
            };
       };
    };
    const allSunk = () => {
        for(let i=0; i<_ships.length; i++) {
            return _ships[i].isSunk();
        };
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