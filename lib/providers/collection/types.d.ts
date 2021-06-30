import {Animated} from 'react-native';

export declare type CollectionContextProps = {
    isPaused: boolean;
    progress: Animated.AnimatedValue;
    slideIndex: number;
    onPauseStart: () => void;
    onPauseEnd: () => void;
    onNext: () => void;
    onPrev: () => void;
    onCollectionEnd: () => void;
};
