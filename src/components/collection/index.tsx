import { CollectionPropType } from '../../types';
import { View } from 'react-native';
import React from 'react';
import Slide from '../slide';

type Props = CollectionPropType & {
  onAllStoriesEnd?: (collectionId: string) => void;
};

const Collection: React.FC<Props> = ({ slides = [], startIndex = 0 }) => {
  const [index] = React.useState(startIndex);

  return (
    <View>
      <Slide source={slides[index].source} />
    </View>
  );
};

export default Collection;
