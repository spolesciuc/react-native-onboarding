'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const react_native_1 = require('react-native');
const react_1 = require('react');
const styles_1 = require('./styles');
const BottomBar = ({ render }) => {
    return react_1.default.createElement(react_native_1.View, { style: styles_1.default.wrapper }, render());
};
exports.default = BottomBar;
