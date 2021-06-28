"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = require("react");
const slide_1 = require("../slide");
const Collection = ({ slides = [], startIndex = 0 }) => {
    const [index] = react_1.default.useState(startIndex);
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(slide_1.default, { source: slides[index].source })));
};
exports.default = Collection;
