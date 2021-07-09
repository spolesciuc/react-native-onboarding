import React from 'react';

export type OnboardingContextProps = {
  duration: number;
  isVisible: boolean;
  onShow?: (collectionId?: string) => void;
  onHide?: (collectionId?: string) => void;
  slideIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onCollectionEnd: () => void;
  renderLoader?: () => React.ReactElement;
};
