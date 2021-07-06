import * as React from 'react';
import {
  CollectionPropType,
  Collections,
  OnboardingProps,
} from '../../components/onboarding/types';
import { Modal } from 'react-native';
import { OnboardingContextProps } from './types';
import Collection from '../../components/collection';
import Context from './context';

type Props = OnboardingProps & {
  collections: Collections;
  isVisible: boolean;
  onShow: (nextCollectionId: string) => void;
  onHide: () => void;
  slideIndex: number;
  onChangeIndex: (index: number) => void;
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
  onChangeIndex,
  currentCollection,
  color,
  unfilledColor,
  height,
  renderLoader,
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
      renderLoader,
    };
  }, [
    duration,
    isVisible,
    onCollectionEnd,
    onHide,
    onNext,
    onPrev,
    onShow,
    renderLoader,
    slideIndex,
  ]);

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <Context.Provider value={value}>
        {currentCollection ? (
          <Collection
            {...currentCollection}
            slideIndex={slideIndex}
            onChangeIndex={onChangeIndex}
            color={color}
            unfilledColor={unfilledColor}
            height={height}
          />
        ) : null}
      </Context.Provider>
    </Modal>
  );
};

export default OnboardingProvider;
