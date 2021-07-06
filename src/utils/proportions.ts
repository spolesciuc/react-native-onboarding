import { Dimensions } from 'react-native';

class Proportions {
  static get slideSize() {
    return {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
    };
  }
}

export default Proportions;
