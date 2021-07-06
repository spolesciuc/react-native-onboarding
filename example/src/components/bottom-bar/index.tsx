import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

type Props = {
  onPressSkip: () => void;
  onPressPrev: () => void;
  onPressNext: () => void;
};

const BottomBar: React.FC<Props> = ({
  onPressSkip,
  onPressPrev,
  onPressNext,
}) => {
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={onPressSkip}>
        <Text>Skip</Text>
      </Pressable>
      <Pressable onPress={onPressPrev}>
        <Text>Prev</Text>
      </Pressable>
      <Pressable onPress={onPressNext}>
        <Text>Next</Text>
      </Pressable>
    </View>
  );
};

export default BottomBar;
