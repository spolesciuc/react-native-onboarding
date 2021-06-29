import { Dimensions, Image, Pressable, View } from 'react-native';
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
      <Steps
        progress={progress}
        color={'red'}
        unfilledColor={'blue'}
        index={0}
        ids={ids}
      />
      <Pressable
        style={[styles.sideContainer, styles.leftContainer]}
        onPress={onPrev}
        onLongPress={onPauseStart}
        onPressOut={onPauseEnd}
      />
      <Image
        source={source}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
        }}
      />
      {renderBottomBar ? <BottomBar render={renderBottomBar} /> : null}
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
