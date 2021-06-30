"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const progress_1 = require("../progress");
const react_1 = require("react");
const styles_1 = require("./styles");
const Steps = ({ ids, index, progress, color, unfilledColor, }) => {
    return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.wrapper }, ids.map((i) => (react_1.default.createElement(progress_1.default, { key: `${i}${i === index && ':active'}`, completed: i < index, progress: i === index ? progress : null, color: color, unfilledColor: unfilledColor })))));
};
exports.default = Steps;
