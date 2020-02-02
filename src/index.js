const Game = require('./controllers/game');
const Display = require('./controllers/utility/display');
const events = require('./controllers/events/events');
const game = Game();
const display = Display();

display.set('gameboard', '#content');
game.initialize();

document.addEventListener('click', () => events(event, game));