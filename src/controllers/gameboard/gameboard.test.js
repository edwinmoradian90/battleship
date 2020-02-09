const gameboardFactory = require('./gameboard');
const shipFactory = require('../ship/ship');
const gameboard = gameboardFactory();
const ship = shipFactory(1);
const ships = gameboard.ships;

test('gameboard factory exists', () => {
    expect(gameboard).not.toBeNull();
});

test('gameboard placement of ships', () => {
    gameboard.placeShip(ship, [1,1], 'horizontal', 1);
    expect(ships[0].location).toEqual([[1,1]]);
});

test('receives attack, check for hit', () => {
    gameboard.receiveAttack([1,1]);
    expect(ship.hits).toEqual([[1,1]]);
});

test('receives attack, check for miss', () => {
    gameboard.receiveAttack([8,8]);
    console.log(gameboard.misses)
    expect(gameboard.misses).toEqual([[8,8]]);
});

test('checks if all ships sunk', () => {
    expect(gameboard.allSunk()).toBe(true);
});
