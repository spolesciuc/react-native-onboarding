import Context from '../providers/onboarding/context';
import React from 'react';

const useOnboarding = () => {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error(
      'useOnboarding can not be called outside OnboardingProvider',
    );
  }

  const { isVisible, onShow, onHide, collectionId, onChangeCollectionId } =
    context;

  return {
    isVisible,
    onShow,
    onHide,
    collectionId,
    onChangeCollectionId,
  };
};

export default useOnboarding;
