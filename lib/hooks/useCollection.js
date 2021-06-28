"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("../providers/collection/context");
const react_1 = require("react");
const useCollection = () => {
    const context = react_1.default.useContext(context_1.default);
    if (!context) {
        throw new Error('useCollection can not be called outside CollectionProvider');
    }
    const { onPauseStart, onPauseEnd, onNext, onPrev, slideProgress } = context;
    return { onPauseStart, onPauseEnd, onNext, onPrev, slideProgress };
};
exports.default = useCollection;
