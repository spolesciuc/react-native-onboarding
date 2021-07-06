import * as React from 'react';
import { CollectionPropType } from '../onboarding/types';
import { View } from 'react-native';
import CubeCarousel from '../cube-carousel';
import Slide, { SlideProps } from '../slide';
import styles from './styles';

export type CollectionProps = CollectionPropType & SlideProps;

type Props = CollectionProps & {
  onAllStoriesEnd?: (collectionId: string) => void;
  slideIndex: number;
  onChangeIndex: (index: number) => void;
};

const Collection: React.FC<Props> = ({
  slides = [],
  slideIndex = 0,
  onChangeIndex,
  color,
  unfilledColor,
  height,
}) => {
  const ids = React.useMemo(() => {
    return slides.map((_, i) => i);
  }, [slides]);

  const renderSlide = React.useCallback(
    (item, index) => {
      return (
        <Slide
          index={index}
          stepIds={ids}
          source={item.source}
          renderBottomBar={item.renderBottomBar}
          color={color}
          unfilledColor={unfilledColor}
          height={height}
        />
      );
    },
    [color, height, ids, unfilledColor],
  );

  return (
    <View style={styles.wrapper}>
      <CubeCarousel
        slideIndex={slideIndex}
        onChangeIndex={onChangeIndex}
        data={slides}
        renderSlide={renderSlide}
      />
    </View>
  );
};

export default Collection;
