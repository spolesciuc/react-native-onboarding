"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("./context");
const react_1 = require("react");
const CollectionProvider = ({ children }) => {
    const [isPaused, setIsPaused] = react_1.default.useState(false);
    const [slideProgress] = react_1.default.useState(0);
    const onPauseStart = react_1.default.useCallback(() => {
        setIsPaused(true);
    }, []);
    const onPauseEnd = react_1.default.useCallback(() => {
        setIsPaused(false);
    }, []);
    const onNext = react_1.default.useCallback(() => {
        console.log('@onNext');
    }, []);
    const onPrev = react_1.default.useCallback(() => {
        console.log('@onPrev');
    }, []);
    const onCollectionEnd = react_1.default.useCallback(() => { }, []);
    console.log(isPaused, '@isPaused');
    const value = react_1.default.useMemo(() => {
        return {
            isPaused,
            onPauseStart,
            onPauseEnd,
            onNext,
            onPrev,
            slideProgress,
            onCollectionEnd,
        };
    }, [
        isPaused,
        onCollectionEnd,
        onNext,
        onPauseEnd,
        onPauseStart,
        onPrev,
        slideProgress,
    ]);
    return react_1.default.createElement(context_1.default.Provider, { value: value }, children);
};
exports.default = CollectionProvider;
