const Player = (name, type, turn=false) => {
    let _turn = turn;
    let _type = type;
   
    const _swapTurns = () => {
        _turn = _turn == true 
            ? false
            : true
    };
    const attack = (personMove, aiMove) => {
        let move = _type == 'person'
            ? personMove
            : aiMove;
        _swapTurns();

        return move;
    };
    return{
        name, 
        attack,
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