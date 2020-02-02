const arrays = require('../utility/arrays');

const Player = (name, type, turn=false) => {
    let _turn = turn;
    let _type = type;
    let _moves = [];
   
    const swapTurns = () => {
        _turn = _turn == true 
            ? false
            : true
    };

    const moveIsLegal = (move) => {
        for(array of _moves) {
            if(arrays.match(move, array)) {
                console.log('Oops! Position is taken!');
                return false;
            };
        };
        return true;
    };

    const computerMove = () => {
        return [arrays.rng(), arrays.rng()];
    };

    const attack = (selected) => {
        let move;
        switch(_type){
            case 'Person':
                    _moves.push(selected);
                    move = selected;
                break;
            case 'AI':
                 _moves.push(computerMove);
                 move = computerMove;
                break;
        }
        return move;
    };

    return{
        name, 
        attack,
        moveIsLegal,
        computerMove,
        swapTurns,
        get type() {
            return _type;
        },
        set type(type) {
            _type = type;
        },
        get turn() {
            return _turn;
        },
        set turn(turn) {
            _turn = turn;
        },
    };
};

module.exports = Player;