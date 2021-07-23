import * as React from 'react';
import { PanResponder, View } from 'react-native';
import styles from './styles';

type Props = {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  offset?: number;
};

const Gesture: React.FC<Props> = ({ children, onSwipeLeft, onSwipeRight }) => {
  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderRelease: (_, gestureState) => {
          let x = gestureState.dx;
          let y = gestureState.dy;

          console.log('131221');

          if (Math.abs(x) > Math.abs(y)) {
            if (x >= 0) {
              if (onSwipeRight) {
                onSwipeRight();
              }
            } else {
              if (onSwipeLeft) {
                onSwipeLeft();
              }
            }
          }
        },
      }),
    [onSwipeLeft, onSwipeRight],
  );

  return (
    <View {...panResponder.panHandlers} style={styles.wrapper}>
      {children}
    </View>
  );
};

export default Gesture;
