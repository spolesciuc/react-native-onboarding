'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const react_native_1 = require('react-native');
const proportions_1 = __importDefault(require('../../utils/proportions'));
const styles = react_native_1.StyleSheet.create({
  wrapper: Object.assign({}, proportions_1.default.slideSize),
});
exports.default = styles;
