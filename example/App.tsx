import React from 'react';
import Onboarding from '@stanislavpoleshuk/react-native-onboarding';
import { Text } from 'react-native';

const App = () => {
  return (
    <Onboarding
      data={[
        {
          id: '1',
          slides: [
            {
              source: require('./assets/Onbording_4.webp'),
              renderBottomBar: () => <Text>123</Text>,
            },
          ],
        },
      ]}
    />
  );
};

export default App;
