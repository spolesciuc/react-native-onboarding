import { StyleSheet } from 'react-native';
import Proportions from '../../utils/proportions';

const styles = StyleSheet.create({
  wrapper: {
    ...Proportions.slideSize,
  },
  sideContainer: {
    width: Proportions.slideSize.width / 2,
    height: Proportions.slideSize.height,
    position: 'absolute',
    zIndex: 1,
    elevation: 1,
  },
  leftContainer: {
    // backgroundColor: 'blue',
    left: 0,
  },
  rightContainer: {
    // backgroundColor: 'red',
    right: 0,
  },
});

export default styles;
