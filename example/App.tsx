import React from 'react';
import { Dimensions, Image, ScrollView } from 'react-native';

const App = () => {
  // return (
  //   <Onboarding
  //     data={[
  //       {
  //         slides: [{ source: require('./assets/Onbording_4.webp') }],
  //       },
  //     ]}
  //   />
  // );
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Image
        source={require('./assets/Onbording_4.webp')}
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
        }}
      />
    </ScrollView>
  );
};

export default App;
