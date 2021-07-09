import * as React from 'react';
import BottomBar from './components/bottom-bar';
import Onboarding, {
  OnboardingRefProps,
} from '@stanislavpoleshuk/react-native-onboarding';
import { ActivityIndicator, Button, StyleSheet, View } from 'react-native';

const App = () => {
  const ref = React.useRef<OnboardingRefProps>(null);

  const handlePressSkip = React.useCallback(() => {
    if (ref?.current) {
      ref.current.hide();
    }
  }, []);

  const handlePressPrev = React.useCallback(() => {
    if (ref?.current) {
      ref.current.prev();
    }
  }, []);

  const handlePressNext = React.useCallback(() => {
    if (ref?.current) {
      ref.current.next();
    }
  }, []);

  const renderBottomBar = React.useCallback(
    () => (
      <BottomBar
        onPressSkip={handlePressSkip}
        onPressPrev={handlePressPrev}
        onPressNext={handlePressNext}
      />
    ),
    [handlePressNext, handlePressPrev, handlePressSkip],
  );

  const handleOpen = React.useCallback(() => {
    if (ref?.current) {
      ref.current.show('1');
    }
  }, []);

  const renderLoader = React.useCallback(() => {
    return (
      <View style={styles.loaderWrapper}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }, []);

  const handleOnChange = React.useCallback(
    (collectionId: string | undefined, slideId: string | undefined) => {
      console.log(collectionId, slideId);
    },
    [],
  );

  const onShow = React.useCallback(() => {
    console.log('@onShow');
  }, []);

  const onHide = React.useCallback(() => {
    console.log('@onHide');
  }, []);

  return (
    <View>
      <View style={styles.button}>
        <Button title={'open'} color={'red'} onPress={handleOpen} />
      </View>
      <Onboarding
        ref={ref}
        duration={12000}
        color={'red'}
        unfilledColor={'#FFFF'}
        renderLoader={renderLoader}
        onChange={handleOnChange}
        onShow={onShow}
        onHide={onHide}
        data={[
          {
            id: '1',
            slides: [
              {
                id: 'onboarding_1_welcome',
                source: require('../assets/Onbording_1.webp'),
                renderBottomBar: renderBottomBar,
              },
              {
                id: 'onboarding_2_choose',
                source: require('../assets/Onbording_2.webp'),
                renderBottomBar: renderBottomBar,
              },
              {
                id: 'onboarding_3_copy',
                source: require('../assets/Onbording_3.webp'),
                renderBottomBar: renderBottomBar,
              },
              {
                id: 'onboarding_4_bet',
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
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});
