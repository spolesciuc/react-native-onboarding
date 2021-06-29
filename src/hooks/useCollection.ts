import Context from '../providers/collection/context';
import React from 'react';

const useCollection = () => {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error(
      'useCollection can not be called outside CollectionProvider',
    );
  }

  const { onPauseStart, onPauseEnd, onNext, onPrev, progress, slideIndex } =
    context;
  return { onPauseStart, onPauseEnd, onNext, onPrev, progress, slideIndex };
};

export default useCollection;
