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
              source: require('./assets/Onbording_1.webp'),
              renderBottomBar: () => <Text>123</Text>,
            },
          ],
        },
        {
          id: '2',
          slides: [
            {
              source: require('./assets/Onbording_2.webp'),
              renderBottomBar: () => <Text>123</Text>,
            },
          ],
        },
        {
          id: '3',
          slides: [
            {
              source: require('./assets/Onbording_3.webp'),
              renderBottomBar: () => <Text>123</Text>,
            },
          ],
        },
        {
          id: '4',
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
