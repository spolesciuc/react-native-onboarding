"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Context = react_1.default.createContext({
    duration: 15000,
    isVisible: false,
    slideIndex: 0,
    onShow: () => { },
    onHide: () => { },
    onNext: () => { },
    onPrev: () => { },
    onCollectionEnd: () => { },
});
exports.default = Context;
