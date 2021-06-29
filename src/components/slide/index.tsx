import { Image, Pressable, SafeAreaView, View } from 'react-native';
import { SlidePropType } from '../../types';
import BottomBar from '../bottom-bar';
import React from 'react';
import Steps from '../steps';
import styles from './styles';
import useCollection from '../../hooks/useCollection';

type Props = SlidePropType & {
  ids: Array<number>;
};

const Slide: React.FC<Props> = ({ source, renderBottomBar, ids }) => {
  const { onPrev, onNext, onPauseStart, onPauseEnd, progress } =
    useCollection();

  const [loading, setLoading] = React.useState(false);

  const handleLoadStart = React.useCallback(() => {
    setLoading(true);
  }, []);

  const handleLoadEnd = React.useCallback(() => {
    setLoading(false);
  }, []);

  console.log(loading, '@loading');

  console.log(ids, '@ids');

  return (
    <View style={styles.wrapper}>
      <Pressable
        style={[styles.sideContainer, styles.leftContainer]}
        onPress={onPrev}
        onLongPress={onPauseStart}
        onPressOut={onPauseEnd}
      />
      <SafeAreaView style={styles.safeArea}>
        <Steps
          progress={progress}
          color={'red'}
          unfilledColor={'blue'}
          index={0}
          ids={ids}
        />
        <Image
          source={source}
          onLoadStart={handleLoadStart}
          onLoadEnd={handleLoadEnd}
          style={styles.image}
        />
        {renderBottomBar ? <BottomBar render={renderBottomBar} /> : null}
      </SafeAreaView>

      <Pressable
        style={[styles.sideContainer, styles.rightContainer]}
        onPress={onNext}
        onLongPress={onPauseStart}
        onPressOut={onPauseEnd}
      />
    </View>
  );
};

export default Slide;
