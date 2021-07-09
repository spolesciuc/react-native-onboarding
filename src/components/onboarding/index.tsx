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
  {
    data,
    duration,
    color,
    unfilledColor,
    height,
    renderLoader,
    onChange,
    onShow,
    onHide,
  },
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

  const handleShow = React.useCallback(
    (nextCollectionId?: string) => {
      setIsVisible(true);
      setCollectionId(nextCollectionId);
      if (onShow) {
        onShow(nextCollectionId);
      }
    },
    [onShow],
  );

  const handleHide = React.useCallback(() => {
    setIsVisible(false);
    setCollectionId(undefined);
    if (onHide) {
      onHide(collectionId);
    }
  }, [collectionId, onHide]);

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
    setIsVisible(false);
    if (onHide) {
      onHide(collectionId);
    }
  }, [collectionId, onHide]);

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

  React.useEffect(() => {
    if (onChange && currentCollection) {
      const slide = currentCollection?.slides[slideIndex];
      onChange(currentCollection.id, slide?.id);
    }
  }, [currentCollection, onChange, slideIndex]);

  React.useImperativeHandle(forwardedRef, () => ({
    collectionId: currentCollection?.id,
    slideId: currentCollection?.slides[slideIndex]?.id,
    hide() {
      handleHide();
    },
    show(id: string) {
      handleShow(id);
    },
    prev() {
      onPrev();
    },
    next() {
      onNext();
    },
  }));

  return (
    <OnboardingProvider
      duration={duration}
      collections={data}
      isVisible={isVisible}
      onShow={handleShow}
      onHide={handleHide}
      slideIndex={slideIndex}
      onChangeIndex={onChangeIndex}
      onNext={onNext}
      onPrev={onPrev}
      onCollectionEnd={onCollectionEnd}
      currentCollection={currentCollection}
      color={color}
      unfilledColor={unfilledColor}
      height={height}
      renderLoader={renderLoader}
      onChange={onChange}
    />
  );
};

export default React.forwardRef(Onboarding);
