import { CollectionContextProps } from './types';
import Context from './context';
import React from 'react';

type Props = {
  duration: number;
};

const CollectionProvider: React.FC<Props> = ({ children }) => {
  const [isPaused, setIsPaused] = React.useState(false);
  const [slideProgress] = React.useState(0);

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

  console.log(isPaused, '@isPaused');

  const value = React.useMemo<CollectionContextProps>(() => {
    return {
      isPaused,
      onPauseStart,
      onPauseEnd,
      onNext,
      onPrev,
      slideProgress,
      onCollectionEnd,
    };
  }, [
    isPaused,
    onCollectionEnd,
    onNext,
    onPauseEnd,
    onPauseStart,
    onPrev,
    slideProgress,
  ]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default CollectionProvider;
