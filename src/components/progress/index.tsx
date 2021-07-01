import { Animated, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import styles from './styles';

export type ProgressProps = {
  color: string;
  unfilledColor: string;
};

type Props = ProgressProps & {
  completed: boolean;
  progress: Animated.AnimatedValue | null;
};

const Progress: React.FC<Props> = ({ completed, progress }) => {
  const styled = React.useMemo(() => {
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

    return StyleSheet.flatten([styles.progress, stateStyle]);
  }, [completed, progress]);

  return (
    <View style={[styles.wrapper]}>
      <Animated.View style={styled} />
    </View>
  );
};

export default Progress;
