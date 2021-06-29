"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = require("react");
const slide_1 = require("../slide");
const Collection = ({ slides = [] }) => {
    const ids = react_1.default.useMemo(() => {
        return slides.map((_, i) => i);
    }, [slides]);
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(slide_1.default, { ids: ids, source: slides[0].source, renderBottomBar: slides[0].renderBottomBar })));
};
exports.default = Collection;
