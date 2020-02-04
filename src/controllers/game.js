const Gameboard = require('./gameboard/gameboard');
const Player = require('./player/player');
const Ship = require('./ship/ship');
const display = require('./utility/display');

const game = () => {
    let person;
    let computer;

    const initialize = () => {
        person = { 
            player: Player('Person', 'Person', true),
            gameboard: Gameboard(),
        };

        computer = {
            player: Player('AI', 'AI', false),
            gameboard: Gameboard(),
        };

        person.gameboard.placeShip(Ship(1), [1,1]);
        computer.gameboard.placeShip(Ship(1), [1,1]);
        computer.gameboard.placeShip(Ship(1), [2,2]);
    };

    const render = (view, identifier, enabled) => {
        display.clear(identifier);
    
    }

    const _checkWinCondition = identifier => {
        identifier.gameboard.allSunk() 
            
    }

    const _playerOneMove = (event) => {

        console.log('person turn')
        console.log(person.player)
        if(!person.player.moveIsLegal(event)) return;

        const attack = person.player.attack(event)
        computer.gameboard.receiveAttack(attack);
        console.log(event, 'attacking')

        person.player.turn = false;
        computer.player.turn = true;
        console.log(computer.player.turn)

        computer.gameboard.render('gameboard', '.gameboard_one');
        if(computer.gameboard.allSunk()){
            console.log('gameover', computer.gameboard.allSunk())
            return;
        };

        console.log('not gameover');
    };

    const _playerTwoMove = () => {
        
        computer.gameboard.pause('computer', true);
        // Setting Time out to make computer feel more human.
        setTimeout(() => {
            
            console.log('computer turn')

            let computerMove = computer.player.computerMove();

            while(!computer.player.moveIsLegal(computerMove)) {
                computerMove = computer.player.computerMove();
                console.log('retrying because position taken');
            };

            console.log(computerMove);
            computer.player.attack(computerMove);
            person.gameboard.receiveAttack(computerMove);
            person.gameboard.render('gameboard', '.gameboard_two', true);

            computer.player.turn = false;
            person.player.turn = true;

            if(person.gameboard.allSunk()){
                console.log('gameover', computer.gameboard.allSunk())
                return;
            };

            computer.gameboard.pause('computer', false);

        }, 3000);
            
    };

// board one = computer board
// board two = person board
    const run = (event) => {

        // Person Turn
        if(person.player.turn) {
            _playerOneMove(event);
        };


        if(computer.player.turn) {
            _playerTwoMove(event);
        };

    };

    return {
        run,
        initialize,
    };
};

module.exports = game;