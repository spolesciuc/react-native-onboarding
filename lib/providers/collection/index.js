'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const collection_1 = require('../../components/collection');
const context_1 = require('./context');
const react_1 = require('react');
const CollectionProvider = ({ defaultDuration, collectionId, collections }) => {
    const [currentCollection, setCurrentCollection] = react_1.default.useState();
    const [slideIndex, setSlideIndex] = react_1.default.useState(0);
    const onCollectionEnd = react_1.default.useCallback(() => { }, []);
    const onNext = react_1.default.useCallback(() => {
        const nextIndex = slideIndex + 1;
        const maxIndex = (currentCollection === null || currentCollection === void 0 ? void 0 : currentCollection.slides.length) || 0;
        if (nextIndex < maxIndex) {
            setSlideIndex(nextIndex);
        }
    }, [currentCollection === null || currentCollection === void 0 ? void 0 : currentCollection.slides.length, slideIndex]);
    const onPrev = react_1.default.useCallback(() => {
        const prevIndex = slideIndex - 1;
        if (prevIndex >= 0) {
            setSlideIndex(prevIndex);
        }
    }, [slideIndex]);
    const value = react_1.default.useMemo(() => {
        return {
            duration: defaultDuration,
            onNext,
            onPrev,
            onCollectionEnd,
            slideIndex,
        };
    }, [defaultDuration, onCollectionEnd, onNext, onPrev, slideIndex]);
    react_1.default.useEffect(() => {
        const current = collections.find((x) => x.id === collectionId);
        setCurrentCollection(current);
        setSlideIndex((current === null || current === void 0 ? void 0 : current.startIndex) || 0);
    }, [collectionId, collections]);
    return (react_1.default.createElement(context_1.default.Provider, { value: value }, currentCollection ? (react_1.default.createElement(collection_1.default, Object.assign({ key: `collection:${currentCollection.id}` }, currentCollection, { index: slideIndex }))) : null));
};
exports.default = CollectionProvider;
