import * as React from 'react';
import { OnboardingContextProps } from './types';

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
