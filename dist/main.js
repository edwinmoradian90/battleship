/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controllers/events/events.js":
/*!******************************************!*\
  !*** ./src/controllers/events/events.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-param-reassign */\nlet length = '';\nlet ship = '';\nlet shipPosition = 'vertical';\n\nconst display = __webpack_require__(/*! ../utility/display */ \"./src/controllers/utility/display.js\");\n\nconst typingSound = document.createElement('audio');\nconst attack = document.createElement('audio');\nconst wrong = document.createElement('audio');\n\nwrong.src = '../src/assets/sounds/wrong.mp3';\ntypingSound.src = '../src/assets/sounds/type.mp3';\nattack.setAttribute('src', '../src/assets/sounds/attack.mp3');\n\nconst events = (event, game, Ship) => {\n  typingSound.play();\n  const item = event.target;\n  let location = '';\n\n  if (item.matches('.start')) {\n    const input = document.querySelector('.input');\n    game.setState({\n      setup: true,\n      initial: false,\n    });\n    game.person.player.name = input.value || 'person';\n    game.render('setup', '#content');\n    display.disableGameboard();\n  } else\n\n  if (item.matches('.submit_setup')) {\n    game.setState({\n      setup: false,\n      game: true,\n    });\n    game.render('game', '#content');\n    game.person.gameboard.render(\n\n      'gameboard',\n      '.gameboard_two',\n      true,\n      true,\n\n    );\n  } else\n\n  if (item.matches('.ship')) {\n    length = parseInt(event.target.dataset.length, 10);\n    ship = game.person.gameboard.selectShip(event);\n    shipPosition = display.setShipVertical();\n    display.enableGameboard();\n    display.showShipName(ship);\n  }\n\n  if (item.matches('.vertical_button')) {\n    shipPosition = display.setShipVertical();\n  }\n\n  if (item.matches('.horizontal_button')) {\n    shipPosition = display.setShipHorizontal();\n  }\n\n  if (item.matches('.cell')) {\n    location = [\n      parseInt(item.dataset.column, 10),\n      parseInt(item.parentNode.dataset.row, 10),\n    ];\n    if (game.state.setup && ship) {\n      const personGameboard = game.person.gameboard;\n      if (!personGameboard.placeShip(Ship(length), location, shipPosition, length)) {\n        wrong.currentTime = 0;\n        wrong.play();\n      }\n      personGameboard.componentRender('gameboardSetup', '.setup_container', '.gameboard_container', false, true);\n      location = '';\n      if (personGameboard.isReady(personGameboard.ships)) {\n        display.enableSubmit();\n        display.showBoardReady();\n        attack.play();\n      }\n      display.disableGameboard();\n    } else\n    if (game.state.game) {\n      game.run(location);\n    }\n  }\n\n  if (item.matches('.reset_button')) {\n    const { name } = game.person.player;\n    game.initialize();\n    game.setState({\n      setup: true,\n      initial: false,\n    });\n    game.render('setup', '#content');\n    game.person.player.name = name;\n  }\n\n  if (item.matches('.end_game_button')) {\n    game.initialize();\n    game.setState({\n      initial: true,\n      setup: false,\n      game: false,\n    });\n    game.render('main', '#content');\n  }\n};\n\nmodule.exports = events;\n\n\n//# sourceURL=webpack:///./src/controllers/events/events.js?");

/***/ }),

