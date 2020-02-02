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

eval("const events = (event, game) => {\r\n    const item = event.target;\r\n    if(event.target.matches('.cell')) {\r\n        const move = [\r\n            parseInt(item.id), \r\n            parseInt(item.parentNode.id)\r\n        ];\r\n        game.run(move);\r\n    };\r\n};\r\n\r\nmodule.exports = events;\n\n//# sourceURL=webpack:///./src/controllers/events/events.js?");

/***/ }),

/***/ "./src/controllers/game.js":
/*!*********************************!*\
  !*** ./src/controllers/game.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Gameboard = __webpack_require__(/*! ./gameboard/gameboard */ \"./src/controllers/gameboard/gameboard.js\");\r\nconst Player = __webpack_require__(/*! ./player/player */ \"./src/controllers/player/player.js\");\r\nconst Ship = __webpack_require__(/*! ./ship/ship */ \"./src/controllers/ship/ship.js\");\r\n\r\nconst game = (event) => {\r\n\r\n    const initialize = () => {\r\n        \r\n        person = { \r\n            player: Player('Person', 'Person', true),\r\n            gameboard: Gameboard(),\r\n        };\r\n\r\n        computer = {\r\n            player: Player('AI', 'AI', false),\r\n            gameboard: Gameboard(),\r\n        };\r\n\r\n        person.gameboard.placeShip(Ship(1), [1,1]);\r\n        computer.gameboard.placeShip(Ship(1), [1,1]);\r\n        computer.gameboard.placeShip(Ship(1), [2,2]);\r\n\r\n    };\r\n    \r\n    const run = (event) => {\r\n        if(!person.player.moveIsLegal(event)) return;\r\n    \r\n        const attack = person.player.attack(event)\r\n        computer.gameboard.receiveAttack(attack);\r\n        console.log(event, 'attacking')\r\n\r\n        person.player.swapTurns();\r\n        computer.player.swapTurns();\r\n\r\n        if(computer.gameboard.allSunk()){\r\n            console.log('gameover', computer.gameboard.allSunk())\r\n            return;\r\n        };\r\n        console.log('not gameover')\r\n\r\n        let computerMove = computer.player.computerMove();\r\n\r\n        while(!computer.player.moveIsLegal(computerMove)) {\r\n            computerMove = computer.player.computerMove();\r\n            console.log('retrying because position taken');\r\n        };\r\n\r\n        console.log(computerMove);\r\n        computer.player.attack(computerMove);\r\n        person.gameboard.receiveAttack(computerMove);\r\n        computer.player.swapTurns();\r\n\r\n        if(person.gameboard.allSunk()){\r\n            console.log('gameover', computer.gameboard.allSunk())\r\n            return;\r\n        }\r\n    };\r\n\r\n    return {\r\n        run,\r\n        initialize,\r\n    };\r\n};\r\n\r\nmodule.exports = game;\n\n//# sourceURL=webpack:///./src/controllers/game.js?");

/***/ }),

/***/ "./src/controllers/gameboard/gameboard.js":
/*!************************************************!*\
  !*** ./src/controllers/gameboard/gameboard.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const gameboard = () => {\r\n    const _ships = [];\r\n    const _misses = [];\r\n    const placeShip = (shipFactory, location) => {\r\n        const ship = shipFactory;\r\n        ship.location = location;\r\n        _ships.push(ship);\r\n    };\r\n    const receiveAttack = (coordinates) => {\r\n       for(let i=0; i<_ships.length; i++) {\r\n            if(!_ships[i].hit(coordinates)) {\r\n                _misses.push(coordinates);\r\n                console.log('attack missed');\r\n            };\r\n       };\r\n    };\r\n    const allSunk = () => {\r\n        for(let i=0; i<_ships.length; i++) {\r\n            if(!_ships[i].isSunk()) return false;\r\n        };\r\n        return true;\r\n    };\r\n\r\n    return {\r\n        placeShip,\r\n        receiveAttack,\r\n        allSunk,\r\n        get ships() {\r\n            return _ships;\r\n        }, \r\n        get misses() {\r\n            return _misses;\r\n        },\r\n    };\r\n};\r\n\r\nmodule.exports = gameboard;\n\n//# sourceURL=webpack:///./src/controllers/gameboard/gameboard.js?");

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

eval("const arrays = __webpack_require__(/*! ../utility/arrays */ \"./src/controllers/utility/arrays.js\");\r\n\r\nconst shipFactory = (length) => {\r\n    let _hits = [];\r\n    let _length = length;\r\n    let _position = '';\r\n    let _location = '';\r\n\r\n    const hit = (hitLocation) => {\r\n        if(arrays.match(hitLocation, _location)) { \r\n            _hits.push(hitLocation);\r\n            console.log('Your ship has been hit, you idiot');\r\n            return true;\r\n        }; \r\n        \r\n        return false;\r\n    };\r\n    const isSunk = () => {\r\n       return _length == _hits.length;\r\n    };\r\n\r\n    return {\r\n        hit,\r\n        isSunk,\r\n        get length() {\r\n            return _length;\r\n        },\r\n        set length(length) {\r\n            _length = length;\r\n        }, \r\n        get location() {\r\n            return _location;\r\n        },\r\n        set location(coordinates) {\r\n            _location = coordinates;\r\n        },\r\n        get position() {\r\n            return _position;\r\n        },\r\n        set position(position) {\r\n            _position = position;\r\n        },\r\n        get hits() {\r\n            return _hits;\r\n        }\r\n    };\r\n};\r\n\r\nmodule.exports = shipFactory;\n\n//# sourceURL=webpack:///./src/controllers/ship/ship.js?");

