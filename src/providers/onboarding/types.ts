import React from 'react';

export type OnboardingContextProps = {
  duration: number;
  isVisible: boolean;
  onShow: (nextCollectionId: string) => void;
  onHide: () => void;
  slideIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onCollectionEnd: () => void;
  renderLoader?: () => React.ReactElement;
};