/***/ "./src/controllers/game.js":
/*!*********************************!*\
  !*** ./src/controllers/game.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-unused-expressions */\n/* eslint-disable no-underscore-dangle */\nconst Gameboard = __webpack_require__(/*! ./gameboard/gameboard */ \"./src/controllers/gameboard/gameboard.js\");\nconst Player = __webpack_require__(/*! ./player/player */ \"./src/controllers/player/player.js\");\nconst Ship = __webpack_require__(/*! ./ship/ship */ \"./src/controllers/ship/ship.js\");\nconst display = __webpack_require__(/*! ./utility/display */ \"./src/controllers/utility/display.js\");\nconst arrays = __webpack_require__(/*! ./utility/arrays */ \"./src/controllers/utility/arrays.js\");\n\nconst typingSound = document.createElement('audio');\ntypingSound.src = '../src/assets/sounds/type.mp3';\n\nconst game = () => {\n  const person = {\n    player: '',\n    gameboard: '',\n  };\n\n  const computer = {\n    player: '',\n    gameboard: '',\n  };\n\n  // Game phase\n  const state = {\n    initial: true,\n    setup: false,\n    game: false,\n    end: false,\n  };\n\n  const _setComputerBoard = () => {\n    const shipPositions = ['horizontal', 'vertical'];\n    const shipSize = [2, 3, 3, 4, 5];\n    for (let i = 0; i < 5; i += 1) {\n      let boardLocation;\n      const position = shipPositions[arrays.rng(1)];\n      if (position === 'horizontal') {\n        boardLocation = [arrays.rng(9 - shipSize[i]), i];\n      } else {\n        boardLocation = [i, arrays.rng(9 - shipSize[i])];\n      }\n\n      const placedShip = computer\n        .gameboard\n        .placeShip(Ship(shipSize[i]), boardLocation, position, shipSize[i]);\n\n      placedShip === false ? i = -1 : null;\n    }\n  };\n\n  const initialize = () => {\n    person.player = Player('Person', 'Person', true);\n    person.gameboard = Gameboard();\n\n    computer.player = Player('AI', 'AI', false);\n    computer.gameboard = Gameboard();\n\n    _setComputerBoard();\n  };\n  const render = (view, identifier, disabled) => {\n    display.clearAll(identifier);\n    display.set(view, identifier, disabled);\n  };\n\n  const _getWinner = () => {\n    const computerTurn = computer.player.turn;\n    let winner;\n    if (computerTurn) {\n      winner = computer;\n    }\n\n    winner = person.player.name;\n\n    return winner;\n  };\n\n  const setState = (object) => {\n    Object.assign(state, object);\n  };\n\n  const _checkWinCondition = (identifier) => {\n    if (identifier.gameboard.allSunk()) {\n      render('gameover', '#content', false);\n      setState({ game: false, end: true });\n      display.showWinner(_getWinner());\n    }\n  };\n\n  const _playerOneMove = (event) => {\n    if (!person.player.moveIsLegal(event)) return;\n\n    const attack = person.player.attack(event);\n    computer.gameboard.receiveAttack(attack);\n\n    person.player.turn = false;\n    computer.player.turn = true;\n\n    computer.gameboard.render('gameboard', '.gameboard_one', false, true);\n  };\n\n  const _playerTwoMove = () => {\n    computer.gameboard.pause('computer', true, false);\n    // Setting Time out to make computer feel more human.\n    setTimeout(() => {\n      let computerMove = computer.player.computerMove();\n\n      while (!computer.player.moveIsLegal(computerMove)) {\n        computerMove = computer.player.computerMove();\n      }\n\n      computer.player.attack(computerMove);\n      person.gameboard.receiveAttack(computerMove);\n      person.gameboard.render('gameboard', '.gameboard_two', true, true);\n      typingSound.play();\n\n      computer.player.turn = false;\n      person.player.turn = true;\n\n      computer.gameboard.pause('computer', false, false);\n    }, 1000);\n  };\n\n  const run = (event) => {\n    if (person.player.turn) {\n      _playerOneMove(event);\n    }\n\n    _checkWinCondition(computer);\n\n    if (computer.gameboard.allSunk()) {\n      return;\n    }\n\n    // Check Turn\n    if (computer.player.turn) {\n      _playerTwoMove(event);\n    }\n\n    _checkWinCondition(person);\n  };\n\n  return {\n    run,\n    render,\n    person,\n    computer,\n    state,\n    setState,\n    initialize,\n  };\n};\n\nmodule.exports = game;\n\n\n//# sourceURL=webpack:///./src/controllers/game.js?");

