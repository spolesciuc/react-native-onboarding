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
    left: 0,
  },
  rightContainer: {
    right: 0,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    ...Proportions.slideSize,
    position: 'absolute',
  },
});

export default styles;
