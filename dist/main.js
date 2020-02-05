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
/***/ (function(module, exports) {

eval("let length = '';\r\n\r\nconst events = (event, game, Ship) => {\r\n    const item = event.target;\r\n    let ship = '';\r\n    let location = '';\r\n\r\n    if(item.matches('.start')) {\r\n        game.setState({setup: true, initial: false});\r\n        game.render('setup', '#content');\r\n    } else\r\n\r\n    if(item.matches('.submit_setup')){\r\n        game.setState({setup: false, game: true});\r\n        game.render('game', '#content');\r\n        game.person.gameboard.render('gameboard', '.gameboard_two', true, true);\r\n    } else\r\n\r\n    if(item.matches('.ship')) {\r\n\r\n        length = parseInt(event.target.dataset.length);\r\n        console.log(length)\r\n        ship = game.person.gameboard.selectShip(event);\r\n    };\r\n\r\n    if(item.matches('.cell')) {\r\n        location = [\r\n            parseInt(item.dataset.column), \r\n            parseInt(item.parentNode.dataset.row)\r\n        ];\r\n\r\n        if(game.state.setup){\r\n            console.log(length, location)\r\n            game.person.gameboard.placeShip(Ship(length), location, 'vertical', length);\r\n            game.person.gameboard.render('setup', '#content', true, true);\r\n        } else\r\n        if(game.state.game) {\r\n            game.run(location);\r\n        };\r\n\r\n    };\r\n\r\n\r\n};\r\n\r\nmodule.exports = events;\n\n//# sourceURL=webpack:///./src/controllers/events/events.js?");

/***/ }),

/***/ "./src/controllers/game.js":
/*!*********************************!*\
  !*** ./src/controllers/game.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Gameboard = __webpack_require__(/*! ./gameboard/gameboard */ \"./src/controllers/gameboard/gameboard.js\");\r\nconst Player = __webpack_require__(/*! ./player/player */ \"./src/controllers/player/player.js\");\r\nconst Ship = __webpack_require__(/*! ./ship/ship */ \"./src/controllers/ship/ship.js\");\r\nconst display = __webpack_require__(/*! ./utility/display */ \"./src/controllers/utility/display.js\");\r\n\r\nconst game = () => {\r\n\r\n    let person = {\r\n        player: '',\r\n        gameboard: '',\r\n    };\r\n\r\n    let computer = {\r\n        player: '',\r\n        gameboard: '',\r\n    };\r\n    \r\n    // Game phase\r\n    let state = {\r\n        initial: true,\r\n        setup: false,\r\n        game: false,\r\n        end: false\r\n    };\r\n\r\n    const initialize = () => {\r\n\r\n        person.player = Player('Person', 'Person', true);\r\n        person.gameboard = Gameboard();\r\n\r\n        computer.player = Player('AI','AI', false );\r\n        computer.gameboard = Gameboard();\r\n\r\n        computer.gameboard.placeShip(Ship(1), [1,1]);\r\n        computer.gameboard.placeShip(Ship(1), [2,2]);\r\n    };\r\n    // for refactor\r\n    const render = (view, identifier, enabled) => {\r\n        display.clear(identifier);\r\n        display.set(view, identifier, enabled);\r\n    };\r\n    // for refactor\r\n    const _checkWinCondition = identifier => {\r\n        identifier.gameboard.allSunk();\r\n    };\r\n\r\n    const setState = (object) => {\r\n        Object.assign(state, object);\r\n    };\r\n\r\n    const _playerOneMove = (event) => {\r\n\r\n        console.log('person turn')\r\n        console.log(person.player)\r\n        if(!person.player.moveIsLegal(event)) return;\r\n\r\n        const attack = person.player.attack(event)\r\n        computer.gameboard.receiveAttack(attack);\r\n        console.log(event, 'attacking')\r\n\r\n        person.player.turn = false;\r\n        computer.player.turn = true;\r\n        console.log(computer.player.turn)\r\n\r\n        computer.gameboard.render('gameboard', '.gameboard_one', false, true);\r\n        if(computer.gameboard.allSunk()){\r\n            console.log('gameover', computer.gameboard.allSunk())\r\n            return;\r\n        };\r\n\r\n        console.log('not gameover');\r\n    };\r\n\r\n    const _playerTwoMove = () => {\r\n        \r\n        computer.gameboard.pause('computer', true, false);\r\n        // Setting Time out to make computer feel more human.\r\n        setTimeout(() => {\r\n            \r\n            console.log('computer turn')\r\n\r\n            let computerMove = computer.player.computerMove();\r\n            console.log(person.gameboard.ships)\r\n\r\n            while(!computer.player.moveIsLegal(computerMove)) {\r\n                computerMove = computer.player.computerMove();\r\n                console.log('retrying because position taken');\r\n            };\r\n\r\n            console.log(computerMove);\r\n            computer.player.attack(computerMove);\r\n            person.gameboard.receiveAttack(computerMove);\r\n            person.gameboard.render('gameboard', '.gameboard_two', true, true);\r\n\r\n            computer.player.turn = false;\r\n            person.player.turn = true;\r\n\r\n            if(person.gameboard.allSunk()){\r\n                console.log('gameover', computer.gameboard.allSunk())\r\n                return;\r\n            };\r\n\r\n            computer.gameboard.pause('computer', false, false);\r\n            console.log('end turn')\r\n\r\n        }, 3000);\r\n            \r\n    };\r\n\r\n// board one = computer board\r\n// board two = person board\r\n    const run = (event) => {\r\n\r\n        // Person Turn\r\n        if(person.player.turn) {\r\n            _playerOneMove(event);\r\n        };\r\n\r\n\r\n        if(computer.player.turn) {\r\n            _playerTwoMove(event);\r\n        };\r\n\r\n    };\r\n\r\n    return {\r\n        run,\r\n        render,\r\n        person,\r\n        state,\r\n        setState,\r\n        initialize,\r\n    };\r\n};\r\n\r\nmodule.exports = game;\n\n//# sourceURL=webpack:///./src/controllers/game.js?");

