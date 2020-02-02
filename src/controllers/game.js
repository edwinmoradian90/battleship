const Gameboard = require('./gameboard/gameboard');
const Player = require('./player/player');
const Ship = require('./ship/ship');

const game = (event) => {

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
    
    const run = (event) => {
        if(!person.player.moveIsLegal(event)) return;
    
        const attack = person.player.attack(event)
        computer.gameboard.receiveAttack(attack);
        console.log(event, 'attacking')

        person.player.swapTurns();
        computer.player.swapTurns();

        if(computer.gameboard.allSunk()){
            console.log('gameover', computer.gameboard.allSunk())
            return;
        };
        console.log('not gameover')

        let computerMove = computer.player.computerMove();

        while(!computer.player.moveIsLegal(computerMove)) {
            computerMove = computer.player.computerMove();
            console.log('retrying because position taken');
        };

        console.log(computerMove);
        computer.player.attack(computerMove);
        person.gameboard.receiveAttack(computerMove);
        computer.player.swapTurns();

        if(person.gameboard.allSunk()){
            console.log('gameover', computer.gameboard.allSunk())
            return;
        }
    };

    return {
        run,
        initialize,
    };
};

module.exports = game;