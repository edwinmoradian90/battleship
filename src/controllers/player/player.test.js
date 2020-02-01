const Player = require('./player');
const player = Player('me', 'person', true);
const rng = require('../utility/arrays').rng;
const randomArray = [rng(), rng()];

test('Player exists', () => {
    expect(player).not.toBe(null);
});

test('Player can attack enemy board', () => {
    expect(player.attack([1,1])).toEqual([1,1]);
});

test('Computer can attack enemy board', () => {
    player.type = 'AI';
    player.turn = true;
    expect(player.attack('', randomArray)).toEqual(randomArray);
});