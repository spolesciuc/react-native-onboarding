import { Collections, OnboardingProps } from '../../types';
import { OnboardingContextProps } from './types';
import CollectionProvider from '../collection';
import Context from './context';
import React from 'react';

type Props = OnboardingProps & {
  collections: Collections;
  isVisible: boolean;
  onShow: (nextCollectionId: string) => void;
  onHide: () => void;
  collectionId: string | undefined;
  onChangeCollectionId: (nextCollectionId: string | undefined) => void;
};

const OnboardingProvider: React.FC<Props> = ({
  duration = 15000,
  collections,
  isVisible,
  onShow,
  onHide,
  collectionId,
  onChangeCollectionId,
}) => {
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
    onChangeCollectionId(id);
  }, [collections, onChangeCollectionId]);

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
