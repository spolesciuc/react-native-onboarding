import * as React from 'react';
import {Collections, OnboardingProps} from './types';

declare type OnboardingHandle = {
    onSkip: () => void;
    onNext: () => void;
};
declare const _default: React.ForwardRefExoticComponent<OnboardingProps & {
    data: Collections;
} & React.RefAttributes<OnboardingHandle>>;
export default _default;
