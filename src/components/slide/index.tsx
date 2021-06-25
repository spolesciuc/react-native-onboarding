import * as React from 'react';
import { Dimensions, Image, View } from 'react-native';
import { ISlide } from '../../interfaces';

type Props = ISlide & {};

const Slide: React.FC<Props> = ({ source }) => {
  return (
    <View>
      <Image
        source={source}
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
        }}
      />
    </View>
  );
};

export default Slide;
