const Game = require('./controllers/game');
const ship = require('./controllers/ship/ship');
const events = require('./controllers/events/events');

const game = Game();

game.initialize();
game.render('main', '#content');

document.addEventListener('click', (event) => events(event, game, ship));
