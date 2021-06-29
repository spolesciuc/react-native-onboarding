import { CollectionContextProps } from './types';
import { CollectionPropType, Collections } from '../../types';
import Collection from '../../components/collection';
import Context from './context';
import React from 'react';
import useAutoPlay from '../../hooks/useAutoPlay';

type Props = {
  defaultDuration: number;
  collectionId: string | undefined;
  collections: Collections;
};

const CollectionProvider: React.FC<Props> = ({
  collectionId,
  collections,
  defaultDuration,
}) => {
  const [isPaused, setIsPaused] = React.useState(false);
  const [currentCollection, setCurrentCollection] = React.useState<
    CollectionPropType | undefined
  >();
  const [slideIndex, setSlideIndex] = React.useState(0);
  const { progress, onStartTimer } = useAutoPlay(isPaused, defaultDuration);

  const onPauseStart = React.useCallback(() => {
    setIsPaused(true);
  }, []);

  const onPauseEnd = React.useCallback(() => {
    setIsPaused(false);
  }, []);

  const onCollectionEnd = React.useCallback(() => {}, []);

  const onNext = React.useCallback(() => {
    const nextIndex = slideIndex + 1;
    const maxIndex = currentCollection?.slides.length || 0;
    if (nextIndex < maxIndex) {
      setSlideIndex(nextIndex);
      onStartTimer();
    }
  }, [currentCollection?.slides.length, slideIndex]);

  const onPrev = React.useCallback(() => {
    const prevIndex = slideIndex - 1;
    if (prevIndex >= 0) {
      setSlideIndex(prevIndex);
    }
  }, [slideIndex]);

  const value = React.useMemo<CollectionContextProps>(() => {
    return {
      isPaused,
      onPauseStart,
      onPauseEnd,
      onNext,
      onPrev,
      progress,
      onCollectionEnd,
      slideIndex,
    };
  }, [
    isPaused,
    onCollectionEnd,
    onNext,
    onPauseEnd,
    onPauseStart,
    onPrev,
    progress,
    slideIndex,
  ]);

  React.useEffect(() => {
    const current = collections.find((x) => x.id === collectionId);
    setCurrentCollection(current);
    setSlideIndex(current?.startIndex || 0);
  }, [collectionId, collections]);

  console.log(progress, '@progress');

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
