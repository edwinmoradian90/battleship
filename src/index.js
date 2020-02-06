const Game = require('./controllers/game');
const ship = require('./controllers/ship/ship');
const display = require('./controllers/utility/display');
const events = require('./controllers/events/events');
const game = Game();

game.initialize();
game.render('main', '#content');

document.addEventListener('click', () => events(event, game, ship));