/***/ }),

/***/ "./src/controllers/utility/arrays.js":
/*!*******************************************!*\
  !*** ./src/controllers/utility/arrays.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const generator = (start, end) => {\r\n    let newArray = [];\r\n    for(let i=start; i<end; i++) {\r\n        newArray.push(i);\r\n    };\r\n    return newArray;\r\n};\r\n\r\nconst match = (arrayOne, arrayTwo) => {\r\n    // Checks array length first\r\n    if(arrayOne.length !== arrayTwo.length) return false;\r\n    // Compares arrays\r\n    for(let i=0; i<arrayOne.length; i++) {\r\n        if(arrayOne[i] !== arrayTwo[i]) return false;\r\n    };\r\n    // Returns two if tests above do not pass;\r\n    return true;\r\n};\r\n\r\nconst rng = () => Math.round(Math.random() * 9);\r\n\r\nmodule.exports = {\r\n    generator,\r\n    match,\r\n    rng,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/controllers/utility/arrays.js?");

/***/ }),

/***/ "./src/controllers/utility/display.js":
/*!********************************************!*\
  !*** ./src/controllers/utility/display.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const display = () => {\r\n    const set = (view, identifier) => {\r\n        const main = __webpack_require__(/*! ../../views/main */ \"./src/views/main.js\");\r\n        const gameboard = __webpack_require__(/*! ../../views/gameboard/gameboard */ \"./src/views/gameboard/gameboard.js\");\r\n        const displays = {\r\n            'main': main,\r\n            'gameboard': gameboard\r\n        };\r\n        const element = document.querySelector(identifier);\r\n        element.appendChild(displays[view]);\r\n    };\r\n    const clear = (identifier) => {\r\n        const element = document.querySelector(identifier);\r\n        while(element.firstChild) {\r\n            element.removeChild(element.firstChild);\r\n        };\r\n    };\r\n\r\n    return { clear, set };\r\n};\r\n\r\nmodule.exports = display;\n\n//# sourceURL=webpack:///./src/controllers/utility/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./controllers/game */ \"./src/controllers/game.js\");\r\nconst Display = __webpack_require__(/*! ./controllers/utility/display */ \"./src/controllers/utility/display.js\");\r\nconst events = __webpack_require__(/*! ./controllers/events/events */ \"./src/controllers/events/events.js\");\r\nconst game = Game();\r\nconst display = Display();\r\n\r\ndisplay.set('gameboard', '#content');\r\ngame.initialize();\r\n\r\ndocument.addEventListener('click', () => events(event, game));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/views/gameboard/gameboard.js":
/*!******************************************!*\
  !*** ./src/views/gameboard/gameboard.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const container = document.createElement('div');\r\ncontainer.classList.add('container');\r\n\r\nconst gameboard = document.createElement('div');\r\ngameboard.classList.add('gameboard');\r\n\r\nfor(let i=0; i<=9; i++){\r\n    const grid = document.createElement('div');\r\n    grid.classList.add('grid');\r\n    grid.id = i;\r\n    for(let i=0; i<=9; i++) {\r\n        const cell = document.createElement('div');\r\n        cell.classList.add('cell');\r\n        cell.id = i;\r\n        grid.appendChild(cell);\r\n    };\r\n    gameboard.appendChild(grid);\r\n};\r\ncontainer.appendChild(gameboard);\r\n\r\nmodule.exports = container;\r\n\r\n\n\n//# sourceURL=webpack:///./src/views/gameboard/gameboard.js?");

/***/ }),

/***/ "./src/views/main.js":
/*!***************************!*\
  !*** ./src/views/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const mainContainer = document.createElement('div');\r\nmainContainer.innerText = 'main page';\r\nmainContainer.classList.add('main_container');\r\n\r\nmodule.exports = mainContainer;\n\n//# sourceURL=webpack:///./src/views/main.js?");

/***/ })

/******/ });