const shipFactory = (length) => {
    let _hits = [];
    let _length = length;
    let _location = [0,0];
    const hit = (hitLocation) => {
        if(hitLocation.length !== _location.length) return false;
        hitLocation.forEach((coordinate,i) => {
            if(coordinate !== _location[i]) return false;
        });
        _hits.push(hitLocation);
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