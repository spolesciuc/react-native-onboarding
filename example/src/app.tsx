import * as React from 'react';
import BottomBar from './components/bottom-bar';
import Onboarding, {
  OnboardingRefProps,
} from '@stanislavpoleshuk/react-native-onboarding';
import { Button, StyleSheet, View } from 'react-native';

const App = () => {
  const ref = React.useRef<OnboardingRefProps>(null);

  const handlePressPrev = React.useCallback(() => {
    if (ref?.current) {
      ref.current.onPrev();
    }
  }, []);

  const handlePressNext = React.useCallback(() => {
    if (ref?.current) {
      ref.current.onNext();
    }
  }, []);

  const renderBottomBar = React.useCallback(
    () => (
      <BottomBar onPressPrev={handlePressPrev} onPressNext={handlePressNext} />
    ),
    [handlePressNext, handlePressPrev],
  );

  const handleOpen = React.useCallback(() => {
    if (ref?.current) {
      ref.current.onShow('1');
    }
  }, []);

  return (
    <View>
      <View style={styles.button}>
        <Button title={'open'} color={'red'} onPress={handleOpen} />
      </View>
      <Onboarding
        ref={ref}
        color={'red'}
        unfilledColor={'#FFFF'}
        data={[
          {
            id: '1',
            slides: [
              {
                source: require('../assets/Onbording_1.webp'),
                renderBottomBar: renderBottomBar,
              },
              {
                source: require('../assets/Onbording_2.webp'),
                renderBottomBar: renderBottomBar,
              },
              {
                source: require('../assets/Onbording_3.webp'),
                renderBottomBar: renderBottomBar,
              },
              {
                source: require('../assets/Onbording_4.webp'),
                renderBottomBar: renderBottomBar,
              },
            ],
          },
        ]}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  button: {
    marginTop: 100,
  },
});
