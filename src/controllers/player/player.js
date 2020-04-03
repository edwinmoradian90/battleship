/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
const arrays = require('../utility/arrays');

const Player = (name, type, turn = false) => {
  let _name = name;
  let _turn = turn;
  let _type = type;
  const _moves = [];

  const swapTurns = () => {
    _turn = _turn !== true;
  };

  const moveIsLegal = (move) => {
    for (array of _moves) {
      if (arrays.match(move, array)) {
        return false;
      }
    }
    return true;
  };

  const computerMove = () => [arrays.rng(), arrays.rng()];

  const attack = (selected) => {
    let move;
    switch (_type) {
      case 'Person':
        _moves.push(selected);
        move = selected;
        break;
      case 'AI':
        _moves.push(computerMove);
        move = computerMove;
        break;
      default:
        break;
    }
    return move;
  };

  return {
    attack,
    moveIsLegal,
    computerMove,
    swapTurns,
    get name() {
      return _name;
    },
    set name(userName) {
      _name = userName;
    },
    get type() {
      return _type;
    },
    set type(userType) {
      _type = userType;
    },
    get turn() {
      return _turn;
    },
    set turn(playerTurn) {
      _turn = playerTurn;
    },
  };
};

module.exports = Player;
