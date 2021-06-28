import { ProgressProps } from '../progress';
import React from 'react';
declare type Props = ProgressProps & {
    ids: Array<number>;
    index: number;
};
declare const Steps: React.FC<Props>;
export default Steps;
