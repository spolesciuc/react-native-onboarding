import { OnboardingContextProps } from './types';
import React from 'react';

const Context = React.createContext<OnboardingContextProps>({
  duration: 15000,
  isVisible: false,
  slideIndex: 0,
  onShow: () => {},
  onHide: () => {},
  onNext: () => {},
  onPrev: () => {},
  onCollectionEnd: () => {},
});

export default Context;
