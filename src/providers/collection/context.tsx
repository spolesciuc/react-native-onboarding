import { CollectionContextProps } from './types';
import React from 'react';

const Context = React.createContext<CollectionContextProps>({
  isPaused: false,
  onPauseStart: () => {},
  onPauseEnd: () => {},
  onNext: () => {},
  onPrev: () => {},
  slideProgress: 0,
  onCollectionEnd: () => {},
});

export default Context;