/***/ }),

/***/ "./src/controllers/gameboard/gameboard.js":
/*!************************************************!*\
  !*** ./src/controllers/gameboard/gameboard.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-param-reassign */\n/* eslint-disable no-unused-expressions */\n/* eslint-disable no-undef */\n/* eslint-disable no-restricted-syntax */\n/* eslint-disable no-underscore-dangle */\nconst display = __webpack_require__(/*! ../utility/display */ \"./src/controllers/utility/display.js\");\nconst arrays = __webpack_require__(/*! ../utility/arrays */ \"./src/controllers/utility/arrays.js\");\n\nconst gameboard = () => {\n  const _ships = [];\n  const _misses = [];\n  let selectedShip = '';\n\n  const _checkBoundaries = (locations) => {\n    let result = false;\n    locations.forEach((location) => {\n      const [newShipLocationX, newShipLocationY] = location;\n      if (newShipLocationX > 9 || newShipLocationY > 9) {\n        result = true;\n      }\n    });\n\n    return result;\n  };\n\n  const _checkShipCollision = (locations) => {\n    let result = false;\n    locations.forEach((location) => {\n      const [newShipLocationX, newShipLocationY] = location;\n      if (_ships !== []) {\n        _ships.forEach((ship) => {\n          ship.location.forEach((shipLocation) => {\n            const [placedShipLocationX, placedShipLocationY] = shipLocation;\n            if (\n              placedShipLocationY === newShipLocationY && placedShipLocationX === newShipLocationX\n            ) {\n              result = true;\n            }\n          });\n        });\n      }\n    });\n\n    return result;\n  };\n\n  const selectShip = (event) => {\n    const ships = document.querySelectorAll('.ship');\n    selectedShip = document.querySelector(`#${event.target.id}`);\n    for (const ship of ships) {\n      ship.style.border = '0px';\n    }\n\n    selectedShip.style.border = '3px solid lightseagreen';\n\n    return selectedShip;\n  };\n\n  const placeShip = (shipFactory, location, position, length) => {\n    const ship = shipFactory;\n\n    ship.location = arrays.rangeGenerator(location, length, position);\n    if (_checkBoundaries(ship.location)) {\n      ship.location = '';\n      return false;\n    } if (_checkShipCollision(ship.location)) {\n      ship.location = '';\n      return false;\n    }\n\n    selectedShip ? selectedShip.style.display = 'none' : null;\n    ship.position = position;\n    _ships.push(ship);\n\n    return ship;\n  };\n\n  const receiveAttack = (coordinates) => {\n    for (ship of _ships) {\n      const shipHasNotBeenHit = ship.hit(coordinates);\n      if (!shipHasNotBeenHit) {\n        _misses.push(coordinates);\n      }\n    }\n  };\n\n  const allSunk = () => {\n    for (let i = 0; i < _ships.length; i += 1) {\n      if (!_ships[i].isSunk()) return false;\n    }\n    return true;\n  };\n\n  const isReady = (gameBoard) => {\n    let result = false;\n    result = gameBoard.length === 5;\n\n    return result;\n  };\n\n  const render = (view, identifier, disable, show) => {\n    display.clearAll(identifier);\n    display.set(view, identifier, disable);\n    display.update(_ships, _misses, identifier, show);\n  };\n\n  // Refactor\n  const componentRender = (component, parent, child, disabled, show) => {\n    display.clear(parent, child);\n    display.componentSet(component, parent, disabled);\n    display.update(_ships, _misses, parent, show);\n  };\n\n  const pause = (identifier, disabled, show) => {\n    identifier === 'computer'\n      ? render('gameboard', '.gameboard_one', disabled, show)\n      : render('gameboard', '.gameboard_two', disabled, show);\n  };\n\n  const togglePosition = (ship) => {\n    ship.position = ship.position === 'vertical'\n      ? ship.position = 'horizontal'\n      : ship.position = 'vertical';\n\n    ship.location = arrays.rangeGenerator(ship.location, ship.length, ship.position);\n  };\n\n  return {\n    pause,\n    isReady,\n    selectShip,\n    placeShip,\n    receiveAttack,\n    componentRender,\n    togglePosition,\n    allSunk,\n    render,\n    get ships() {\n      return _ships;\n    },\n    get misses() {\n      return _misses;\n    },\n  };\n};\n\nmodule.exports = gameboard;\n\n\n//# sourceURL=webpack:///./src/controllers/gameboard/gameboard.js?");

