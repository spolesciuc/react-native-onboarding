"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const progress_1 = __importDefault(require("../progress"));
const styles_1 = __importDefault(require("./styles"));
const useProgress_1 = __importDefault(require("../../hooks/useProgress"));
const Steps = ({ ids, index, color, unfilledColor, isPaused, duration, ready, onEndAnimate, height, }) => {
    const { progress } = useProgress_1.default(isPaused, duration, ready, onEndAnimate);
    return (React.createElement(react_native_1.View, { style: styles_1.default.wrapper }, ids.map((i) => (React.createElement(progress_1.default, { key: `${i}${i === index && ':active'}`, completed: i < index, progress: i === index ? progress : null, color: color, unfilledColor: unfilledColor, height: height })))));
};
exports.default = Steps;
