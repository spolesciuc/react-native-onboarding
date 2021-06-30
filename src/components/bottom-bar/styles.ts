import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'green',
    ...Platform.select({
      android: {
        top: -25,
      },
    }),
  },
  innerWrapper: { backgroundColor: 'green' },
});

export default styles;
