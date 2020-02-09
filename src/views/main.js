const mainContainer = document.createElement('div');
mainContainer.classList.add('main_container');
//mainContainer.classList.add('crt');

const mainTitle = document.createElement('div');
mainTitle.classList.add('main_title');
mainTitle.innerText = 'Battle Ship';

const inputContainer = document.createElement('div');
inputContainer.classList.add('input_container');

const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder','Name');
input.classList.add('input');

const start = document.createElement('div');
start.innerText = 'Play';
start.classList.add('start');

inputContainer.appendChild(input);
inputContainer.appendChild(start);

mainContainer.appendChild(mainTitle);
mainContainer.appendChild(inputContainer);

window.addEventListener('load', (e) => {
    console.log('something')
    const introSound = document.createElement('audio');
    introSound.setAttribute('autoplay', 'true');
    introSound.setAttribute('src', '../src/assets/sounds/intro.mp3');
});

document.addEventListener('keydown', (e) => {
    if(e.target.matches('.input')) {
        console.log('works')
        const typingSound = document.createElement('audio');
        typingSound.id = 'typingSound';
        typingSound.src = '../src/assets/sounds/type.mp3';
        typingSound.play();
    }
});
module.exports = mainContainer;