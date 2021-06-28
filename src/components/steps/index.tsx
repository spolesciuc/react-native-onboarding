import { View } from 'react-native';
import Progress, { ProgressProps } from '../progress';
import React from 'react';
import styles from './styles';

type Props = ProgressProps & {
  ids: Array<number>;
  index: number;
};

const Steps: React.FC<Props> = ({
  ids,
  index,
  progress,
  color,
  unfilledColor,
}) => {
  return (
    <View style={styles.wrapper}>
      {ids.map((i) => (
        <Progress
          key={i}
          completed={i < index}
          progress={progress}
          color={color}
          unfilledColor={unfilledColor}
        />
      ))}
    </View>
  );
};

export default Steps;
