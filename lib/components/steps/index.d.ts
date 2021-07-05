import * as React from 'react';
import {ProgressProps} from '../progress';

export declare type StepsProps = ProgressProps & {};
declare type Props = StepsProps & {
    ids: Array<number>;
    index: number;
    isPaused: boolean;
    duration: number;
    ready: boolean;
    onEndAnimate: () => void;
};
declare const Steps: React.FC<Props>;
export default Steps;
