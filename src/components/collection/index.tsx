import { CollectionPropType } from '../../types';
import { View } from 'react-native';
import React from 'react';
import Slide from '../slide';

type Props = CollectionPropType & {
  onAllStoriesEnd?: (collectionId: string) => void;
};

const Collection: React.FC<Props> = ({ slides = [] }) => {
  return (
    <View>
      <Slide
        source={slides[0].source}
        renderBottomBar={slides[0].renderBottomBar}
      />
    </View>
  );
};

export default Collection;