/***/ }),

/***/ "./src/controllers/gameboard/gameboard.js":
/*!************************************************!*\
  !*** ./src/controllers/gameboard/gameboard.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const display = __webpack_require__(/*! ../utility/display */ \"./src/controllers/utility/display.js\");\r\nconst arrays = __webpack_require__(/*! ../utility/arrays */ \"./src/controllers/utility/arrays.js\");\r\n\r\nconst gameboard = () => {\r\n    const _ships = [];\r\n    const _misses = [];\r\n\r\n    const selectShip = (event) => {\r\n        let ships = document.querySelectorAll('.ship');\r\n        let ship = document.querySelector(`#${event.target.id}`);\r\n        ships.forEach(ship => ship.style.border = '0px');\r\n        ship.style.border = '3px solid lightseagreen';\r\n\r\n        return ship;\r\n    }\r\n\r\n    const placeShip = (shipFactory, location, position, length) => {\r\n        const ship = shipFactory;\r\n        ship.location = arrays.rangeGenerator(location, length, position);\r\n        console.log(ship.location)\r\n        ship.position = position;\r\n        _ships.push(ship);\r\n    };\r\n\r\n    const receiveAttack = (coordinates) => {\r\n       for(let i=0; i<_ships.length; i++) {\r\n            if(!_ships[i].hit(coordinates)) {\r\n                _misses.push(coordinates);\r\n                console.log('attack missed');\r\n            };\r\n       };\r\n    };\r\n\r\n    const allSunk = () => {\r\n        for(let i=0; i<_ships.length; i++) {\r\n            if(!_ships[i].isSunk()) return false;\r\n        };\r\n        return true;\r\n    };\r\n\r\n    const render = (view, identifier, disable, show) => {\r\n        display.clear(identifier);\r\n        display.set(view, identifier, disable);\r\n        display.update(_ships, _misses, identifier, show);\r\n    };\r\n\r\n    const pause = (identifier, disabled, show) => {\r\n        identifier == 'computer'\r\n            ? render('gameboard', '.gameboard_one', disabled, show)\r\n            : render('gameboard', '.gameboard_two', disabled, show);\r\n    };\r\n\r\n    return {\r\n        pause,\r\n        selectShip,\r\n        placeShip,\r\n        receiveAttack,\r\n        allSunk,\r\n        render,\r\n        get ships() {\r\n            return _ships;\r\n        }, \r\n        get misses() {\r\n            return _misses;\r\n        },\r\n    };\r\n};\r\n\r\nmodule.exports = gameboard;\n\n//# sourceURL=webpack:///./src/controllers/gameboard/gameboard.js?");

