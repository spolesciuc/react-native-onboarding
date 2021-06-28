"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Context = react_1.default.createContext({
    isPaused: false,
    onPauseStart: () => { },
    onPauseEnd: () => { },
    onNext: () => { },
    onPrev: () => { },
    slideProgress: 0,
    onCollectionEnd: () => { },
});
exports.default = Context;
