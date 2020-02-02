const Gameboard = require('./gameboard/gameboard');
const Player = require('./player/player');
const Ship = require('./ship/ship');

// ships
const carrier    = Ship(5);
const battleship = Ship(4);
const cruiser    = Ship(3);     
const submarine  = Ship(3);
const destroyer  = Ship(2);

const game = (event) => {

    let players = '';
    let current = '';

    const initialize = () => {
        players = { 
            first: {
                player: Player('Person', 'Person', true),
                board: Gameboard(),
            },
            second: {
                player: Player('AI', 'AI', false),
                board: Gameboard()
            },
        };

        current = '';
    };
    
    const run = (event) => {
        
        // Set current player to person
        current = players.first;
        
        // Check if position available
        if(!current.player.moveIsLegal(event)) return;

        // Person move
        current.board.receiveAttack(current.player.attack(event));
        console.log(event, 'attacking')

        //Swap turns and current
        current.player.swapTurns();
        current = players.second;

        // Check for end game condition;
        if(current.board.allSunk()){
            console.log('gameover');
            return;
        };

        // Check computer move available
        let computerMove = current.player.computerMove();
        while(!current.player.moveIsLegal(computerMove)) {
            computerMove = current.player.computerMove();
            console.log('retrying because position taken');
        };

        // Computer attack and swap turns
        console.log(computerMove);
        current.board.receiveAttack(computerMove);
        current.player.swapTurns();
    };

    return {
        run,
        initialize,
    };
};

module.exports = game;