/***/ }),

/***/ "./src/controllers/player/player.js":
/*!******************************************!*\
  !*** ./src/controllers/player/player.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const arrays = __webpack_require__(/*! ../utility/arrays */ \"./src/controllers/utility/arrays.js\");\r\n\r\nconst Player = (name, type, turn=false) => {\r\n    let _turn = turn;\r\n    let _type = type;\r\n    let _moves = [];\r\n   \r\n    const swapTurns = () => {\r\n        _turn = _turn == true \r\n            ? false\r\n            : true\r\n    };\r\n\r\n    const moveIsLegal = (move) => {\r\n        for(array of _moves) {\r\n            if(arrays.match(move, array)) {\r\n                console.log('Oops! Position is taken!');\r\n                return false;\r\n            };\r\n        };\r\n        return true;\r\n    };\r\n\r\n    const computerMove = () => {\r\n        return [arrays.rng(), arrays.rng()];\r\n    };\r\n\r\n    const attack = (selected) => {\r\n        let move;\r\n        switch(_type){\r\n            case 'Person':\r\n                    _moves.push(selected);\r\n                    move = selected;\r\n                break;\r\n            case 'AI':\r\n                 _moves.push(computerMove);\r\n                 move = computerMove;\r\n                break;\r\n        }\r\n        return move;\r\n    };\r\n\r\n    return{\r\n        name, \r\n        attack,\r\n        moveIsLegal,\r\n        computerMove,\r\n        swapTurns,\r\n        get type() {\r\n            return _type;\r\n        },\r\n        set type(type) {\r\n            _type = type;\r\n        },\r\n        get turn() {\r\n            return _turn;\r\n        },\r\n        set turn(turn) {\r\n            _turn = turn;\r\n        },\r\n    };\r\n};\r\n\r\nmodule.exports = Player;\n\n//# sourceURL=webpack:///./src/controllers/player/player.js?");

/***/ }),

/***/ "./src/controllers/ship/ship.js":
/*!**************************************!*\
  !*** ./src/controllers/ship/ship.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const arrays = __webpack_require__(/*! ../utility/arrays */ \"./src/controllers/utility/arrays.js\");\r\n\r\nconst shipFactory = (length) => {\r\n    let _hits = [];\r\n    let _length = length;\r\n    let _position = '';\r\n    let _location = '';\r\n\r\n    const hit = (hitLocation) => {\r\n        for(let location of _location) {\r\n            if(arrays.match(hitLocation, location)) { \r\n                _hits.push(hitLocation);\r\n                console.log('Your ship has been hit, you idiot');\r\n                return true;\r\n            }; \r\n        };\r\n        \r\n        return false;\r\n    };\r\n    const isSunk = () => {\r\n       return _length == _hits.length;\r\n    };\r\n\r\n    return {\r\n        hit,\r\n        isSunk,\r\n        get length() {\r\n            return _length;\r\n        },\r\n        set length(length) {\r\n            _length = length;\r\n        }, \r\n        get location() {\r\n            return _location;\r\n        },\r\n        set location(coordinates) {\r\n            _location = coordinates;\r\n        },\r\n        get position() {\r\n            return _position;\r\n        },\r\n        set position(position) {\r\n            _position = position;\r\n        },\r\n        get hits() {\r\n            return _hits;\r\n        },\r\n    };\r\n};\r\n\r\nmodule.exports = shipFactory;\n\n//# sourceURL=webpack:///./src/controllers/ship/ship.js?");

