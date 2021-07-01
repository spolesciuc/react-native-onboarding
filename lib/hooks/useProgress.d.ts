import {Animated} from 'react-native';

declare const useProgress: (isPaused: boolean, defaultDuration: number | undefined, ready: boolean, onEndAnimate: () => void) => {
    progress: Animated.Value;
};
export default useProgress;
