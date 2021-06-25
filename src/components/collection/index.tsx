import * as React from 'react';
import { ICollection } from '../../interfaces';
import { View } from 'react-native';
import Slide from '../slide';

type Props = ICollection & {};

const Collection: React.FC<Props> = ({ slides }) => {
  return (
    <View>
      <Slide source={slides[0].source} />
    </View>
  );
};

export default Collection;
