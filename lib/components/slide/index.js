'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const react_native_1 = require('react-native');
const bottom_bar_1 = require('../bottom-bar');
const react_1 = require('react');
const steps_1 = require('../steps');
const styles_1 = require('./styles');
const useCollection_1 = require('../../hooks/useCollection');
const Slide = ({ source, renderBottomBar, stepIds }) => {
    const [isPaused, setIsPaused] = react_1.default.useState(false);
    const [, setLoading] = react_1.default.useState(false);
    const { onPrev, onNext, slideIndex, duration } = useCollection_1.default();
    const [ready, setReady] = react_1.default.useState(false);
    const [start, setStart] = react_1.default.useState(new Date());
    const onPauseStart = react_1.default.useCallback(() => {
        setIsPaused(true);
    }, []);
    const onPauseEnd = react_1.default.useCallback(() => {
        setIsPaused(false);
    }, []);
    const handleProgressEnd = react_1.default.useCallback(() => {
        onNext();
    }, [onNext]);
    const handleLoadStart = react_1.default.useCallback(() => {
        setLoading(true);
    }, []);
    const handleLoadEnd = react_1.default.useCallback(() => {
        setLoading(false);
        setReady(true);
    }, []);
    const handlePrev = react_1.default.useCallback(() => {
        const timeDiff = new Date().getTime() - start.getTime();
        if (timeDiff > duration / 5) {
            setStart(new Date());
        }
        else {
            onPrev();
        }
    }, [duration, onPrev, start]);
    const handleNext = react_1.default.useCallback(() => {
        onNext();
    }, [onNext]);
    return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.wrapper },
        react_1.default.createElement(react_native_1.Image, { source: source, onLoadStart: handleLoadStart, onLoadEnd: handleLoadEnd, style: styles_1.default.image }),
        react_1.default.createElement(react_native_1.SafeAreaView, { style: styles_1.default.safeArea },
            react_1.default.createElement(steps_1.default, { key: start.toISOString(), index: slideIndex, color: 'red', unfilledColor: 'blue', ids: stepIds, isPaused: isPaused, ready: ready, duration: duration, onEndAnimate: handleProgressEnd }),
            renderBottomBar ? react_1.default.createElement(bottom_bar_1.default, { render: renderBottomBar }) : null),
        react_1.default.createElement(react_native_1.Pressable, { style: [styles_1.default.sideContainer, styles_1.default.leftContainer], onPress: handlePrev, onLongPress: onPauseStart, onPressOut: onPauseEnd, delayLongPress: 300 }),
        react_1.default.createElement(react_native_1.Pressable, { style: [styles_1.default.sideContainer, styles_1.default.rightContainer], onPress: handleNext, onLongPress: onPauseStart, onPressOut: onPauseEnd, delayLongPress: 300 })));
};
exports.default = Slide;
