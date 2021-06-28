import { ImageSourcePropType } from 'react-native';
export declare type SlidePropType = {
    source: ImageSourcePropType;
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
