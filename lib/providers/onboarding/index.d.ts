import * as React from 'react';
import {CollectionPropType, Collections, OnboardingProps} from '../../components/onboarding/types';

declare type Props = OnboardingProps & {
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
declare const OnboardingProvider: React.FC<Props>;
export default OnboardingProvider;
