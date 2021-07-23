import { Dimensions, StyleSheet } from 'react-native';

const Window = Dimensions.get('window');

const width = Window.width;
const height = Window.height;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
    backgroundColor: '#282828',
  },
});

export default styles;
