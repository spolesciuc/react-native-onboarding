import * as React from 'react';
import GestureRecognizer from '../swipe-gestures';
import styles from './styles';

type Props = {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
};

const Gesture: React.FC<Props> = ({ children, onSwipeLeft, onSwipeRight }) => {
  const config = React.useMemo(
    () => ({
      velocityThreshold: 0.2,
      directionalOffsetThreshold: 50,
    }),
    [],
  );

  return (
    <GestureRecognizer
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      config={config}
      style={styles.wrapper}>
      {children}
    </GestureRecognizer>
  );
};

export default Gesture;
