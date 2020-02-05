const mainContainer = document.createElement('div');
mainContainer.innerText = 'main page';
mainContainer.classList.add('main_container');

const start = document.createElement('div');
start.innerText ='Play';
start.classList.add('start');
mainContainer.appendChild(start);

module.exports = mainContainer;