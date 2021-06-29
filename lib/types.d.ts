import {ImageSourcePropType} from 'react-native';
import React from 'react';

export declare type SlidePropType = {
    source: ImageSourcePropType;
    renderBottomBar?: () => React.ReactElement;
};
export declare type Slides = Array<SlidePropType>;
export declare type CollectionPropType = {
    id: string;
    slides: Slides;
    startIndex?: number;
};
export declare type Collections = Array<CollectionPropType>;
export declare type OnboardingProps = {
    duration?: number;
};
