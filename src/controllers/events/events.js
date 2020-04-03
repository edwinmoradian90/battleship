/* eslint-disable no-param-reassign */
let length = '';
let ship = '';
let shipPosition = 'vertical';

const display = require('../utility/display');

const typingSound = document.createElement('audio');
const attack = document.createElement('audio');
const wrong = document.createElement('audio');

wrong.src = '../src/assets/sounds/wrong.mp3';
typingSound.src = '../src/assets/sounds/type.mp3';
attack.setAttribute('src', '../src/assets/sounds/attack.mp3');

const events = (event, game, Ship) => {
  typingSound.play();
  const item = event.target;
  let location = '';

  if (item.matches('.start')) {
    const input = document.querySelector('.input');
    game.setState({
      setup: true,
      initial: false,
    });
    game.person.player.name = input.value || 'person';
    game.render('setup', '#content');
    display.disableGameboard();
  } else

  if (item.matches('.submit_setup')) {
    game.setState({
      setup: false,
      game: true,
    });
    game.render('game', '#content');
    game.person.gameboard.render(

      'gameboard',
      '.gameboard_two',
      true,
      true,

    );
  } else

  if (item.matches('.ship')) {
    length = parseInt(event.target.dataset.length, 10);
    ship = game.person.gameboard.selectShip(event);
    shipPosition = display.setShipVertical();
    display.enableGameboard();
    display.showShipName(ship);
  }

  if (item.matches('.vertical_button')) {
    shipPosition = display.setShipVertical();
  }

  if (item.matches('.horizontal_button')) {
    shipPosition = display.setShipHorizontal();
  }

  if (item.matches('.cell')) {
    location = [
      parseInt(item.dataset.column, 10),
      parseInt(item.parentNode.dataset.row, 10),
    ];
    if (game.state.setup && ship) {
      const personGameboard = game.person.gameboard;
      if (!personGameboard.placeShip(Ship(length), location, shipPosition, length)) {
        wrong.currentTime = 0;
        wrong.play();
      }
      personGameboard.componentRender('gameboardSetup', '.setup_container', '.gameboard_container', false, true);
      location = '';
      if (personGameboard.isReady(personGameboard.ships)) {
        display.enableSubmit();
        display.showBoardReady();
        attack.play();
      }
      display.disableGameboard();
    } else
    if (game.state.game) {
      game.run(location);
    }
  }

  if (item.matches('.reset_button')) {
    const { name } = game.person.player;
    game.initialize();
    game.setState({
      setup: true,
      initial: false,
    });
    game.render('setup', '#content');
    game.person.player.name = name;
  }

  if (item.matches('.end_game_button')) {
    game.initialize();
    game.setState({
      initial: true,
      setup: false,
      game: false,
    });
    game.render('main', '#content');
  }
};

module.exports = events;