/***/ }),

/***/ "./src/controllers/player/player.js":
/*!******************************************!*\
  !*** ./src/controllers/player/player.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-undef */\n/* eslint-disable no-restricted-syntax */\n/* eslint-disable no-underscore-dangle */\nconst arrays = __webpack_require__(/*! ../utility/arrays */ \"./src/controllers/utility/arrays.js\");\n\nconst Player = (name, type, turn = false) => {\n  let _name = name;\n  let _turn = turn;\n  let _type = type;\n  const _moves = [];\n\n  const swapTurns = () => {\n    _turn = _turn !== true;\n  };\n\n  const moveIsLegal = (move) => {\n    for (array of _moves) {\n      if (arrays.match(move, array)) {\n        return false;\n      }\n    }\n    return true;\n  };\n\n  const computerMove = () => [arrays.rng(), arrays.rng()];\n\n  const attack = (selected) => {\n    let move;\n    switch (_type) {\n      case 'Person':\n        _moves.push(selected);\n        move = selected;\n        break;\n      case 'AI':\n        _moves.push(computerMove);\n        move = computerMove;\n        break;\n      default:\n        break;\n    }\n    return move;\n  };\n\n  return {\n    attack,\n    moveIsLegal,\n    computerMove,\n    swapTurns,\n    get name() {\n      return _name;\n    },\n    set name(userName) {\n      _name = userName;\n    },\n    get type() {\n      return _type;\n    },\n    set type(userType) {\n      _type = userType;\n    },\n    get turn() {\n      return _turn;\n    },\n    set turn(playerTurn) {\n      _turn = playerTurn;\n    },\n  };\n};\n\nmodule.exports = Player;\n\n\n//# sourceURL=webpack:///./src/controllers/player/player.js?");

/***/ }),

/***/ "./src/controllers/ship/ship.js":
/*!**************************************!*\
  !*** ./src/controllers/ship/ship.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-underscore-dangle */\nconst arrays = __webpack_require__(/*! ../utility/arrays */ \"./src/controllers/utility/arrays.js\");\n\nconst fire = document.createElement('audio');\nfire.src = '../src/assets/sounds/fire.mp3';\n\nconst shipFactory = (length) => {\n  const _hits = [];\n  let _length = length;\n  let _position = '';\n  let _location = '';\n\n  const hit = (hitLocation) => {\n    let result = false;\n    _location.forEach((location) => {\n      if (arrays.match(hitLocation, location)) {\n        _hits.push(hitLocation);\n        // possible refactor\n        setTimeout(() => {\n          fire.currentTime = 0;\n          fire.play();\n        }, 200);\n\n        result = true;\n      }\n    });\n    return result;\n  };\n\n  const rotateShip = () => {\n    _position = _position === 'vertical'\n      ? 'horizontal'\n      : 'vertical';\n  };\n\n  const isSunk = () => _length === _hits.length;\n\n  return {\n    hit,\n    isSunk,\n    rotateShip,\n    get length() {\n      return _length;\n    },\n    set length(shipLength) {\n      _length = shipLength;\n    },\n    get location() {\n      return _location;\n    },\n    set location(coordinates) {\n      _location = coordinates;\n    },\n    get position() {\n      return _position;\n    },\n    set position(position) {\n      _position = position;\n    },\n    get hits() {\n      return _hits;\n    },\n  };\n};\n\nmodule.exports = shipFactory;\n\n\n//# sourceURL=webpack:///./src/controllers/ship/ship.js?");

