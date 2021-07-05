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
const onboarding_1 = __importDefault(require("../../providers/onboarding"));
const Onboarding = ({ data, duration, color, unfilledColor, height }, forwardedRef) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [collectionId, setSelectionId] = React.useState(undefined);
    const [currentCollection, setCurrentCollection] = React.useState();
    const [slideIndex, setSlideIndex] = React.useState(0);
    const onShow = React.useCallback((nextCollectionId) => {
        setIsVisible(true);
        setSelectionId(nextCollectionId);
    }, []);
    const onHide = React.useCallback(() => {
        setIsVisible(false);
        setSelectionId(undefined);
    }, []);
    const onPrev = React.useCallback(() => {
        const prevIndex = slideIndex - 1;
        if (prevIndex >= 0) {
            setSlideIndex(prevIndex);
        }
    }, [slideIndex]);
    const onNext = React.useCallback(() => {
        const nextIndex = slideIndex + 1;
        const maxIndex = (currentCollection === null || currentCollection === void 0 ? void 0 : currentCollection.slides.length) || 0;
        if (nextIndex < maxIndex) {
            setSlideIndex(nextIndex);
        }
    }, [currentCollection === null || currentCollection === void 0 ? void 0 : currentCollection.slides.length, slideIndex]);
    const onCollectionEnd = React.useCallback(() => {
        console.log('@onCollectionEnd');
    }, []);
    React.useEffect(() => {
        const current = data.find((x) => x.id === collectionId);
        setCurrentCollection(current);
        setSlideIndex((current === null || current === void 0 ? void 0 : current.startIndex) || 0);
    }, [collectionId, data]);
    React.useEffect(() => {
        const id = data.length > 0 ? data[0].id : undefined;
        setSelectionId(id);
    }, [data]);
    React.useImperativeHandle(forwardedRef, () => ({
        onHide() {
            onHide();
        },
        onShow(id) {
            onShow(id);
        },
        onPrev() {
            onPrev();
        },
        onNext() {
            onNext();
        },
    }));
    return (React.createElement(onboarding_1.default, { duration: duration, collections: data, isVisible: isVisible, onShow: onShow, onHide: onHide, slideIndex: slideIndex, onNext: onNext, onPrev: onPrev, onCollectionEnd: onCollectionEnd, currentCollection: currentCollection, color: color, unfilledColor: unfilledColor, height: height }));
};
exports.default = React.forwardRef(Onboarding);
