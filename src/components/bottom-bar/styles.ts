import { StyleSheet } from 'react-native';
import Proportions from '../../utils/proportions';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'green',
    zIndex: 2,
    elevation: 2,
    position: 'absolute',
    bottom: 0,
    width: Proportions.slideSize.width,
  },
});

export default styles;
