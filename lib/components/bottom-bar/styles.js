'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const react_native_1 = require('react-native');
const styles = react_native_1.StyleSheet.create({
    wrapper: Object.assign({ backgroundColor: 'green' }, react_native_1.Platform.select({
        android: {
            top: -25,
        },
    })),
    innerWrapper: { backgroundColor: 'green' },
});
exports.default = styles;
