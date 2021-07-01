'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const react_native_1 = require('react-native');
const react_1 = require('react');
const styles_1 = require('./styles');
const Progress = ({ completed, progress }) => {
    const styled = react_1.default.useMemo(() => {
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
        return react_native_1.StyleSheet.flatten([styles_1.default.progress, stateStyle]);
    }, [completed, progress]);
    return (react_1.default.createElement(react_native_1.View, { style: [styles_1.default.wrapper] },
        react_1.default.createElement(react_native_1.Animated.View, { style: styled })));
};
exports.default = Progress;
