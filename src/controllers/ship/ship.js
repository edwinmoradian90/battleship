const arrays = require('../utility/arrays');

const shipFactory = (length) => {
    let _hits = [];
    let _length = length;
    let _location = '';
    const hit = (hitLocation) => {
        if(arrays.match(hitLocation, _location)) { 
            _hits.push(hitLocation);
            return true;
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
        get hits() {
            return _hits;
        }
    };
};

module.exports = shipFactory;