"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const collection_1 = require("./components/collection");
const onboarding_1 = require("./providers/onboarding");
const Onboarding = ({ data, duration }) => {
    return (React.createElement(onboarding_1.default, { duration: duration },
        React.createElement(react_native_1.View, null, data.map((d) => (React.createElement(collection_1.default, Object.assign({ key: `collection:${d.id}` }, d)))))));
};
exports.default = Onboarding;
