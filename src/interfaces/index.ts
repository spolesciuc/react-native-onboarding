import { ImageSourcePropType } from 'react-native';

export interface ISlide {
  source: ImageSourcePropType;
}
export type Slides = Array<ISlide>;

export interface ICollection {
  slides: Slides;
}
export type Collections = Array<ICollection>;
