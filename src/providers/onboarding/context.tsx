import { OnboardingContextProps } from './types';
import React from 'react';

const Context = React.createContext<OnboardingContextProps>({
  isVisible: false,
  collectionId: undefined,
  onShow: () => {},
  onChangeCollectionId: () => {},
  onHide: () => {},
});

export default Context;
