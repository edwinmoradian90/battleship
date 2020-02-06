let length = '';
// Refactor
const events = (event, game, Ship) => {
    const item = event.target;
    let ship = '';
    let location = '';

    if(item.matches('.start')) {
        game.setState({setup: true, initial: false});
        game.render('setup', '#content');
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
    };

    if(item.matches('.cell')) {
        location = [
            parseInt(item.dataset.column), 
            parseInt(item.parentNode.dataset.row)
        ];

        if(game.state.setup){
            game.person.gameboard.placeShip(Ship(length), location, 'vertical', length);
            game.person.gameboard.componentRender('gameboard', '.gameboard_container', '.gameboard', false, true);
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