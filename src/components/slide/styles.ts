import { StyleSheet } from 'react-native';
import Proportions from '../../utils/proportions';

const SECTION_WIDTH = Proportions.slideSize.width / 4;

const styles = StyleSheet.create({
  wrapper: {
    ...Proportions.slideSize,
  },
  sideContainer: {
    height: Proportions.slideSize.height,
    zIndex: 1,
    elevation: 1,
  },
  leftContainer: {
    width: SECTION_WIDTH,
  },
  rightContainer: {
    width: SECTION_WIDTH * 3,
  },
  image: {
    ...Proportions.slideSize,
    position: 'absolute',
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default styles;
