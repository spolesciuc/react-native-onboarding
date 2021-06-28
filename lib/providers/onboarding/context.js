"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Context = react_1.default.createContext({
    isVisible: false,
    collectionId: undefined,
    onShow: () => { },
    onChangeCollectionId: () => { },
    onHide: () => { },
});
exports.default = Context;
