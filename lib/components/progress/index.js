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
const styles_1 = __importDefault(require("./styles"));
const Progress = ({ completed, progress, height = 2, color = 'red', unfilledColor = 'white', }) => {
    const lineStyled = React.useMemo(() => {
        let stateStyle = {
            flex: 0,
        };
        if (completed) {
            stateStyle = {
                flex: 1,
            };
        }
        else if (progress) {
            stateStyle = {
                flex: progress,
            };
        }
        return react_native_1.StyleSheet.flatten([
            styles_1.default.progress,
            stateStyle,
            {
                backgroundColor: color,
            },
        ]);
    }, [color, completed, progress]);
    const styled = React.useMemo(() => {
        return react_native_1.StyleSheet.flatten([
            styles_1.default.wrapper,
            {
                height,
                backgroundColor: unfilledColor,
                borderRadius: height / 2,
            },
        ]);
    }, [height, unfilledColor]);
    return (React.createElement(react_native_1.View, { style: styled },
        React.createElement(react_native_1.Animated.View, { style: lineStyled })));
};
exports.default = Progress;
