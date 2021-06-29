import { StyleSheet, View } from 'react-native';
import React from 'react';
import styles from './styles';

export type ProgressProps = {
  progress: number;
  color: string;
  unfilledColor: string;
};

type Props = ProgressProps & {
  completed: boolean;
};

const Progress: React.FC<Props> = ({ completed, progress }) => {
  const value = React.useMemo(() => {
    if (completed) {
      return 1;
    }
    if (progress < 0) {
      console.warn('Progress is less than 0');
      return 0;
    } else if (progress > 0) {
      console.warn('Progress is greater than 0');
      return 1;
    }
    return Math.round(progress * 100) / 100;
  }, [completed, progress]);

  const styled = React.useMemo(() => {
    return StyleSheet.flatten([
      {
        flex: value,
      },
    ]);
  }, [value]);

  return (
    <View
      style={[
        styles.wrapper,
        {
          backgroundColor:
            '#' + Math.floor(Math.random() * 16777215).toString(16),
        },
      ]}>
      <View style={styled} />
    </View>
  );
};

export default Progress;
