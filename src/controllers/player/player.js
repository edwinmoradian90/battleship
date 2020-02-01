const arrays = require('../utility/arrays');

const Player = (name, type, turn=false) => {
    let _turn = turn;
    let _type = type;
    let _moves = [];
   
    const _swapTurns = () => {
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

    const attack = (personMove, aiMove) => {
        let move;
        switch(_type){
            case 'Person':
                if(moveIsLegal(personMove)){
                    console.log(move)
                    _moves.push(personMove);
                    _swapTurns();
                    move = personMove;
                }
                break;
            case 'AI':
                console.log('ai move')
                console.log(moveIsLegal(aiMove))
                if(moveIsLegal(aiMove)){
                    _moves.push(aiMove);
                    _swapTurns();
                    move = aiMove;
                
                }
                break;
            default:
        }
        return move;
    };

    return{
        name, 
        attack,
        moveIsLegal,
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
        }
    };
};

module.exports = Player;