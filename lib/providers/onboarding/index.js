"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const collection_1 = require("../collection");
const context_1 = require("./context");
const react_1 = require("react");
const OnboardingProvider = ({ children, duration = 15000, }) => {
    const [collectionId, setSelectionId] = react_1.default.useState(undefined);
    const [isVisible, setIsVisible] = react_1.default.useState(false);
    const onChangeCollectionId = react_1.default.useCallback((nextCollectionId) => {
        setSelectionId(nextCollectionId);
    }, []);
    const onShow = react_1.default.useCallback(() => {
        setIsVisible(true);
    }, []);
    const onHide = react_1.default.useCallback(() => {
        setIsVisible(false);
    }, []);
    const value = react_1.default.useMemo(() => {
        return {
            isVisible,
            onShow,
            onHide,
            collectionId,
            onChangeCollectionId,
        };
    }, [collectionId, isVisible, onChangeCollectionId, onHide, onShow]);
    return (react_1.default.createElement(context_1.default.Provider, { value: value },
        react_1.default.createElement(collection_1.default, { duration: duration }, children)));
};
exports.default = OnboardingProvider;
