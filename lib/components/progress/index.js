'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const react_native_1 = require('react-native');
const react_1 = require('react');
const styles_1 = require('./styles');
const Progress = ({ completed, progress }) => {
    const value = react_1.default.useMemo(() => {
        if (completed) {
            return 1;
        }
        if (progress < 0) {
            console.warn('Progress is less than 0');
            return 0;
        }
        else if (progress > 0) {
            console.warn('Progress is greater than 0');
            return 1;
        }
        return Math.round(progress * 100) / 100;
    }, [completed, progress]);
    const styled = react_1.default.useMemo(() => {
        return react_native_1.StyleSheet.flatten([
            {
                flex: value,
            },
        ]);
    }, [value]);
    return (react_1.default.createElement(react_native_1.View, { style: [
            styles_1.default.wrapper,
            {
                backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
            },
        ] },
        react_1.default.createElement(react_native_1.View, { style: styled })));
};
exports.default = Progress;
