import * as React from 'react';
import {
  CollectionPropType,
  Collections,
  OnboardingHandle,
  OnboardingProps,
} from './types';
import OnboardingProvider from '../../providers/onboarding';

type Props = OnboardingProps & {
  data: Collections;
};

const Onboarding: React.ForwardRefRenderFunction<OnboardingHandle, Props> = (
  { data, duration, color, unfilledColor, height },
  forwardedRef,
) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [collectionId, setCollectionId] = React.useState<string | undefined>(
    undefined,
  );
  const [currentCollection, setCurrentCollection] = React.useState<
    CollectionPropType | undefined
  >();

  const [slideIndex, setSlideIndex] = React.useState(0);

  const onShow = React.useCallback((nextCollectionId: string) => {
    setIsVisible(true);
    setCollectionId(nextCollectionId);
  }, []);

  const onHide = React.useCallback(() => {
    setIsVisible(false);
    setCollectionId(undefined);
  }, []);

  const onPrev = React.useCallback(() => {
    const prevIndex = slideIndex - 1;
    if (prevIndex >= 0) {
      setSlideIndex(prevIndex);
    }
  }, [slideIndex]);

  const onNext = React.useCallback(() => {
    const nextIndex = slideIndex + 1;
    const maxIndex = currentCollection?.slides.length || 0;
    if (nextIndex < maxIndex) {
      setSlideIndex(nextIndex);
    }
  }, [currentCollection?.slides.length, slideIndex]);

  const onCollectionEnd = React.useCallback(() => {
    onHide();
  }, [onHide]);

  const onChangeIndex = React.useCallback((index: number) => {
    setSlideIndex(index);
  }, []);

  React.useEffect(() => {
    if (isVisible) {
      const current = data.find((x) => x.id === collectionId);
      setCurrentCollection(current);
      setSlideIndex(current?.startIndex || 0);
    }
  }, [collectionId, data, isVisible]);

  React.useEffect(() => {
    const id = data.length > 0 ? data[0].id : undefined;
    setCollectionId(id);
  }, [data]);

  React.useImperativeHandle(forwardedRef, () => ({
    onHide() {
      onHide();
    },
    onShow(id: string) {
      onShow(id);
    },
    onPrev() {
      onPrev();
    },
    onNext() {
      onNext();
    },
  }));

  return (
    <OnboardingProvider
      duration={duration}
      collections={data}
      isVisible={isVisible}
      onShow={onShow}
      onHide={onHide}
      slideIndex={slideIndex}
      onChangeIndex={onChangeIndex}
      onNext={onNext}
      onPrev={onPrev}
      onCollectionEnd={onCollectionEnd}
      currentCollection={currentCollection}
      color={color}
      unfilledColor={unfilledColor}
      height={height}
    />
  );
};

export default React.forwardRef(Onboarding);
