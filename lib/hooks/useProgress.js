"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const useProgress = (isPaused, defaultDuration = 15000, ready, onEndAnimate) => {
    const progress = react_1.default.useRef(new react_native_1.Animated.Value(0)).current;
    const [pauseDuration, setPauseDuration] = react_1.default.useState(0);
    let animation = react_1.default.useRef(react_native_1.Animated.timing(progress, {
        toValue: 1,
        duration: defaultDuration,
        useNativeDriver: false,
        easing: react_native_1.Easing.ease,
        isInteraction: false,
    }));
    const handleEndAnimate = react_1.default.useCallback(() => {
        const value = progress.__getValue();
        if (ready && value === 1) {
            onEndAnimate();
        }
    }, [onEndAnimate, progress, ready]);
    const startTimer = react_1.default.useCallback(() => {
        const duration = defaultDuration - pauseDuration;
        animation.current = react_native_1.Animated.timing(progress, {
            toValue: 1,
            duration: duration,
            useNativeDriver: false,
            easing: react_native_1.Easing.ease,
            isInteraction: false,
        });
        animation.current.start(handleEndAnimate);
    }, [defaultDuration, handleEndAnimate, pauseDuration, progress]);
    const onStartTimer = react_1.default.useCallback(() => {
        progress.setValue(0);
        setPauseDuration(0);
        startTimer();
    }, [progress, startTimer]);
    react_1.default.useEffect(() => {
        if (ready) {
            if (isPaused) {
                animation.current.stop();
                // @ts-ignore
                const value = progress.__getValue();
                setPauseDuration(value * defaultDuration);
            }
            else {
                startTimer();
            }
        }
        return () => {
            if (ready) {
                progress.stopAnimation();
            }
        };
    }, [
        progress,
        isPaused,
        animation,
        onStartTimer,
        startTimer,
        defaultDuration,
        ready,
    ]);
    return { progress };
};
exports.default = useProgress;
