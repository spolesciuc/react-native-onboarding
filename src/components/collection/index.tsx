import * as React from 'react';
import { CollectionPropType } from '../onboarding/types';
import { View } from 'react-native';
import Slide, { SlideProps } from '../slide';
import styles from './styles';

export type CollectionProps = CollectionPropType & SlideProps;

type Props = CollectionProps & {
  onAllStoriesEnd?: (collectionId: string) => void;
  index: number;
};

const Collection: React.FC<Props> = ({
  slides = [],
  index = 0,
  color,
  unfilledColor,
  height,
}) => {
  const ids = React.useMemo(() => {
    return slides.map((_, i) => i);
  }, [slides]);

  return (
    <View style={styles.wrapper}>
      <Slide
        key={index}
        stepIds={ids}
        source={slides[index].source}
        renderBottomBar={slides[index].renderBottomBar}
        color={color}
        unfilledColor={unfilledColor}
        height={height}
      />
    </View>
  );
};

export default Collection;