/***/ }),

/***/ "./src/controllers/utility/arrays.js":
/*!*******************************************!*\
  !*** ./src/controllers/utility/arrays.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const generator = (start, end) => {\r\n    let newArray = [];\r\n    for(let i=start; i<end; i++) {\r\n        newArray.push(i);\r\n    };\r\n    return newArray;\r\n};\r\n\r\nconst match = (arrayOne, arrayTwo) => {\r\n    // Checks array length first\r\n    if(arrayOne.length !== arrayTwo.length) return false;\r\n    // Compares arrays\r\n    for(let i=0; i<arrayOne.length; i++) {\r\n        if(arrayOne[i] !== arrayTwo[i]) return false;\r\n    };\r\n    // Returns two if tests above do not pass;\r\n    return true;\r\n};\r\n\r\nconst range = (start, end) => {\r\n    return Array.apply(0, Array(end))\r\n        .map((element, index) => index + start);\r\n};\r\n\r\nconst rangeGenerator = (array, length, position) => {\r\n    let newArray = [];\r\n\tfor( let i = 0; i<length; i++) {\r\n  \tif(position == 'horizontal') {\r\n    \tnewArray.push([array[0] + i, array[1]]);\r\n    } else \r\n    if(position == 'vertical') {\r\n    \tnewArray.push([array[0], array[1] + i]);\r\n    };\r\n  };\r\n return newArray;\r\n};\r\n\r\nconst rng = () => Math.round(Math.random() * 9);\r\n\r\nmodule.exports = {\r\n    rangeGenerator,\r\n    generator,\r\n    match,\r\n    range,\r\n    rng,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/controllers/utility/arrays.js?");

/***/ }),

/***/ "./src/controllers/utility/display.js":
/*!********************************************!*\
  !*** ./src/controllers/utility/display.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const set = (view, identifier, disabled) => {\r\n    const main = __webpack_require__(/*! ../../views/main */ \"./src/views/main.js\");\r\n    const Gameboard = __webpack_require__(/*! ../../views/gameboard/gameboard */ \"./src/views/gameboard/gameboard.js\");\r\n    const game = __webpack_require__(/*! ../../views/game/game */ \"./src/views/game/game.js\");\r\n    const Setup = __webpack_require__(/*! ../../views/setup/setup */ \"./src/views/setup/setup.js\");\r\n\r\n    let gameboard = Gameboard.generate(disabled);\r\n    let setup = Setup.generate();\r\n\r\n    const displays = {\r\n        'setup': setup,\r\n        'main': main,\r\n        'game': game,\r\n        'gameboard': gameboard\r\n    };\r\n    const element = document.querySelector(identifier);\r\n    console.log(element)\r\n    element.appendChild(displays[view].cloneNode(true));\r\n};\r\n\r\nconst clear = (identifier) => {\r\n    const element = document.querySelector(identifier);\r\n    while(element.firstChild) {\r\n        element.removeChild(element.firstChild);\r\n    };\r\n};\r\n\r\nconst update = (ships, misses, identifier, show) => {\r\n    const gameboard = document.querySelector(identifier);\r\n    console.log(misses)\r\n    for(miss of misses) {\r\n        let [x, y] = miss;\r\n        const row = gameboard.querySelector(`#row-${y}`);\r\n        const column = row.querySelector(`#column-${x}`);\r\n        column.style.background = 'red';\r\n    }\r\n\r\n    ships.forEach(ship => {\r\n\r\n        const gameboard = document.querySelector(identifier);\r\n        if(ship.location && show) {\r\n            ship.location.forEach((location, i ) =>{\r\n                let [x,y] = location;\r\n                let row = gameboard.querySelector(`#row-${y}`);\r\n                let column = row.querySelector(`#column-${x}`);\r\n                column.style.background = 'lightseagreen';\r\n            });\r\n        };\r\n        ship.hits.forEach(hit => {\r\n            let [x, y] = hit;\r\n            let row = gameboard.querySelector(`#row-${y}`);\r\n            let column = row.querySelector(`#column-${x}`);\r\n            column.style.background = 'green';\r\n        });\r\n    });\r\n    \r\n};\r\n\r\n\r\n\r\nmodule.exports = { set, clear, update };\n\n//# sourceURL=webpack:///./src/controllers/utility/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./controllers/game */ \"./src/controllers/game.js\");\r\nconst ship = __webpack_require__(/*! ./controllers/ship/ship */ \"./src/controllers/ship/ship.js\");\r\nconst display = __webpack_require__(/*! ./controllers/utility/display */ \"./src/controllers/utility/display.js\");\r\nconst events = __webpack_require__(/*! ./controllers/events/events */ \"./src/controllers/events/events.js\");\r\nconst game = Game();\r\n\r\ngame.initialize();\r\ndisplay.set('main', '#content');\r\n\r\ndocument.addEventListener('click', () => events(event, game, ship));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/views/game/game.js":
