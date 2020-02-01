const Player = require('./player');
const player = Player('me', 'person', true);
const rng = require('../utility/arrays').rng;
const randomArray = [rng(), rng()];

test('Player exists', () => {
    expect(player).not.toBe(null);
});

test('Player can attack enemy board', () => {
    player.type = 'Person';
    player.turn = true;
    expect(player.attack([1,1])).toEqual([1,1]);
});

test('Computer can attack enemy board', () => {
    player.type = 'AI';
    player.turn = true;
    expect(player.attack('', randomArray)).toEqual(randomArray);
});

test('Computer cannot have dup attacks', () => {
    player.type = 'AI';
    player.turn = true;
    player.attack('', [1,1]);
    player.attack('', [1,1]);
    expect(player.moveIsLegal([1,1])).toBe(false);
})