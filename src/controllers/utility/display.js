const display = () => {
    const set = (view, identifier) => {
        const main = require('../../views/main');
        const gameboard = require('../../views/gameboard/gameboard');
        const displays = {
            'main': main,
            'gameboard': gameboard
        };
        const element = document.querySelector(identifier);
        element.appendChild(displays[view]);
    };
    const clear = (identifier) => {
        const element = document.querySelector(identifier);
        while(element.firstChild) {
            element.removeChild(element.firstChild);
        };
    };

    return { clear, set };
};

module.exports = display;