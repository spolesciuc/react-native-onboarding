import { Animated } from 'react-native';
import React from 'react';

const useProgress = () =>
  // isPaused: boolean,
  // defaultDuration: number = 15000,
  // ready: boolean,
  // onEndAnimate: () => void,
  {
    const progress = React.useRef(new Animated.Value(0)).current;
    // const [pauseDuration, setPauseDuration] = React.useState(0);
    //
    // let animation = React.useRef(
    //   Animated.timing(progress, {
    //     toValue: 1,
    //     duration: defaultDuration,
    //     useNativeDriver: false,
    //     easing: Easing.ease,
    //     isInteraction: false,
    //   }),
    // );
    //
    // const handleEndAnimate = React.useCallback(() => {
    //   const value = (progress as any).__getValue();
    //   if (ready && value === 1) {
    //     onEndAnimate();
    //   }
    // }, [onEndAnimate, progress, ready]);
    //
    // const startTimer = React.useCallback(() => {
    //   const duration = defaultDuration - pauseDuration;
    //   animation.current = Animated.timing(progress, {
    //     toValue: 1,
    //     duration: duration,
    //     useNativeDriver: false,
    //     easing: Easing.ease,
    //     isInteraction: false,
    //   });
    //   animation.current.start(handleEndAnimate);
    // }, [defaultDuration, handleEndAnimate, pauseDuration, progress]);
    //
    // const onStartTimer = React.useCallback(() => {
    //   progress.setValue(0);
    //   setPauseDuration(0);
    //   startTimer();
    // }, [progress, startTimer]);
    //
    // React.useEffect(() => {
    //   if (ready) {
    //     if (isPaused) {
    //       animation.current.stop();
    //       // @ts-ignore
    //       const value = progress.__getValue();
    //       setPauseDuration(value * defaultDuration);
    //     } else {
    //       startTimer();
    //     }
    //   }
    //   return () => {
    //     if (ready) {
    //       progress.stopAnimation();
    //     }
    //   };
    // }, [
    //   progress,
    //   isPaused,
    //   animation,
    //   onStartTimer,
    //   startTimer,
    //   defaultDuration,
    //   ready,
    // ]);

    return { progress };
  };

export default useProgress;
