import * as React from 'react';
import {SlidePropType} from '../onboarding/types';

declare type Props = SlidePropType & {
    stepIds: Array<number>;
};
declare const Slide: React.FC<Props>;
export default Slide;
