const events = (event, game) => {
    const item = event.target;
    if(event.target.matches('.cell')) {
        const move = [
            parseInt(item.id), 
            parseInt(item.parentNode.id)
        ];
        game.run(move);
    };
};

module.exports = events;