/***/ }),

/***/ "./src/controllers/utility/arrays.js":
/*!*******************************************!*\
  !*** ./src/controllers/utility/arrays.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const generator = (start, end) => {\n  const newArray = [];\n  for (let i = start; i < end; i += 1) {\n    newArray.push(i);\n  }\n  return newArray;\n};\n\nconst match = (arrayOne, arrayTwo) => {\n  if (arrayOne.length !== arrayTwo.length) return false;\n  for (let i = 0; i < arrayOne.length; i += 1) {\n    if (arrayOne[i] !== arrayTwo[i]) return false;\n  }\n  return true;\n};\n\nconst range = (start, end) => Array.apply(0, Array(end))\n  .map((element, index) => index + start);\n\nconst rangeGenerator = (array, length, position) => {\n  const newArray = [];\n  for (let i = 0; i < length; i += 1) {\n    if (position === 'horizontal') {\n      newArray.push([array[0] + i, array[1]]);\n    } else\n    if (position === 'vertical') {\n      newArray.push([array[0], array[1] + i]);\n    }\n  }\n  return newArray;\n};\n\nconst rng = (number) => Math.round(Math.random() * (number || 9));\n\nmodule.exports = {\n  rangeGenerator,\n  generator,\n  match,\n  range,\n  rng,\n};\n\n\n//# sourceURL=webpack:///./src/controllers/utility/arrays.js?");

/***/ }),

