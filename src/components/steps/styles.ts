import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 1,
    elevation: 1,
    flexDirection: 'row',
    paddingHorizontal: 26,
    paddingTop: 10,
    position: 'absolute',
    top: getStatusBarHeight() + 10,
  },
});

export default styles;
