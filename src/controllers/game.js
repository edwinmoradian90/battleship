const Gameboard = require('./gameboard/gameboard');
const Player = require('./player/player');
const Ship = require('./ship/ship');
const display = require('./utility/display');

const game = () => {

    let person = {
        player: '',
        gameboard: '',
    };

    let computer = {
        player: '',
        gameboard: '',
    };
    
    // Game phase
    let state = {
        initial: true,
        setup: false,
        game: false,
        end: false
    };

    const initialize = () => {

        person.player = Player('Person', 'Person', true);
        person.gameboard = Gameboard();

        computer.player = Player('AI','AI', false );
        computer.gameboard = Gameboard();

        computer.gameboard.placeShip(Ship(3), [1,1], 'horizontal', 3);
        computer.gameboard.placeShip(Ship(1), [4,4], 'horizontal', 1);
    };
    // for refactor
    const render = (view, identifier, disabled) => {
        display.clearAll(identifier);
        display.set(view, identifier, disabled);
    };
    // for refactor
    const _checkWinCondition = identifier => {
        if(identifier.gameboard.allSunk()){
            render('gameover', '#content', false);
            display.showWinner(_getWinner());
        };
    };

    const _getWinner = () => {
        const computerTurn = computer.player.turn;
        let winner;
        if(computerTurn) {
            winner = computer;
        };
        
        winner = person.player.name;

        return winner;
    }

    const setState = (object) => {
        Object.assign(state, object);
    };

    const _playerOneMove = (event) => {

        console.log('person turn')
        if(!person.player.moveIsLegal(event)) return;

        const attack = person.player.attack(event)
        computer.gameboard.receiveAttack(attack);
        console.log(event, 'attacking')

        person.player.turn = false;
        computer.player.turn = true;
        console.log(computer.player.turn)

        computer.gameboard.render('gameboard', '.gameboard_one', false, true);
        console.log('not gameover');
    };

    const _playerTwoMove = () => {
        
        computer.gameboard.pause('computer', true, false);
        // Setting Time out to make computer feel more human.
        setTimeout(() => {
            
            console.log('computer turn')

            let computerMove = computer.player.computerMove();
            console.log(person.gameboard.ships)

            while(!computer.player.moveIsLegal(computerMove)) {
                computerMove = computer.player.computerMove();
                console.log('retrying because position taken');
            };

            console.log(computerMove);
            computer.player.attack(computerMove);
            person.gameboard.receiveAttack(computerMove);
            person.gameboard.render('gameboard', '.gameboard_two', true, true);

            computer.player.turn = false;
            person.player.turn = true;

            computer.gameboard.pause('computer', false, false);
            console.log('end turn')

        }, 3000);
            
    };

// board one = computer board
// board two = person board
    const run = (event) => {

        // Person Turn
        if(person.player.turn) {
            _playerOneMove(event);
        };

        _checkWinCondition(computer);

        if(computer.gameboard.allSunk()){
            console.log('gameover', computer.gameboard.allSunk())
            return;
        };

        // Check Turn
        if(computer.player.turn) {
            _playerTwoMove(event);
        };

        _checkWinCondition(person);

    };

    return {
        run,
        render,
        person,
        state,
        setState,
        initialize,
    };
};

module.exports = game;