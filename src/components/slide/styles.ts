import { StyleSheet } from 'react-native';
import Proportions from '../../utils/proportions';

const styles = StyleSheet.create({
  wrapper: {
    ...Proportions.slideSize,
  },
  sideContainer: {
    width: Proportions.slideSize.width / 2,
    height: Proportions.slideSize.height,
    zIndex: 1,
    elevation: 1,
  },
  leftContainer: {},
  rightContainer: {},
  image: {
    ...Proportions.slideSize,
    position: 'absolute',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default styles;
