import * as React from 'react';
import { AppState, Image, Pressable, SafeAreaView, View } from 'react-native';
import { SlidePropType } from '../onboarding/types';
import BottomBar from '../bottom-bar';
import Steps, { StepsProps } from '../steps';
import styles from './styles';
import useCollection from '../../hooks/useCollection';

export type SlideProps = StepsProps & {};

type Props = SlidePropType &
  SlideProps & {
    index: number;
    stepIds: Array<number>;
  };

const Slide: React.FC<Props> = ({
  source,
  renderBottomBar,
  index,
  stepIds,
  color,
  unfilledColor,
  height,
}) => {
  const [isPaused, setIsPaused] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const {
    onPrev,
    onNext,
    slideIndex,
    duration,
    onCollectionEnd,
    renderLoader,
  } = useCollection();
  const [ready, setReady] = React.useState(false);
  const [start, setStart] = React.useState(new Date());
  const appState = React.useRef(AppState.currentState);
  const [, setAppStateVisible] = React.useState(appState.current);

  const onPauseStart = React.useCallback(() => {
    setIsPaused(true);
  }, []);

  const onPauseEnd = React.useCallback(() => {
    setIsPaused(false);
  }, []);

  const handleProgressEnd = React.useCallback(() => {
    if (index === slideIndex && slideIndex === stepIds[stepIds.length - 1]) {
      setReady(false);
      const t = setTimeout(() => {
        onCollectionEnd();
        clearTimeout(t);
      }, 10);
      return;
    }
    onNext();
  }, [index, onCollectionEnd, onNext, slideIndex, stepIds]);

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

  const Loader = React.useCallback(() => {
    return renderLoader ? renderLoader() : null;
  }, [renderLoader]);

  const handleAppStateChange = React.useCallback(
    (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        onPauseEnd();
      } else {
        onPauseStart();
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    },
    [onPauseEnd, onPauseStart],
  );

  React.useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, [handleAppStateChange]);

  return (
    <View style={styles.wrapper}>
      <Image
        source={source}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        style={styles.image}
      />
      <SafeAreaView style={styles.safeArea}>
        {loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <Steps
              key={start.toISOString()}
              index={index}
              ids={stepIds}
              isPaused={isPaused}
              ready={ready && index === slideIndex}
              duration={duration}
              onEndAnimate={handleProgressEnd}
              color={color}
              unfilledColor={unfilledColor}
              height={height}
            />
            <View style={styles.content}>
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
            {renderBottomBar ? <BottomBar render={renderBottomBar} /> : null}
          </React.Fragment>
        )}
      </SafeAreaView>
    </View>
  );
};

export default Slide;
