"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const collection_1 = require("../../components/collection");
const context_1 = require("./context");
const react_1 = require("react");
const OnboardingProvider = ({ duration = 15000, isVisible, onShow, onHide, onNext, onPrev, onCollectionEnd, slideIndex, currentCollection, }) => {
    const value = react_1.default.useMemo(() => {
        return {
            duration,
            isVisible,
            onShow,
            onHide,
            onNext,
            onPrev,
            onCollectionEnd,
            slideIndex,
        };
    }, [
        duration,
        isVisible,
        onCollectionEnd,
        onHide,
        onNext,
        onPrev,
        onShow,
        slideIndex,
    ]);
    return (react_1.default.createElement(context_1.default.Provider, { value: value }, currentCollection ? (react_1.default.createElement(collection_1.default, Object.assign({}, currentCollection, { index: slideIndex }))) : null));
};
exports.default = OnboardingProvider;
