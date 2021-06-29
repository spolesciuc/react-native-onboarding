import {Collections, OnboardingProps} from '../../types';
import React from 'react';

declare type Props = OnboardingProps & {
    collections: Collections;
};
declare const OnboardingProvider: React.FC<Props>;
export default OnboardingProvider;
