'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const onboarding_1 = require('./providers/onboarding');
const Onboarding = ({ data, duration }, forwardedRef) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [collectionId, setSelectionId] = React.useState(undefined);
    const onShow = React.useCallback((nextCollectionId) => {
        setIsVisible(true);
        setSelectionId(nextCollectionId);
    }, []);
    const onHide = React.useCallback(() => {
        setIsVisible(false);
    }, []);
    const onChangeCollectionId = React.useCallback((nextCollectionId) => {
        setSelectionId(nextCollectionId);
    }, []);
    React.useImperativeHandle(forwardedRef, () => ({
        onSkip() {
            onHide();
        },
        onNext() { },
    }));
    return (React.createElement(onboarding_1.default, { duration: duration, collections: data, isVisible: isVisible, onShow: onShow, onHide: onHide, collectionId: collectionId, onChangeCollectionId: onChangeCollectionId }));
};
exports.default = React.forwardRef(Onboarding);
