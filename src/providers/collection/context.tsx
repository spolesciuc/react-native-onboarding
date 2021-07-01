import { CollectionContextProps } from './types';
import React from 'react';

const Context = React.createContext<CollectionContextProps>({
  duration: 15000,
  onNext: () => {},
  onPrev: () => {},
  onCollectionEnd: () => {},
  slideIndex: 0,
});

export default Context;
