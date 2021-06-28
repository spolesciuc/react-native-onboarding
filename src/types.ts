import { ImageSourcePropType } from 'react-native';

export type SlidePropType = {
  source: ImageSourcePropType;
};
export type Slides = Array<SlidePropType>;

export type CollectionPropType = {
  id: string;
  slides: Slides;
  startIndex?: number;
};
export type Collections = Array<CollectionPropType>;

export type OnboardingProps = {
  duration?: number;
};
