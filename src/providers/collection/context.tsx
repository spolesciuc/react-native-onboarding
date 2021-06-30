import { Animated } from 'react-native';
import { CollectionContextProps } from './types';
import React from 'react';

const Context = React.createContext<CollectionContextProps>({
  isPaused: false,
  onPauseStart: () => {},
  onPauseEnd: () => {},
  onNext: () => {},
  onPrev: () => {},
  progress: new Animated.Value(0),
  onCollectionEnd: () => {},
  slideIndex: 0,
});

export default Context;
