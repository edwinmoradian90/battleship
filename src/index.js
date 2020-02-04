const Game = require('./controllers/game');
const display = require('./controllers/utility/display');
const events = require('./controllers/events/events');
const game = Game();

game.initialize();
display.set('main', '#content');

document.addEventListener('click', () => events(event, game, display));