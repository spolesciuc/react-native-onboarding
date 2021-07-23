import * as React from 'react';
import { View } from 'react-native';
import Progress, { ProgressProps } from '../progress';
import styles from './styles';
import useProgress from '../../hooks/useProgress';

export type StepsProps = ProgressProps & {};

type Props = StepsProps & {
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
  height,
  ready,
  onEndAnimate,
}) => {
  const {
    progress,
    pauseTimer,
    startTimer,
    continueTimer,
    resetTimer,
    resetProgress,
  } = useProgress(duration, onEndAnimate);

  React.useEffect(() => {
    if (ready) {
      if (isPaused) {
        pauseTimer();
      } else {
        continueTimer();
      }
    }
  }, [ready, isPaused, pauseTimer, continueTimer, startTimer]);

  React.useEffect(() => {
    if (ready) {
      startTimer();
    } else {
      resetProgress();
    }

    return () => {
      resetTimer();
    };
  }, [startTimer, resetTimer, ready, resetProgress]);

  return (
    <View style={styles.wrapper}>
      {ids.map((i) => (
        <Progress
          key={`${i}:${i === index ? 'active' : ''}`}
          completed={i < index}
          progress={i === index ? progress : null}
          color={color}
          unfilledColor={unfilledColor}
          height={height}
        />
      ))}
    </View>
  );
};

export default Steps;
