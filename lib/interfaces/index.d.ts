import { ImageSourcePropType } from 'react-native';
export interface ISlide {
  source: ImageSourcePropType;
}
export declare type Slides = Array<ISlide>;
export interface ICollection {
  slides: Slides;
}
export declare type Collections = Array<ICollection>;
