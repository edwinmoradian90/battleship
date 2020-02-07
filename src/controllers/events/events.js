const arrays = require('../utility/arrays');
const display = require('../utility/display');
let length = '';
let ship = '';
// Refactor
const events = (event, game, Ship) => {
    const item = event.target;
    let location = '';

    if(item.matches('.start')) {
        const input = document.querySelector('.input');
        game.setState({setup: true, initial: false});
        game.person.player.name = input.value || 'anonomyus';
        console.log(game.person.player.name)
        game.render('setup', '#content');
        display.disableGameboard();
    } else

    if(item.matches('.submit_setup')){
        game.setState({setup: false, game: true});
        game.render('game', '#content');
        game.person.gameboard.render(

            'gameboard', 
            '.gameboard_two', 
            true, 
            true

            );
    } else

    if(item.matches('.ship')) {
        length = parseInt(event.target.dataset.length);
        ship = game.person.gameboard.selectShip(event);
        display.enableGameboard();
        display.showShipName(ship);
    };

    if(item.matches('.cell')) {
        location = [
            parseInt(item.dataset.column), 
            parseInt(item.parentNode.dataset.row)
        ];
        if(game.state.setup && ship) {
            game.person.gameboard.placeShip(Ship(length), location, 'vertical', length);
            game.person.gameboard.componentRender('gameboardSetup', '.setup_container', '.gameboard_container', false, true);
            ship.style.display = 'none';
            location = '';
            game.person.gameboard.ships.length == 5 
                ? (display.enableSubmit(), display.showBoardReady())
                : null;
            display.disableGameboard();
        } else
        if(game.state.game) {
            game.run(location);
        };

    };

    if(item.matches('.reset_button')) {
        game.initialize();
        game.setState({setup: true, initial: false});
        game.render('setup', '#content');

    };

    if(item.matches('.end_game_button')) {
        game.initialize();
        game.setState({initial: true, setup: false, game: false})
        game.render('main', '#content');
    };


};

module.exports = events;