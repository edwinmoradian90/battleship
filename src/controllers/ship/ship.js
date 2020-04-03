/* eslint-disable no-underscore-dangle */
const arrays = require('../utility/arrays');

const fire = document.createElement('audio');
fire.src = '../src/assets/sounds/fire.mp3';

const shipFactory = (length) => {
  const _hits = [];
  let _length = length;
  let _position = '';
  let _location = '';

  const hit = (hitLocation) => {
    let result = false;
    _location.forEach((location) => {
      if (arrays.match(hitLocation, location)) {
        _hits.push(hitLocation);
        // possible refactor
        setTimeout(() => {
          fire.currentTime = 0;
          fire.play();
        }, 200);

        result = true;
      }
    });
    return result;
  };

  const rotateShip = () => {
    _position = _position === 'vertical'
      ? 'horizontal'
      : 'vertical';
  };

  const isSunk = () => _length === _hits.length;

  return {
    hit,
    isSunk,
    rotateShip,
    get length() {
      return _length;
    },
    set length(shipLength) {
      _length = shipLength;
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
