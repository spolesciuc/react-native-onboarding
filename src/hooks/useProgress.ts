import { Animated, Easing } from 'react-native';
import React from 'react';

const useProgress = (isPaused: boolean, defaultDuration: number = 15000) => {
  const progress = React.useRef(new Animated.Value(0)).current;
  const animation = React.useRef(
    Animated.timing(progress, {
      toValue: 1,
      duration: defaultDuration,
      useNativeDriver: false,
      easing: Easing.ease,
      isInteraction: false,
    }),
  ).current;

  const onStartTimer = React.useCallback(() => {
    progress.setValue(0);
    animation.stop();
    animation.start();
  }, [animation, progress]);

  React.useEffect(() => {
    if (isPaused) {
      animation.stop();
    } else {
      animation.start();
    }
    return () => {
      progress.stopAnimation();
    };
  }, [progress, isPaused, animation]);

  return { progress, onStartTimer };
};

export default useProgress;
