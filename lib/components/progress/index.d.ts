import * as React from 'react';
import {Animated} from 'react-native';

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
