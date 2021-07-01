import {Collections, OnboardingProps} from '../../types';
import React from 'react';

declare type Props = OnboardingProps & {
    collections: Collections;
    isVisible: boolean;
    onShow: (nextCollectionId: string) => void;
    onHide: () => void;
    collectionId: string | undefined;
    onChangeCollectionId: (nextCollectionId: string | undefined) => void;
};
declare const OnboardingProvider: React.FC<Props>;
export default OnboardingProvider;
