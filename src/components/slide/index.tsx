import { ifIphoneX } from 'react-native-iphone-x-helper';
import { Image, Pressable, SafeAreaView, View } from 'react-native';
import { SlidePropType } from '../onboarding/types';
import BottomBar from '../bottom-bar';
import React from 'react';
import Steps from '../steps';
import styles from './styles';
import useCollection from '../../hooks/useCollection';

type Props = SlidePropType & {
  stepIds: Array<number>;
};

const Slide: React.FC<Props> = ({ source, renderBottomBar, stepIds }) => {
  const [isPaused, setIsPaused] = React.useState(false);
  const [, setLoading] = React.useState(false);
  const { onPrev, onNext, slideIndex, duration } = useCollection();
  const [ready, setReady] = React.useState(false);
  const [start, setStart] = React.useState(new Date());

  console.log(ifIphoneX, '@ifIphoneX');

  const onPauseStart = React.useCallback(() => {
    setIsPaused(true);
  }, []);

  const onPauseEnd = React.useCallback(() => {
    setIsPaused(false);
  }, []);

  const handleProgressEnd = React.useCallback(() => {
    onNext();
  }, [onNext]);

  const handleLoadStart = React.useCallback(() => {
    setLoading(true);
  }, []);

  const handleLoadEnd = React.useCallback(() => {
    setLoading(false);
    setReady(true);
  }, []);

  const handlePrev = React.useCallback(() => {
    const timeDiff = new Date().getTime() - start.getTime();
    if (timeDiff > duration / 5) {
      setStart(new Date());
    } else {
      onPrev();
    }
  }, [duration, onPrev, start]);

  const handleNext = React.useCallback(() => {
    onNext();
  }, [onNext]);

  return (
    <View style={styles.wrapper}>
      <Image
        source={source}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        style={styles.image}
      />
      <SafeAreaView style={styles.safeArea}>
        <Steps
          key={start.toISOString()}
          index={slideIndex}
          color={'red'}
          unfilledColor={'blue'}
          ids={stepIds}
          isPaused={isPaused}
          ready={ready}
          duration={duration}
          onEndAnimate={handleProgressEnd}
        />
        {renderBottomBar ? <BottomBar render={renderBottomBar} /> : null}
      </SafeAreaView>

      <Pressable
        style={[styles.sideContainer, styles.leftContainer]}
        onPress={handlePrev}
        onLongPress={onPauseStart}
        onPressOut={onPauseEnd}
        delayLongPress={300}
      />
      <Pressable
        style={[styles.sideContainer, styles.rightContainer]}
        onPress={handleNext}
        onLongPress={onPauseStart}
        onPressOut={onPauseEnd}
        delayLongPress={300}
      />
    </View>
  );
};

export default Slide;
