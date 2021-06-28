import { OnboardingContextProps } from './types';
import { OnboardingProps } from '../../types';
import CollectionProvider from '../collection';
import Context from './context';
import React from 'react';

type Props = OnboardingProps & {};

const OnboardingProvider: React.FC<Props> = ({
  children,
  duration = 15000,
}) => {
  const [collectionId, setSelectionId] = React.useState<string | undefined>(
    undefined,
  );
  const [isVisible, setIsVisible] = React.useState(false);

  const onChangeCollectionId = React.useCallback((nextCollectionId: string) => {
    setSelectionId(nextCollectionId);
  }, []);

  const onShow = React.useCallback((nextCollectionId: string) => {
    setIsVisible(true);
    setSelectionId(nextCollectionId);
  }, []);

  const onHide = React.useCallback(() => {
    setIsVisible(false);
  }, []);

  const value = React.useMemo<OnboardingContextProps>(() => {
    return {
      isVisible,
      onShow,
      onHide,
      collectionId,
      onChangeCollectionId,
    };
  }, [collectionId, isVisible, onChangeCollectionId, onHide, onShow]);

  return (
    <Context.Provider value={value}>
      <CollectionProvider duration={duration}>{children}</CollectionProvider>
    </Context.Provider>
  );
};

export default OnboardingProvider;
