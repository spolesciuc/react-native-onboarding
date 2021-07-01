'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const context_1 = require('../providers/onboarding/context');
const react_1 = require('react');
const useOnboarding = () => {
    const context = react_1.default.useContext(context_1.default);
    if (!context) {
        throw new Error('useOnboarding can not be called outside OnboardingProvider');
    }
    const { isVisible, onShow, onHide, onChangeCollectionId } = context;
    return {
        isVisible,
        onShow,
        onHide,
        onChangeCollectionId,
    };
};
exports.default = useOnboarding;
