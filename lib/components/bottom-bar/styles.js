"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_iphone_x_helper_1 = require("react-native-iphone-x-helper");
const react_native_1 = require("react-native");
const proportions_1 = require("../../utils/proportions");
const styles = react_native_1.StyleSheet.create({
    wrapper: Object.assign(Object.assign({ backgroundColor: 'green', zIndex: 999 }, react_native_1.Platform.select({
        android: {
            top: -25,
        },
    })), { marginBottom: react_native_iphone_x_helper_1.getBottomSpace(), position: 'absolute', bottom: 0, width: proportions_1.default.slideSize.width }),
    innerWrapper: { backgroundColor: 'green' },
});
exports.default = styles;
