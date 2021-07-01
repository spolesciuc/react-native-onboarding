import {Animated} from 'react-native';
import React from 'react';

export declare type ProgressProps = {
    color: string;
    unfilledColor: string;
};
declare type Props = ProgressProps & {
    completed: boolean;
    progress: Animated.AnimatedValue | null;
};
declare const Progress: React.FC<Props>;
export default Progress;
