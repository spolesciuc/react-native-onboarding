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

  const onPauseStart = React.useCallback(() => {
    setIsPaused(true);
  }, []);

  const onPauseEnd = React.useCallback(() => {
    setIsPaused(false);
  }, []);

  const onNext = React.useCallback(() => {
    console.log('@onNext');
  }, []);

  const onPrev = React.useCallback(() => {
    console.log('@onPrev');
  }, []);

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
  }, [collectionId, collections]);

  console.log(isPaused, '@isPaused');

  return (
    <Context.Provider value={value}>
      {currentCollection ? (
        <Collection
          key={`collection:${currentCollection.id}`}
          {...currentCollection}
        />
      ) : null}
    </Context.Provider>
  );
};

export default CollectionProvider;
