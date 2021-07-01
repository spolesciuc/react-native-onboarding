'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const react_native_1 = require('react-native');
const react_1 = require('react');
const useAutoPlay = (isPaused, defaultDuration = 15000) => {
    const animation = react_1.default.useRef(new react_native_1.Animated.Value(0)).current;
    const progress = react_1.default.useRef(react_native_1.Animated.timing(animation, {
        toValue: 1,
        duration: defaultDuration,
        useNativeDriver: true,
    })).current;
    const onStartTimer = react_1.default.useCallback(() => {
        progress.reset();
    }, [progress]);
    react_1.default.useEffect(() => {
        if (isPaused) {
            progress.stop();
        }
        else {
            progress.start();
        }
        return () => {
            animation.stopAnimation();
        };
    }, [animation, isPaused, progress]);
    return { progress: 0, onStartTimer };
};
exports.default = useAutoPlay;
