import { Animated, Easing } from 'react-native';
import React from 'react';

const useProgress = (
  defaultDuration: number = 15000,
  onEndAnimate: () => void,
) => {
  const progress = React.useRef(new Animated.Value(0)).current;
  const pauseDuration = React.useRef(0);
  const [running, setRunning] = React.useState(false);

  let animation = React.useRef(
    Animated.timing(progress, {
      toValue: 1,
      duration: defaultDuration,
      useNativeDriver: false,
      easing: Easing.ease,
      isInteraction: false,
    }),
  );

  const resetTimer = React.useCallback(() => {
    setRunning(false);
    pauseDuration.current = 0;
    progress.setValue(0);
    progress.stopAnimation();
  }, [progress]);

  const handleEndAnimate = React.useCallback(() => {
    const value = (progress as any).__getValue();
    if (running && value === 1) {
      onEndAnimate();
      resetTimer();
    }
  }, [onEndAnimate, progress, resetTimer, running]);

  const startTimer = React.useCallback(() => {
    const duration = defaultDuration - pauseDuration.current;
    animation.current = Animated.timing(progress, {
      toValue: 1,
      duration: duration,
      useNativeDriver: false,
      easing: Easing.ease,
      isInteraction: false,
    });
    animation.current.start(handleEndAnimate);
    setRunning(true);
  }, [defaultDuration, handleEndAnimate, pauseDuration, progress]);

  const pauseTimer = React.useCallback(() => {
    animation.current.stop();
    // @ts-ignore
    const value = progress.__getValue();
    pauseDuration.current = value * defaultDuration;
  }, [defaultDuration, progress]);

  return { progress, startTimer, pauseTimer, resetTimer };
};

export default useProgress;
