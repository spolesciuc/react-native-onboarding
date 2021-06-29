import { CollectionContextProps } from './types';
import React from 'react';

const Context = React.createContext<CollectionContextProps>({
  isPaused: false,
  onPauseStart: () => {},
  onPauseEnd: () => {},
  onNext: () => {},
  onPrev: () => {},
  progress: 0,
  onCollectionEnd: () => {},
});

export default Context;
