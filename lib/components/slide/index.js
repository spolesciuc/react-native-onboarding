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
const react_native_1 = require("react-native");
const bottom_bar_1 = __importDefault(require("../bottom-bar"));
const gesture_1 = __importDefault(require("../gesture"));
const steps_1 = __importDefault(require("../steps"));
const styles_1 = __importDefault(require("./styles"));
const useCollection_1 = __importDefault(require("../../hooks/useCollection"));
const Slide = ({ source, renderBottomBar, stepIds }) => {
    const [isPaused, setIsPaused] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const { onPrev, onNext, slideIndex, duration } = useCollection_1.default();
    const [ready, setReady] = React.useState(false);
    const [start, setStart] = React.useState(new Date());
    const onPauseStart = React.useCallback(() => {
        setIsPaused(true);
    }, []);
    const onPauseEnd = React.useCallback(() => {
        setIsPaused(false);
    }, []);
    const handleProgressEnd = React.useCallback(() => {
        onNext();
    }, [onNext]);
    const handleLoadStart = React.useCallback(() => {
        setLoading(true);
    }, []);
    const handleLoadEnd = React.useCallback(() => {
        setLoading(false);
        setReady(true);
    }, []);
    const handlePrev = React.useCallback(() => {
        const timeDiff = new Date().getTime() - start.getTime();
        if (timeDiff > duration / 5) {
            setStart(new Date());
        }
        else {
            onPrev();
        }
    }, [duration, onPrev, start]);
    const handleNext = React.useCallback(() => {
        onNext();
    }, [onNext]);
    const onSwipeLeft = React.useCallback(() => {
        console.log('@onSwipeLeft');
        handleNext();
    }, [handleNext]);
    const onSwipeRight = React.useCallback(() => {
        console.log('@onSwipeRight');
        handlePrev();
    }, [handlePrev]);
    console.log('loading', loading);
    return (React.createElement(react_native_1.View, { style: styles_1.default.wrapper },
        React.createElement(react_native_1.Image, { source: source, onLoadStart: handleLoadStart, onLoadEnd: handleLoadEnd, style: styles_1.default.image }),
        React.createElement(gesture_1.default, { onSwipeLeft: onSwipeLeft, onSwipeRight: onSwipeRight },
            React.createElement(react_native_1.SafeAreaView, { style: styles_1.default.safeArea },
                React.createElement(steps_1.default, { key: start.toISOString(), index: slideIndex, color: 'red', unfilledColor: 'blue', ids: stepIds, isPaused: isPaused, ready: ready, duration: duration, onEndAnimate: handleProgressEnd }),
                React.createElement(react_native_1.View, { style: styles_1.default.content },
                    React.createElement(react_native_1.Pressable, { style: [styles_1.default.sideContainer, styles_1.default.leftContainer], onPress: handlePrev, onLongPress: onPauseStart, onPressOut: onPauseEnd, delayLongPress: 300 }),
                    React.createElement(react_native_1.Pressable, { style: [styles_1.default.sideContainer, styles_1.default.rightContainer], onPress: handleNext, onLongPress: onPauseStart, onPressOut: onPauseEnd, delayLongPress: 300 })),
                renderBottomBar ? React.createElement(bottom_bar_1.default, { render: renderBottomBar }) : null))));
};
exports.default = Slide;
