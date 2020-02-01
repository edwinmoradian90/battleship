const shipFactory = require('./controllers/ship/ship');

const ship = shipFactory(4);
ship.location = [1,1];
console.log(ship)