/***/ "./src/controllers/utility/display.js":
/*!********************************************!*\
  !*** ./src/controllers/utility/display.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-param-reassign */\n/* eslint-disable no-undef */\n/* eslint-disable no-restricted-syntax */\nconst Gameboard = __webpack_require__(/*! ../../views/gameboard/gameboard */ \"./src/views/gameboard/gameboard.js\");\nconst main = __webpack_require__(/*! ../../views/main */ \"./src/views/main.js\");\nconst game = __webpack_require__(/*! ../../views/game/game */ \"./src/views/game/game.js\");\nconst Gameover = __webpack_require__(/*! ../../views/gameover/gameover */ \"./src/views/gameover/gameover.js\");\nconst Setup = __webpack_require__(/*! ../../views/setup/setup */ \"./src/views/setup/setup.js\");\n\nconst set = (view, identifier, disabled) => {\n  const gameboard = Gameboard.generate(disabled);\n  const gameover = Gameover.generate();\n  const { setup } = Setup.generate();\n\n  const displays = {\n    setup,\n    main,\n    game,\n    gameboard,\n    gameover,\n  };\n\n  const element = document.querySelector(identifier);\n  element.appendChild(displays[view].cloneNode(true));\n};\n\nconst clearAll = (identifier) => {\n  const element = document.querySelector(identifier);\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n};\n\nconst update = (ships, misses, identifier, show) => {\n  const gameboard = document.querySelector(identifier);\n  for (miss of misses) {\n    const [x, y] = miss;\n    const row = gameboard.querySelector(`#row-${y}`);\n    const column = row.querySelector(`#column-${x}`);\n    column.style.background = 'rgba(255,0,0,.1)';\n  }\n\n  ships.forEach((ship) => {\n    if (ship.location && show) {\n      ship.location.forEach((location) => {\n        const [x, y] = location;\n        const row = gameboard.querySelector(`#row-${y}`);\n        const column = row.querySelector(`#column-${x}`);\n        column.style.background = 'black';\n        column.style.border = '0px';\n        column.style.borderLeft = '1px solid rgba(0,125,255,.5)';\n        column.style.borderRight = '1px solid rgba(0,125,255,.5)';\n      });\n    }\n    ship.hits.forEach((hit) => {\n      const gameBoard = document.querySelector(identifier);\n      const [x, y] = hit;\n      const row = gameBoard.querySelector(`#row-${y}`);\n      const column = row.querySelector(`#column-${x}`);\n      column.style.backgroundImage = 'url(\"https://media.giphy.com/media/1wmdI5Nk5MjD0XIwdy/giphy.gif\")' || false;\n      column.style.opacity = '1';\n      column.style.backgroundSize = 'cover';\n      column.style.backgroundPosition = 'center';\n      column.style.backgroundRepeat = 'no-repeat';\n    });\n  });\n};\n\nconst clear = (parent, child) => {\n  const domElement = document.querySelector(parent);\n  const elementChild = document.querySelector(child);\n  domElement.removeChild(elementChild);\n};\n\nconst componentSet = (component, parent, disabled) => {\n  const gameboard = Gameboard.generate(disabled);\n  const { gameboardSetup, positionButtons } = Setup.generate();\n  const components = {\n    gameboard,\n    gameboardSetup,\n    positionButtons,\n  };\n\n  const domElement = document.querySelector(parent);\n  domElement.appendChild(components[component].cloneNode(true));\n};\n\nconst enableSubmit = () => {\n  const submitButton = document.querySelector('.submit_setup');\n  submitButton.style.pointerEvents = 'auto';\n  submitButton.style.background = '#008F11';\n  submitButton.classList.add('hover_button');\n};\n\nconst disableGameboard = (gameboard) => {\n  let cells;\n  if (gameboard) {\n    const board = document.querySelector(gameboard);\n    cells = board.querySelector('.cell');\n  } else {\n    cells = document.querySelectorAll('.cell');\n  }\n\n  cells.forEach((cell) => {\n    cell.style.pointerEvents = 'none';\n  });\n};\n\nconst setShipVertical = () => {\n  const vertical = document.querySelector('.vertical_button');\n  const horizontal = document.querySelector('.horizontal_button');\n  vertical.style.color = 'white';\n  horizontal.style.color = 'black';\n  return 'vertical';\n};\n\nconst setShipHorizontal = () => {\n  const vertical = document.querySelector('.vertical_button');\n  const horizontal = document.querySelector('.horizontal_button');\n  vertical.style.color = 'black';\n  horizontal.style.color = 'white';\n  return 'horizontal';\n};\n\nconst enableGameboard = () => {\n  const cells = document.querySelectorAll('.cell');\n  cells.forEach((cell) => {\n    cell.style.pointerEvents = 'auto';\n  });\n};\n\nconst showShipName = (ship) => {\n  const title = document.querySelector('.ship_title');\n  title.innerText = ship.dataset.name;\n};\n\nconst showBoardReady = () => {\n  const title = document.querySelector('.ship_title');\n  const startButton = document.querySelector('.submit_setup');\n  startButton.innerText = 'Start Game';\n  title.innerText = 'Ships are set!';\n};\n\nconst showWinner = (playerName) => {\n  const winner = document.querySelector('.winner');\n\n  winner.innerText = `Good work, ${playerName}, you got 'em.`;\n};\n\n\nmodule.exports = {\n  set,\n  clear,\n  update,\n  clearAll,\n  showWinner,\n  showShipName,\n  componentSet,\n  enableSubmit,\n  showBoardReady,\n  setShipVertical,\n  setShipHorizontal,\n  enableGameboard,\n  disableGameboard,\n};\n\n\n//# sourceURL=webpack:///./src/controllers/utility/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./controllers/game */ \"./src/controllers/game.js\");\nconst ship = __webpack_require__(/*! ./controllers/ship/ship */ \"./src/controllers/ship/ship.js\");\nconst events = __webpack_require__(/*! ./controllers/events/events */ \"./src/controllers/events/events.js\");\n\nconst game = Game();\n\ngame.initialize();\ngame.render('main', '#content');\n\ndocument.addEventListener('click', (event) => events(event, game, ship));\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/views/game/game.js":
/*!********************************!*\
  !*** ./src/views/game/game.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const gameboard = __webpack_require__(/*! ../gameboard/gameboard */ \"./src/views/gameboard/gameboard.js\");\n\nconst gameboardOne = document.createElement('div');\ngameboardOne.classList.add('gameboard_one');\n\nconst gameboardTwo = document.createElement('div');\ngameboardTwo.classList.add('gameboard_two');\n\nconst game = document.createElement('div');\ngame.classList.add('game');\n\ngameboardOne.appendChild(gameboard.generate());\ngameboardTwo.appendChild(gameboard.generate(true).cloneNode(true));\ngame.appendChild(gameboardOne);\ngame.appendChild(gameboardTwo);\n\nmodule.exports = game;\n\n\n//# sourceURL=webpack:///./src/views/game/game.js?");

