import { CollectionContextProps } from './types';
import { CollectionPropType, Collections } from '../../types';
import Collection from '../../components/collection';
import Context from './context';
import React from 'react';

type Props = {
  defaultDuration: number;
  collectionId: string | undefined;
  collections: Collections;
};

const CollectionProvider: React.FC<Props> = ({
  defaultDuration,
  collectionId,
  collections,
}) => {
  const [currentCollection, setCurrentCollection] = React.useState<
    CollectionPropType | undefined
  >();
  const [slideIndex, setSlideIndex] = React.useState(0);

  const onCollectionEnd = React.useCallback(() => {}, []);

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

  const value = React.useMemo<CollectionContextProps>(() => {
    return {
      duration: defaultDuration,
      onNext,
      onPrev,
      onCollectionEnd,
      slideIndex,
    };
  }, [defaultDuration, onCollectionEnd, onNext, onPrev, slideIndex]);

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
