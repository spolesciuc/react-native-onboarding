'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const onboarding_1 = require('./providers/onboarding');
const Onboarding = ({ data, duration }) => {
    return React.createElement(onboarding_1.default, { duration: duration, collections: data });
};
exports.default = Onboarding;
