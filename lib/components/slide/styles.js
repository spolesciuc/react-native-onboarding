"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const proportions_1 = require("../../utils/proportions");
const styles = react_native_1.StyleSheet.create({
    wrapper: Object.assign({}, proportions_1.default.slideSize),
    sideContainer: {
        width: proportions_1.default.slideSize.width / 2,
        height: proportions_1.default.slideSize.height,
        position: 'absolute',
        zIndex: 1,
        elevation: 1,
    },
    leftContainer: {
        // backgroundColor: 'blue',
        left: 0,
    },
    rightContainer: {
        // backgroundColor: 'red',
        right: 0,
    },
});
exports.default = styles;
