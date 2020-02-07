const mainContainer = document.createElement('div');
mainContainer.classList.add('main_container');
mainContainer.classList.add('crt');

const mainTitle = document.createElement('div');
mainTitle.classList.add('main_title');
mainTitle.innerText = 'Battle Ship';

const inputContainer = document.createElement('div');
inputContainer.classList.add('input_container');

const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder','Name');
input.classList.add('input');
input.addEventListener('onkeydown' , () => {
    console.log('type')
})

const start = document.createElement('div');
start.innerText = 'Play';
start.classList.add('start');

const audio = document.createElement('audio');
audio.setAttribute('autoplay', 'true');
audio.setAttribute('src', '../src/assets/sounds/intro.mp3');

inputContainer.appendChild(input);
inputContainer.appendChild(start);

mainContainer.appendChild(mainTitle);
mainContainer.appendChild(inputContainer);

module.exports = mainContainer;