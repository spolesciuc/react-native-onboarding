import { Animated, Easing, View } from 'react-native';
import React from 'react';
import styles from './styles';

export type ProgressProps = {
  progress: number;
  color: string;
  unfilledColor: string;
};

type Props = ProgressProps & {
  completed: boolean;
  active: boolean;
  width: number;
};

const INDETERMINATE_MAX_WIDTH = 0.6;

const Progress: React.FC<Props> = ({ completed, progress, active, width }) => {
  const progressAnimated = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (active) {
      Animated.timing(progressAnimated, {
        toValue: progress,
        duration: 1000,
        useNativeDriver: false,
        easing: Easing.ease,
        isInteraction: false,
      }).start();
    }
  }, [active, progressAnimated, progress]);

  // const styled = React.useMemo(() => {
  //   let stateStyle: Animated.AnimatedProps<StyleProp<ViewStyle>> = {
  //     flex: 0,
  //   };
  //   if (completed) {
  //     stateStyle = {
  //       flex: 1,
  //     };
  //   } else if (active) {
  //     stateStyle = {
  //       flex: progress,
  //     };
  //   }
  //
  //   return StyleSheet.flatten([styles.progress, stateStyle]);
  // }, [active, completed, progress]);

  const styled = React.useMemo(() => {
    return {
      width: width,
      transform: [
        {
          translateX: progressAnimated.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [
              -0.5 * width,
              -0.5 * INDETERMINATE_MAX_WIDTH * width,
              0.7 * width,
            ],
          }),
        },
        {
          scaleX: progressAnimated.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0.0001, INDETERMINATE_MAX_WIDTH, 0.0001],
          }),
        },
      ],
    };
  }, [progressAnimated, width]);

  return (
    <View style={[styles.wrapper]}>
      <Animated.View style={styled} />
    </View>
  );
};

export default Progress;
