"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const collection_1 = __importDefault(require("../../components/collection"));
const context_1 = __importDefault(require("./context"));
const OnboardingProvider = ({ duration = 15000, isVisible, onShow, onHide, onNext, onPrev, onCollectionEnd, slideIndex, currentCollection, }) => {
    const value = React.useMemo(() => {
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
    return (React.createElement(context_1.default.Provider, { value: value }, currentCollection ? (React.createElement(collection_1.default, Object.assign({}, currentCollection, { index: slideIndex }))) : null));
};
exports.default = OnboardingProvider;