/***/ }),

/***/ "./src/views/gameboard/gameboard.js":
/*!******************************************!*\
  !*** ./src/views/gameboard/gameboard.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const generate = (disabled) => {\n  const board = document.createElement('div');\n  board.classList.add('gameboard');\n\n  for (let i = 0; i <= 9; i += 1) {\n    const grid = document.createElement('div');\n    grid.classList.add('grid');\n    grid.setAttribute('data-row', i);\n    grid.id = `row-${i}`;\n    for (let j = 0; j <= 9; j += 1) {\n      const cell = document.createElement('div');\n      cell.classList.add('cell');\n      cell.setAttribute('data-column', j);\n      if (disabled) {\n        cell.style.pointerEvents = 'none';\n      }\n      cell.id = `column-${j}`;\n      grid.appendChild(cell);\n    }\n    board.appendChild(grid);\n  }\n\n  return board;\n};\n\nmodule.exports = { generate };\n\n\n//# sourceURL=webpack:///./src/views/gameboard/gameboard.js?");

/***/ }),

/***/ "./src/views/gameover/gameover.js":
/*!****************************************!*\
  !*** ./src/views/gameover/gameover.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const generate = () => {\n  const gameoverContainer = document.createElement('div');\n  gameoverContainer.classList.add('gameover_container');\n\n  const winner = document.createElement('div');\n  winner.classList.add('winner');\n  winner.innerText = '';\n\n  const gameoverButtons = document.createElement('div');\n  gameoverButtons.classList.add('gameover_buttons');\n\n  const resetButton = document.createElement('div');\n  resetButton.classList.add('reset_button');\n  resetButton.innerText = 'Restart';\n\n  const endGameButton = document.createElement('div');\n  endGameButton.classList.add('end_game_button');\n  endGameButton.innerText = 'End game';\n\n\n  gameoverButtons.appendChild(resetButton);\n  gameoverButtons.appendChild(endGameButton);\n  gameoverContainer.appendChild(winner);\n  gameoverContainer.appendChild(gameoverButtons);\n\n  return gameoverContainer;\n};\n\nmodule.exports = { generate };\n\n\n//# sourceURL=webpack:///./src/views/gameover/gameover.js?");

/***/ }),

/***/ "./src/views/main.js":
/*!***************************!*\
  !*** ./src/views/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const mainContainer = document.createElement('div');\nmainContainer.classList.add('main_container');\n\nconst mainTitle = document.createElement('div');\nmainTitle.classList.add('main_title');\nmainTitle.innerText = 'Battle Ship';\n\nconst inputContainer = document.createElement('div');\ninputContainer.classList.add('input_container');\n\nconst input = document.createElement('input');\ninput.setAttribute('type', 'text');\ninput.setAttribute('placeholder', 'Name');\ninput.classList.add('input');\n\nconst start = document.createElement('div');\nstart.innerText = 'Play';\nstart.classList.add('start');\n\ninputContainer.appendChild(input);\ninputContainer.appendChild(start);\n\nmainContainer.appendChild(mainTitle);\nmainContainer.appendChild(inputContainer);\n\nwindow.addEventListener('load', () => {\n  const introSound = document.createElement('audio');\n  introSound.setAttribute('autoplay', 'true');\n  introSound.setAttribute('src', '../src/assets/sounds/intro.mp3');\n});\n\ndocument.addEventListener('keydown', (e) => {\n  if (e.target.matches('.input')) {\n    const typingSound = document.createElement('audio');\n    typingSound.id = 'typingSound';\n    typingSound.src = '../src/assets/sounds/type.mp3';\n    typingSound.play();\n  }\n});\nmodule.exports = mainContainer;\n\n\n//# sourceURL=webpack:///./src/views/main.js?");

/***/ }),

