import {SlidePropType} from '../../types';
import React from 'react';

declare type Props = SlidePropType & {
    ids: Array<number>;
};
declare const Slide: React.FC<Props>;
export default Slide;
