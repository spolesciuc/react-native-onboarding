import { Dimensions, Platform, View } from 'react-native';
import { SlidePropType, Slides } from '../onboarding/types';
import Carousel, { getInputRangeFromIndexes } from 'react-native-snap-carousel';
import React from 'react';

const Window = Dimensions.get('window');

const width = Window.width;
const height = Window.height;

function toRadians(angle) {
  return angle * (Math.PI / 180);
}

const POSITION = Platform.OS === 'ios' ? 2 : 1.5;
const ZOOM = Math.sin(toRadians(65));
const MARGIN25 = (width - 320) / 31.3 + 7;
const MARGIN50 = (width - 320) / 23.5 + 13;
const MARGIN100 = (width - 320) / 47 + 5;

type Props = {
  data: Slides;
  renderSlide: (item: SlidePropType, index: number) => React.ReactElement;
  slideIndex: number;
  onChangeIndex: (index: number) => void;
};

const CubeCarousel: React.FC<Props> = ({
  slideIndex,
  data,
  renderSlide,
  onChangeIndex,
}) => {
  const ref = React.useRef<any>();

  const scrollInterpolator = React.useCallback((index, carouselProps) => {
    const range = [1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;
    return { inputRange, outputRange };
  }, []);

  const animatedStyles = React.useCallback((_, scrollX) => {
    return {
      transform: [
        {
          perspective: 2 * width,
        },
        {
          translateX: scrollX.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [width / POSITION, 0, -width / POSITION],
          }),
        },
        {
          rotateY: scrollX.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: ['-90deg', '0deg', '90deg'],
          }),
        },
        {
          scale: scrollX.interpolate({
            inputRange: [-1, -0.5, 0, 0.5, 1],
            outputRange: [1, ZOOM, 1, ZOOM, 1],
          }),
        },
        {
          translateX: scrollX.interpolate({
            inputRange: [-1, -0.75, -0.5, 0, 0.5, 0.75, 1],
            outputRange: [
              -width / POSITION + MARGIN100,
              (-width * ZOOM * 0.75) / POSITION + MARGIN25,
              (-width * ZOOM * 0.5) / POSITION + MARGIN50,
              0,
              (width * ZOOM * 0.5) / POSITION - MARGIN50,
              (width * ZOOM * 0.75) / POSITION - MARGIN25,
              width / POSITION - MARGIN100,
            ],
          }),
        },
      ],
      opacity: scrollX.interpolate({
        inputRange: [-0.8, -0.5, 0.5, 0.8],
        outputRange: [0.4, 1, 1, 0.4],
      }),
    };
  }, []);

  const renderItem = React.useCallback(
    ({ item, index }) => {
      return (
        <View
          style={[
            {
              height: height,
              backgroundColor: item.color,
            },
          ]}>
          {renderSlide(item, index)}
        </View>
      );
    },
    [renderSlide],
  );

  const handleBeforeSnapToItem = React.useCallback(
    (index: number) => {
      onChangeIndex(index);
    },
    [onChangeIndex],
  );

  React.useEffect(() => {
    ref.current?.snapToItem(slideIndex, true);
  }, [slideIndex]);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height,
        backgroundColor: '#282828',
      }}>
      <Carousel
        ref={ref}
        containerCustomStyle={{ width }}
        data={data}
        useScrollView={true}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        onSnapToItem={handleBeforeSnapToItem}
      />
    </View>
  );
};

export default CubeCarousel;
