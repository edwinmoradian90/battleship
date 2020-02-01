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

/***/ "./src/controllers/ship/ship.js":
/*!**************************************!*\
  !*** ./src/controllers/ship/ship.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const arrays = __webpack_require__(/*! ../utility/arrays */ \"./src/controllers/utility/arrays.js\");\r\n\r\nconst shipFactory = (length) => {\r\n    let _hits = [];\r\n    let _length = length;\r\n    let _location = '';\r\n    const hit = (hitLocation) => {\r\n        if(arrays.match(hitLocation, _location)) { \r\n            _hits.push(hitLocation);\r\n            return true;\r\n        }; \r\n        \r\n        return false;\r\n    };\r\n    const isSunk = () => {\r\n       return _length == _hits.length;\r\n    };\r\n\r\n    return {\r\n        hit,\r\n        isSunk,\r\n        get length() {\r\n            return _length;\r\n        },\r\n        set length(length) {\r\n            _length = length;\r\n        }, \r\n        get location() {\r\n            return _location;\r\n        },\r\n        set location(coordinates) {\r\n            _location = coordinates;\r\n        },\r\n        get hits() {\r\n            return _hits;\r\n        }\r\n    };\r\n};\r\n\r\nmodule.exports = shipFactory;\n\n//# sourceURL=webpack:///./src/controllers/ship/ship.js?");

/***/ }),

/***/ "./src/controllers/utility/arrays.js":
/*!*******************************************!*\
  !*** ./src/controllers/utility/arrays.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const generator = (start, end) => {\r\n    let newArray = [];\r\n    for(let i=start; i<end; i++) {\r\n        newArray.push(i);\r\n    };\r\n    return newArray;\r\n};\r\n\r\nconst match = (arrayOne, arrayTwo) => {\r\n    // Checks array length first\r\n    if(arrayOne.length !== arrayTwo.length) return false;\r\n    // Compares arrays\r\n    for(let i=0; i<arrayOne.length; i++) {\r\n        if(arrayOne[i] !== arrayTwo[i]) return false;\r\n    };\r\n    // Returns two if tests above do not pass;\r\n    return true;\r\n};\r\n\r\nconst rng = () => Math.round(Math.random() * 9);\r\n\r\nmodule.exports = {\r\n    generator,\r\n    match,\r\n    rng,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/controllers/utility/arrays.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const shipFactory = __webpack_require__(/*! ./controllers/ship/ship */ \"./src/controllers/ship/ship.js\");\r\nconst arrays = __webpack_require__(/*! ./controllers/utility/arrays */ \"./src/controllers/utility/arrays.js\");\r\n\r\nconsole.log(arrays.rng(1,9))\r\nconst ship = shipFactory(4);\r\nship.location = [1,1];\r\nconsole.log(ship)\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });