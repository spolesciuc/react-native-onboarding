import * as React from 'react';
import { Collections, OnboardingProps } from './types';
import OnboardingProvider from './providers/onboarding';

type OnboardingHandle = {
  onSkip: () => void;
  onNext: () => void;
};

type Props = OnboardingProps & {
  data: Collections;
};

const Onboarding: React.ForwardRefRenderFunction<OnboardingHandle, Props> = (
  { data, duration },
  forwardedRef,
) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [collectionId, setSelectionId] = React.useState<string | undefined>(
    undefined,
  );

  const onShow = React.useCallback((nextCollectionId: string) => {
    setIsVisible(true);
    setSelectionId(nextCollectionId);
  }, []);

  const onHide = React.useCallback(() => {
    setIsVisible(false);
  }, []);

  const onChangeCollectionId = React.useCallback(
    (nextCollectionId: string | undefined) => {
      setSelectionId(nextCollectionId);
    },
    [],
  );

  React.useImperativeHandle(forwardedRef, () => ({
    onSkip() {
      onHide();
    },
    onNext() {},
  }));

  return (
    <OnboardingProvider
      duration={duration}
      collections={data}
      isVisible={isVisible}
      onShow={onShow}
      onHide={onHide}
      collectionId={collectionId}
      onChangeCollectionId={onChangeCollectionId}
    />
  );
};

export default React.forwardRef(Onboarding);
