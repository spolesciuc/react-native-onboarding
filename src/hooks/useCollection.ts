import Context from '../providers/onboarding/context';
import React from 'react';

const useCollection = () => {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error(
      'useCollection can not be called outside CollectionProvider',
    );
  }

  const { onNext, onPrev, slideIndex, duration } = context;
  return { onNext, onPrev, slideIndex, duration };
};

export default useCollection;
