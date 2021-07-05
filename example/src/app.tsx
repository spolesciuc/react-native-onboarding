import * as React from 'react';
import BottomBar from './components/bottom-bar';
import Onboarding, {
  OnboardingRefProps,
} from '@stanislavpoleshuk/react-native-onboarding';

const App = () => {
  const ref = React.useRef<OnboardingRefProps>(null);

  const handlePressPrev = React.useCallback(() => {
    console.log('@handlePressPrev');
    if (ref?.current) {
      ref.current.onPrev();
    }
  }, []);

  const handlePressNext = React.useCallback(() => {
    console.log('@handlePressNext');
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

  return (
    <Onboarding
      ref={ref}
      color={'#FFFF'}
      unfilledColor={'red'}
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
  );
};

export default App;
