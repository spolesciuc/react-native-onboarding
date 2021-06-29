import { StyleSheet } from 'react-native';
import Proportions from '../../utils/proportions';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'red',
    height: 15,
    width: Proportions.slideSize.width,
  },
});

export default styles;
