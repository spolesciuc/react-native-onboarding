import { CollectionContextProps } from './types';
import { CollectionPropType, Collections } from '../../types';
import Collection from '../../components/collection';
import Context from './context';
import React from 'react';

type Props = {
  duration: number;
  collectionId: string | undefined;
  collections: Collections;
};

const CollectionProvider: React.FC<Props> = ({ collectionId, collections }) => {
  const [isPaused, setIsPaused] = React.useState(false);
  const [progress] = React.useState(0);
  const [currentCollection, setCurrentCollection] = React.useState<
    CollectionPropType | undefined
  >();
  const [slideIndex, setSlideIndex] = React.useState(0);

  const onPauseStart = React.useCallback(() => {
    setIsPaused(true);
  }, []);

  const onPauseEnd = React.useCallback(() => {
    setIsPaused(false);
  }, []);

  const onNext = React.useCallback(() => {
    const nextIndex = slideIndex + 1;
    const maxIndex = currentCollection?.slides.length || 0;
    if (nextIndex < maxIndex) {
      setSlideIndex(nextIndex);
    }
  }, [currentCollection?.slides.length, slideIndex]);

  const onPrev = React.useCallback(() => {
    const prevIndex = slideIndex - 1;
    if (prevIndex >= 0) {
      setSlideIndex(prevIndex);
    }
  }, [slideIndex]);

  const onCollectionEnd = React.useCallback(() => {}, []);

  const value = React.useMemo<CollectionContextProps>(() => {
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

  React.useEffect(() => {
    const current = collections.find((x) => x.id === collectionId);
    setCurrentCollection(current);
    setSlideIndex(current?.startIndex || 0);
  }, [collectionId, collections]);

  return (
    <Context.Provider value={value}>
      {currentCollection ? (
        <Collection
          key={`collection:${currentCollection.id}`}
          {...currentCollection}
          index={slideIndex}
        />
      ) : null}
    </Context.Provider>
  );
};

export default CollectionProvider;
