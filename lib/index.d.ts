import * as React from 'react';
import { Collections, OnboardingProps } from './types';
declare type Props = OnboardingProps & {
    data: Collections;
};
declare const Onboarding: React.FC<Props>;
export default Onboarding;
