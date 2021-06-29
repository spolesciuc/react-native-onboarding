import { Collections, OnboardingProps } from '../../types';
import { OnboardingContextProps } from './types';
import CollectionProvider from '../collection';
import Context from './context';
import React from 'react';

type Props = OnboardingProps & {
  collections: Collections;
};

const OnboardingProvider: React.FC<Props> = ({
  collections,
  duration = 15000,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [collectionId, setSelectionId] = React.useState<string | undefined>(
    undefined,
  );

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
      onChangeCollectionId,
    };
  }, [isVisible, onChangeCollectionId, onHide, onShow]);

  React.useEffect(() => {
    const id = collections.length > 0 ? collections[0].id : undefined;
    setSelectionId(id);
  }, [collections]);

  return (
    <Context.Provider value={value}>
      <CollectionProvider
        defaultDuration={duration}
        collectionId={collectionId}
        collections={collections}
      />
    </Context.Provider>
  );
};

export default OnboardingProvider;
