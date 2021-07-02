import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

type Props = {
  onPressPrev: () => void;
  onPressNext: () => void;
};

const BottomBar: React.FC<Props> = ({ onPressPrev, onPressNext }) => {
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={onPressPrev}>
        <Text>prev</Text>
      </Pressable>
      <Pressable onPress={onPressNext}>
        <Text>next</Text>
      </Pressable>
    </View>
  );
};

export default BottomBar;
