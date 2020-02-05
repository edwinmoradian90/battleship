const arrays = require('../utility/arrays');

const shipFactory = (length) => {
    let _hits = [];
    let _length = length;
    let _position = '';
    let _location = '';

    const hit = (hitLocation) => {
        for(let location of _location) {
            if(arrays.match(hitLocation, location)) { 
                _hits.push(hitLocation);
                console.log('Your ship has been hit, you idiot');
                return true;
            }; 
        };
        
        return false;
    };
    const isSunk = () => {
       return _length == _hits.length;
    };

    return {
        hit,
        isSunk,
        get length() {
            return _length;
        },
        set length(length) {
            _length = length;
        }, 
        get location() {
            return _location;
        },
        set location(coordinates) {
            _location = coordinates;
        },
        get position() {
            return _position;
        },
        set position(position) {
            _position = position;
        },
        get hits() {
            return _hits;
        },
    };
};

module.exports = shipFactory;