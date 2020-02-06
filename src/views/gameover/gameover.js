const generate = () => {
    const gameoverContainer = document.createElement('div');
    gameoverContainer.classList.add('gameover_container');

    const winner = document.createElement('div');
    winner.classList.add('winner');
    winner.innerText = '';

    const gameoverButtons = document.createElement('div');
    gameoverButtons.classList.add('gameover_buttons');
    
    const resetButton = document.createElement('div');
    resetButton.classList.add('reset_button');
    resetButton.innerText = 'Restart';

    const endGameButton = document.createElement('div');
    endGameButton.classList.add('end_game_button');
    endGameButton.innerText = 'End game';


    gameoverButtons.appendChild(resetButton);
    gameoverButtons.appendChild(endGameButton);
    gameoverContainer.appendChild(winner);
    gameoverContainer.appendChild(gameoverButtons);

    return gameoverContainer;
};

module.exports = { generate };