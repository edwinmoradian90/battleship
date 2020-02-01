const shipFactory = require('./ship');

test('Ship object working', () => {
    const ship = shipFactory(1);
    ship.location = [1,1];
    ship.hit([1,1]);
    expect(ship.length).toBe(1);
    expect(ship.hits).toEqual([[1,1]]);
    expect(ship.isSunk()).toBe(true);
});