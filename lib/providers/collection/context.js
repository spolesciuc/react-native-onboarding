"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = require("react");
const Context = react_1.default.createContext({
    isPaused: false,
    onPauseStart: () => { },
    onPauseEnd: () => { },
    onNext: () => { },
    onPrev: () => { },
    progress: new react_native_1.Animated.Value(0),
    onCollectionEnd: () => { },
    slideIndex: 0,
});
exports.default = Context;
