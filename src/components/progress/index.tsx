import * as React from 'react';
import { Animated, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import styles from './styles';

export type ProgressProps = {
  color: string;
  unfilledColor: string;
  height?: number;
};

type Props = ProgressProps & {
  completed: boolean;
  progress: Animated.AnimatedValue | null;
};

const Progress: React.FC<Props> = ({
  completed,
  progress,
  height = 2,
  color = 'red',
  unfilledColor = 'white',
}) => {
  const lineStyled = React.useMemo(() => {
    let stateStyle: Animated.AnimatedProps<StyleProp<ViewStyle>> = {
      flex: 0,
    };
    if (completed) {
      stateStyle = {
        flex: 1,
      };
    } else if (progress) {
      stateStyle = {
        flex: progress,
      };
    }

    return StyleSheet.flatten([
      styles.progress,
      stateStyle,
      {
        backgroundColor: color,
      },
    ]);
  }, [color, completed, progress]);

  const styled = React.useMemo(() => {
    return StyleSheet.flatten([
      styles.wrapper,
      {
        height,
        backgroundColor: unfilledColor,
        borderRadius: height / 2,
      },
    ]);
  }, [height, unfilledColor]);

  return (
    <View style={styled}>
      <Animated.View style={lineStyled} />
    </View>
  );
};

export default Progress;
