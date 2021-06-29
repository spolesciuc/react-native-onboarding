'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const react_native_1 = require('react-native');
const proportions_1 = require('../../utils/proportions');
const styles = react_native_1.StyleSheet.create({
    wrapper: {
        zIndex: 1,
        height: 3,
        flexDirection: 'row',
        paddingHorizontal: 26,
        width: proportions_1.default.slideSize.width,
    },
});
exports.default = styles;
