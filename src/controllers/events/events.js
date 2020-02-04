const events = (event, game, display) => {
    const item = event.target;
    if(item.matches('.start')) {
        display.clear('#content');
        display.set('game', '#content');
    }
    if(item.matches('.cell')) {
        const move = [
            parseInt(item.dataset.column), 
            parseInt(item.parentNode.dataset.row)
        ];
        game.run(move);
    };

};

module.exports = events;