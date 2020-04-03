const gameboard = require('../gameboard/gameboard');

const gameboardOne = document.createElement('div');
gameboardOne.classList.add('gameboard_one');

const gameboardTwo = document.createElement('div');
gameboardTwo.classList.add('gameboard_two');

const game = document.createElement('div');
game.classList.add('game');

gameboardOne.appendChild(gameboard.generate());
gameboardTwo.appendChild(gameboard.generate(true).cloneNode(true));
game.appendChild(gameboardOne);
game.appendChild(gameboardTwo);

module.exports = game;
