import { ImageSourcePropType } from 'react-native';
import React from 'react';

export type SlidePropType = {
  id: string;
  source: ImageSourcePropType;
  renderBottomBar?: () => React.ReactElement;
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
  color: string;
  unfilledColor: string;
  height?: number;
  renderLoader?: () => React.ReactElement;
  onChange?: (
    collectionId: string | undefined,
    slideId: string | undefined,
  ) => void;
};

export type OnboardingHandle = {
  collectionId: string | undefined;
  slideId: string | undefined;
  onHide: () => void;
  onShow: (collectionId: string) => void;
  onNext: () => void;
  onPrev: () => void;
};
