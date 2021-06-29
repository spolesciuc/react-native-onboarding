import * as React from 'react';
import { Collections, OnboardingProps } from './types';
import OnboardingProvider from './providers/onboarding';

type Props = OnboardingProps & {
  data: Collections;
};

const Onboarding: React.FC<Props> = ({ data, duration }) => {
  return <OnboardingProvider duration={duration} collections={data} />;
};

export default Onboarding;
