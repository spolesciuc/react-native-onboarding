import { StyleSheet } from 'react-native';
import Proportions from '../../utils/proportions';

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 1,
    height: 2,
    flexDirection: 'row',
    paddingHorizontal: 26,
    width: Proportions.slideSize.width,
  },
});

export default styles;
