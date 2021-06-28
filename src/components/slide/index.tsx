import * as React from 'react';
import { Dimensions, Image, View } from 'react-native';
import { SlidePropType } from '../../types';
import styles from './styles';

type Props = SlidePropType & {};

const Slide: React.FC<Props> = ({ source }) => {
  const [loading, setLoading] = React.useState(false);

  const handleLoadStart = React.useCallback(() => {
    setLoading(true);
  }, []);

  const handleLoadEnd = React.useCallback(() => {
    setLoading(false);
  }, []);

  console.log(loading, '@loading');

  return (
    <View style={styles.wrapper}>
      <Image
        source={source}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
        }}
      />
    </View>
  );
};

export default Slide;
