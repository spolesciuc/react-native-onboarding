import { Animated, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import styles from './styles';

export type ProgressProps = {
  progress: Animated.AnimatedValue;
  color: string;
  unfilledColor: string;
};

type Props = ProgressProps & {
  completed: boolean;
  active: boolean;
};

const Progress: React.FC<Props> = ({ completed, progress, active }) => {
  const styled = React.useMemo(() => {
    let stateStyle: Animated.AnimatedProps<StyleProp<ViewStyle>> = {
      flex: 0,
    };
    if (completed) {
      stateStyle = {
        flex: 1,
      };
    } else if (active) {
      stateStyle = {
        flex: progress,
      };
    }

    return StyleSheet.flatten([styles.progress, stateStyle]);
  }, [active, completed, progress]);

  return (
    <View style={[styles.wrapper]}>
      <Animated.View style={styled} />
    </View>
  );
};

export default Progress;
