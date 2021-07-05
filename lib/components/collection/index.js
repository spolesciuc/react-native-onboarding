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
const slide_1 = __importDefault(require("../slide"));
const styles_1 = __importDefault(require("./styles"));
const Collection = ({ slides = [], index = 0, color, unfilledColor, height, }) => {
    const ids = React.useMemo(() => {
        return slides.map((_, i) => i);
    }, [slides]);
    return (React.createElement(react_native_1.View, { style: styles_1.default.wrapper },
        React.createElement(slide_1.default, { key: index, stepIds: ids, source: slides[index].source, renderBottomBar: slides[index].renderBottomBar, color: color, unfilledColor: unfilledColor, height: height })));
};
exports.default = Collection;
