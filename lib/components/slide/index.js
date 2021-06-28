"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const styles_1 = require("./styles");
const Slide = ({ source }) => {
    const [loading, setLoading] = React.useState(false);
    const handleLoadStart = React.useCallback(() => {
        setLoading(true);
    }, []);
    const handleLoadEnd = React.useCallback(() => {
        setLoading(false);
    }, []);
    console.log(loading, '@loading');
    return (React.createElement(react_native_1.View, { style: styles_1.default.wrapper },
        React.createElement(react_native_1.Image, { source: source, onLoadStart: handleLoadStart, onLoadEnd: handleLoadEnd, style: {
                height: react_native_1.Dimensions.get('window').height,
                width: react_native_1.Dimensions.get('window').width,
            } })));
};
exports.default = Slide;
