"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
class Proportions {
    static get slideSize() {
        return {
            height: react_native_1.Dimensions.get('window').height,
            width: react_native_1.Dimensions.get('window').width,
        };
    }
}
exports.default = Proportions;
