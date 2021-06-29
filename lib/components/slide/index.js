"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const bottom_bar_1 = require("../bottom-bar");
const react_1 = require("react");
const steps_1 = require("../steps");
const styles_1 = require("./styles");
const useCollection_1 = require("../../hooks/useCollection");
const Slide = ({ source, renderBottomBar, ids }) => {
    const { onPrev, onNext, onPauseStart, onPauseEnd, progress } = useCollection_1.default();
    const [loading, setLoading] = react_1.default.useState(false);
    const handleLoadStart = react_1.default.useCallback(() => {
        setLoading(true);
    }, []);
    const handleLoadEnd = react_1.default.useCallback(() => {
        setLoading(false);
    }, []);
    console.log(loading, '@loading');
    return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.wrapper },
        react_1.default.createElement(react_native_1.Pressable, { style: [styles_1.default.sideContainer, styles_1.default.leftContainer], onPress: onPrev, onLongPress: onPauseStart, onPressOut: onPauseEnd }),
        react_1.default.createElement(react_native_1.SafeAreaView, { style: styles_1.default.safeArea },
            react_1.default.createElement(steps_1.default, { progress: progress, color: 'red', unfilledColor: 'blue', index: 0, ids: ids }),
            react_1.default.createElement(react_native_1.Image, { source: source, onLoadStart: handleLoadStart, onLoadEnd: handleLoadEnd, style: styles_1.default.image }),
            renderBottomBar ? react_1.default.createElement(bottom_bar_1.default, { render: renderBottomBar }) : null),
        react_1.default.createElement(react_native_1.Pressable, { style: [styles_1.default.sideContainer, styles_1.default.rightContainer], onPress: onNext, onLongPress: onPauseStart, onPressOut: onPauseEnd })));
};
exports.default = Slide;
