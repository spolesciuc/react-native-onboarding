"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = require("react");
const styles_1 = require("./styles");
const Progress = ({ completed, progress }) => {
    const value = react_1.default.useMemo(() => {
        if (completed) {
            return 1;
        }
        const _value = Math.round(progress * 100) / 100;
        if (_value < 0) {
            console.warn('Progress is less than 0');
            return 0;
        }
        else if (_value > 1) {
            console.warn('Progress is greater than 0');
            return 1;
        }
        return _value;
    }, [completed, progress]);
    const styled = react_1.default.useMemo(() => {
        return react_native_1.StyleSheet.flatten([
            styles_1.default.progress,
            {
                flex: value,
            },
        ]);
    }, [value]);
    return (react_1.default.createElement(react_native_1.View, { style: [styles_1.default.wrapper] },
        react_1.default.createElement(react_native_1.Animated.View, { style: styled })));
};
exports.default = Progress;