/*!********************************!*\
  !*** ./src/views/game/game.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const gameboard = __webpack_require__(/*! ../gameboard/gameboard */ \"./src/views/gameboard/gameboard.js\");\r\n\r\nconst gameboardOne = document.createElement('div');\r\ngameboardOne.classList.add('gameboard_one');\r\n\r\nconst gameboardTwo = document.createElement('div');\r\ngameboardTwo.classList.add('gameboard_two');\r\n\r\nconst game = document.createElement('div');\r\ngame.classList.add('game');\r\n\r\ngameboardOne.appendChild(gameboard.generate());\r\ngameboardTwo.appendChild(gameboard.generate(true).cloneNode(true));\r\ngame.appendChild(gameboardOne);\r\ngame.appendChild(gameboardTwo);\r\n\r\nmodule.exports = game;\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/views/game/game.js?");

/***/ }),

/***/ "./src/views/gameboard/gameboard.js":
/*!******************************************!*\
  !*** ./src/views/gameboard/gameboard.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const generate = (disabled) => {\r\n    const board = document.createElement('div');\r\n    board.classList.add('gameboard');\r\n\r\n    for(let i=0; i<=9; i++){\r\n        const grid = document.createElement('div');\r\n        grid.classList.add('grid');\r\n        grid.setAttribute('data-row', i);\r\n        grid.id = `row-${i}`;\r\n        for(let i=0; i<=9; i++) {\r\n            const cell = document.createElement('div');\r\n            cell.classList.add('cell');\r\n            cell.setAttribute('data-column', i);\r\n            if(disabled) {\r\n                cell.style.pointerEvents = 'none';\r\n            };\r\n            cell.id = `column-${i}`;\r\n            grid.appendChild(cell);\r\n        };\r\n        board.appendChild(grid);\r\n    };\r\n\r\n    return board;\r\n};\r\n\r\n\r\n\r\nmodule.exports = { generate };\r\n\r\n\n\n//# sourceURL=webpack:///./src/views/gameboard/gameboard.js?");

/***/ }),

/***/ "./src/views/main.js":
/*!***************************!*\
  !*** ./src/views/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const mainContainer = document.createElement('div');\r\nmainContainer.innerText = 'main page';\r\nmainContainer.classList.add('main_container');\r\n\r\nconst start = document.createElement('div');\r\nstart.innerText ='Play';\r\nstart.classList.add('start');\r\nmainContainer.appendChild(start);\r\n\r\nmodule.exports = mainContainer;\n\n//# sourceURL=webpack:///./src/views/main.js?");

/***/ }),

/***/ "./src/views/setup/setup.js":
/*!**********************************!*\
  !*** ./src/views/setup/setup.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Edwin\\\\Desktop\\\\microverse\\\\javascript\\\\battleship_js\\\\src\\\\views\\\\setup\\\\setup.js'\");\n\n//# sourceURL=webpack:///./src/views/setup/setup.js?");

/***/ })

/******/ });