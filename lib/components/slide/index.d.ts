import * as React from 'react';
import {SlidePropType} from '../onboarding/types';
import {StepsProps} from '../steps';

export declare type SlideProps = StepsProps & {};
declare type Props = SlidePropType & SlideProps & {
    stepIds: Array<number>;
};
declare const Slide: React.FC<Props>;
export default Slide;
