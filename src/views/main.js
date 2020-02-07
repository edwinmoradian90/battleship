const mainContainer = document.createElement('div');
mainContainer.classList.add('main_container');

const input = document.createElement('input');
input.setAttribute('type', 'text');
input.classList.add('input');

const start = document.createElement('div');
start.innerText ='Play';
start.classList.add('start');

mainContainer.appendChild(input);
mainContainer.appendChild(start);

module.exports = mainContainer;