/* eslint-disable no-undef */
const Game = require('./game');

const game = Game();
const Player = require('./player/player');
const Gameboard = require('./gameboard/gameboard');

const players = new Array(2).fill(Player('Something', 'Person', false));
const gameboards = new Array(2).fill(Gameboard());

test('Create players on game start', () => {
  expect(players).toBeTruthy();
});

test('Create gameboards on game start', () => {
  expect(gameboards).toBeTruthy();
});

test('Check if computer board has 5 ships', () => {
  game.initialize();
  expect(game.computer.gameboard.ships.length).toBe(5);
});
