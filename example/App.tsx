import React from 'react';
import Onboarding from '@stanislavpoleshuk/react-native-onboarding';

const App = () => {
  return (
    <Onboarding
      data={[
        {
          slides: [{ source: require('./assets/Onbording_4.webp') }],
        },
      ]}
    />
  );
};

export default App;
