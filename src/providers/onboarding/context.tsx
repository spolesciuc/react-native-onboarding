import { OnboardingContextProps } from './types';
import React from 'react';

const Context = React.createContext<OnboardingContextProps>({
  isVisible: false,
  onShow: () => {},
  onChangeCollectionId: () => {},
  onHide: () => {},
});

export default Context;
