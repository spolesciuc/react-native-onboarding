"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = require("react");
const slide_1 = require("../slide");
const Collection = ({ slides = [] }) => {
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(slide_1.default, { source: slides[0].source, renderBottomBar: slides[0].renderBottomBar })));
};
exports.default = Collection;
