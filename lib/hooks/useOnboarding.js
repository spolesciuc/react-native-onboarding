"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = __importDefault(require("../providers/onboarding/context"));
const react_1 = __importDefault(require("react"));
const useOnboarding = () => {
    const context = react_1.default.useContext(context_1.default);
    if (!context) {
        throw new Error('useOnboarding can not be called outside OnboardingProvider');
    }
    const { isVisible, onShow, onHide, onCollectionEnd } = context;
    return {
        isVisible,
        onShow,
        onHide,
        onCollectionEnd,
    };
};
exports.default = useOnboarding;
