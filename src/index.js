const shipFactory = require('./controllers/ship/ship');
const arrays = require('./controllers/utility/arrays');

console.log(arrays.rng(1,9))
const ship = shipFactory(4);
ship.location = [1,1];
console.log(ship)