/***/ "./src/views/setup/setup.js":
/*!**********************************!*\
  !*** ./src/views/setup/setup.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const gameboard = __webpack_require__(/*! ../gameboard/gameboard */ \"./src/views/gameboard/gameboard.js\");\n\nconst generate = () => {\n  const setupContainer = document.createElement('div');\n  setupContainer.classList.add('setup_container');\n\n  const shipDrawerContainer = document.createElement('div');\n  shipDrawerContainer.classList.add('ship_drawer_container');\n\n  const shipDrawer = document.createElement('div');\n  shipDrawer.classList.add('ship_drawer');\n\n  const shipTitle = document.createElement('span');\n  shipTitle.classList.add('ship_title');\n  shipTitle.innerText = 'Ships';\n\n  shipDrawerContainer.appendChild(shipTitle);\n\n  for (let i = 0; i < 5; i += 1) {\n    const ship = document.createElement('div');\n    ship.classList.add('ship');\n    ship.id = `ship-${i}`;\n    ship.setAttribute('data-ship', i);\n    shipDrawer.appendChild(ship);\n  }\n\n  shipDrawer.children[0].setAttribute('data-length', '2');\n  shipDrawer.children[0].setAttribute('data-name', 'Destroyer');\n  shipDrawer.children[1].setAttribute('data-length', '3');\n  shipDrawer.children[1].setAttribute('data-name', 'Submarine');\n  shipDrawer.children[2].setAttribute('data-length', '3');\n  shipDrawer.children[2].setAttribute('data-name', 'Cruiser');\n  shipDrawer.children[3].setAttribute('data-length', '4');\n  shipDrawer.children[3].setAttribute('data-name', 'Battleship');\n  shipDrawer.children[4].setAttribute('data-length', '5');\n  shipDrawer.children[4].setAttribute('data-name', 'Carrier');\n\n  const gameboardContainer = document.createElement('div');\n  gameboardContainer.classList.add('gameboard_container');\n\n  const submitSetup = document.createElement('div');\n  submitSetup.classList.add('submit_setup');\n  submitSetup.innerText = 'Place Your Ships';\n\n  const positionButtonsContainer = document.createElement('div');\n  positionButtonsContainer.classList.add('position_buttons_container');\n\n  const horizontalButton = document.createElement('div');\n  horizontalButton.classList.add('horizontal_button');\n  horizontalButton.innerText = 'horizontal';\n\n  const verticalButton = document.createElement('div');\n  verticalButton.classList.add('vertical_button');\n  verticalButton.innerText = 'vertical';\n\n  const setupBoard = gameboard.generate();\n\n  positionButtonsContainer.appendChild(horizontalButton);\n  positionButtonsContainer.appendChild(verticalButton);\n  gameboardContainer.appendChild(setupBoard);\n  gameboardContainer.appendChild(submitSetup);\n  shipDrawerContainer.appendChild(shipDrawer);\n  shipDrawerContainer.appendChild(positionButtonsContainer);\n  setupContainer.appendChild(shipDrawerContainer);\n  setupContainer.appendChild(gameboardContainer);\n\n  return {\n    setup: setupContainer,\n    gameboardSetup: gameboardContainer,\n    positionButtons: positionButtonsContainer,\n  };\n};\n\nmodule.exports = { generate };\n\n\n//# sourceURL=webpack:///./src/views/setup/setup.js?");

/***/ })

/******/ });