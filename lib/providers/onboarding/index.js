'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const collection_1 = require('../collection');
const context_1 = require('./context');
const react_1 = require('react');
const OnboardingProvider = ({ duration = 15000, collections, isVisible, onShow, onHide, collectionId, onChangeCollectionId }) => {
    const value = react_1.default.useMemo(() => {
        return {
            isVisible,
            onShow,
            onHide,
            onChangeCollectionId,
        };
    }, [isVisible, onChangeCollectionId, onHide, onShow]);
    react_1.default.useEffect(() => {
        const id = collections.length > 0 ? collections[0].id : undefined;
        onChangeCollectionId(id);
    }, [collections, onChangeCollectionId]);
    return (react_1.default.createElement(context_1.default.Provider, { value: value },
        react_1.default.createElement(collection_1.default, { defaultDuration: duration, collectionId: collectionId, collections: collections })));
};
exports.default = OnboardingProvider;
