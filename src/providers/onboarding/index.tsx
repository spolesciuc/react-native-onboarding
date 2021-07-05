import * as React from 'react';
import {
  CollectionPropType,
  Collections,
  OnboardingProps,
} from '../../components/onboarding/types';
import { OnboardingContextProps } from './types';
import Collection from '../../components/collection';
import Context from './context';

type Props = OnboardingProps & {
  collections: Collections;
  isVisible: boolean;
  onShow: (nextCollectionId: string) => void;
  onHide: () => void;
  slideIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onCollectionEnd: () => void;
  currentCollection: CollectionPropType | undefined;
};

const OnboardingProvider: React.FC<Props> = ({
  duration = 15000,
  isVisible,
  onShow,
  onHide,
  onNext,
  onPrev,
  onCollectionEnd,
  slideIndex,
  currentCollection,
  color,
  unfilledColor,
  height,
}) => {
  const value = React.useMemo<OnboardingContextProps>(() => {
    return {
      duration,
      isVisible,
      onShow,
      onHide,
      onNext,
      onPrev,
      onCollectionEnd,
      slideIndex,
    };
  }, [
    duration,
    isVisible,
    onCollectionEnd,
    onHide,
    onNext,
    onPrev,
    onShow,
    slideIndex,
  ]);

  return (
    <Context.Provider value={value}>
      {currentCollection ? (
        <Collection
          {...currentCollection}
          index={slideIndex}
          color={color}
          unfilledColor={unfilledColor}
          height={height}
        />
      ) : null}
    </Context.Provider>
  );
};

export default OnboardingProvider;
