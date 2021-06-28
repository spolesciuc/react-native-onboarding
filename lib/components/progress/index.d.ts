import React from 'react';
export declare type ProgressProps = {
    progress: number;
    color: string;
    unfilledColor: string;
};
declare type Props = ProgressProps & {
    completed: boolean;
};
declare const Progress: React.FC<Props>;
export default Progress;
