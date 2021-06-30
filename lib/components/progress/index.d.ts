import {Animated} from 'react-native';
import React from 'react';

export declare type ProgressProps = {
    progress: Animated.AnimatedValue | null;
    color: string;
    unfilledColor: string;
};
declare type Props = ProgressProps & {
    completed: boolean;
};
declare const Progress: React.FC<Props>;
export default Progress;
