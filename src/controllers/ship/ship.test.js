/* eslint-disable no-undef */
const shipFactory = require('./ship');

const ship = shipFactory(1);

test('Ship object exists', () => {
  expect(ship).not.toBe(null);
});

test('Hit stores hit location', () => {
  ship.location = [[1, 1]];
  ship.hit([1, 1]);
  expect(ship.hits).toEqual([[1, 1]]);
});

test('Ship has length', () => {
  expect(ship.length).toBe(1);
});

test('isSunk is true after entire ship is hit', () => {
  expect(ship.isSunk()).toBe(true);
});
