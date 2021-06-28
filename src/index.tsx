import * as React from 'react';
import { Collections, OnboardingProps } from './types';
import { View } from 'react-native';
import Collection from './components/collection';
import OnboardingProvider from './providers/onboarding';

type Props = OnboardingProps & {
  data: Collections;
};

const Onboarding: React.FC<Props> = ({ data, duration }) => {
  return (
    <OnboardingProvider duration={duration}>
      <View>
        {data.map((d) => (
          <Collection key={`collection:${d.id}`} {...d} />
        ))}
      </View>
    </OnboardingProvider>
  );
};

export default Onboarding;
