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
        left: 0,
    },
    rightContainer: {
        right: 0,
    },
    safeArea: {
        flex: 1,
        justifyContent: 'space-between',
    },
    image: Object.assign(Object.assign({}, proportions_1.default.slideSize), { position: 'absolute' }),
});
exports.default = styles;
