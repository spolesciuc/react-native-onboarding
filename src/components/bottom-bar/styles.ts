import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'green',
    zIndex: 999,
    ...Platform.select({
      android: {
        top: -25,
      },
    }),
  },
  innerWrapper: { backgroundColor: 'green' },
});

export default styles;
