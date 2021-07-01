'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = require('react');
const Context = react_1.default.createContext({
    duration: 15000,
    onNext: () => { },
    onPrev: () => { },
    onCollectionEnd: () => { },
    slideIndex: 0,
});
exports.default = Context;
