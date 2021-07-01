import {SlidePropType} from '../onboarding/types';
import React from 'react';

declare type Props = SlidePropType & {
    stepIds: Array<number>;
};
declare const Slide: React.FC<Props>;
export default Slide;
