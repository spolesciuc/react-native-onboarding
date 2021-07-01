'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const react_native_1 = require('react-native');
const react_1 = require('react');
const slide_1 = require('../slide');
const styles_1 = require('./styles');
const Collection = ({ slides = [], index = 0 }) => {
    const ids = react_1.default.useMemo(() => {
        return slides.map((_, i) => i);
    }, [slides]);
    return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.wrapper },
        react_1.default.createElement(slide_1.default, { key: index, stepIds: ids, source: slides[index].source, renderBottomBar: slides[index].renderBottomBar })));
};
exports.default = Collection;
