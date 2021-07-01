import { View } from 'react-native';
import Progress, { ProgressProps } from '../progress';
import React from 'react';
import styles from './styles';
import useProgress from '../../hooks/useProgress';

type Props = ProgressProps & {
  ids: Array<number>;
  index: number;
  isPaused: boolean;
  duration: number;
  ready: boolean;
  onEndAnimate: () => void;
};

const Steps: React.FC<Props> = ({
  ids,
  index,
  color,
  unfilledColor,
  isPaused,
  duration,
  ready,
  onEndAnimate,
}) => {
  const { progress } = useProgress(isPaused, duration, ready, onEndAnimate);

  return (
    <View style={styles.wrapper}>
      {ids.map((i) => (
        <Progress
          key={`${i}${i === index && ':active'}`}
          completed={i < index}
          progress={i === index ? progress : null}
          color={color}
          unfilledColor={unfilledColor}
        />
      ))}
    </View>
  );
};

export default Steps;
