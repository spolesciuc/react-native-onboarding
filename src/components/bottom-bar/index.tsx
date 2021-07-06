import * as React from 'react';
import { View } from 'react-native';
import styles from './styles';

type Props = {
  render: () => React.ReactElement;
};

const BottomBar: React.FC<Props> = ({ render }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.innerWrapper}>{render()}</View>
    </View>
  );
};

export default BottomBar;
