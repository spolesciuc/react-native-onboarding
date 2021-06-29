"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const collection_1 = require("../../components/collection");
const context_1 = require("./context");
const react_1 = require("react");
const CollectionProvider = ({ collectionId, collections }) => {
    const [isPaused, setIsPaused] = react_1.default.useState(false);
    const [progress] = react_1.default.useState(0);
    const [currentCollection, setCurrentCollection] = react_1.default.useState();
    const onPauseStart = react_1.default.useCallback(() => {
        setIsPaused(true);
    }, []);
    const onPauseEnd = react_1.default.useCallback(() => {
        setIsPaused(false);
    }, []);
    const onNext = react_1.default.useCallback(() => {
        console.log('@onNext');
    }, []);
    const onPrev = react_1.default.useCallback(() => {
        console.log('@onPrev');
    }, []);
    const onCollectionEnd = react_1.default.useCallback(() => { }, []);
    const value = react_1.default.useMemo(() => {
        return {
            isPaused,
            onPauseStart,
            onPauseEnd,
            onNext,
            onPrev,
            progress,
            onCollectionEnd,
        };
    }, [
        isPaused,
        onCollectionEnd,
        onNext,
        onPauseEnd,
        onPauseStart,
        onPrev,
        progress,
    ]);
    react_1.default.useEffect(() => {
        const current = collections.find((x) => x.id === collectionId);
        setCurrentCollection(current);
    }, [collectionId, collections]);
    console.log(isPaused, '@isPaused');
    return (react_1.default.createElement(context_1.default.Provider, { value: value }, currentCollection ? (react_1.default.createElement(collection_1.default, Object.assign({ key: `collection:${currentCollection.id}` }, currentCollection))) : null));
};
exports.default = CollectionProvider;
