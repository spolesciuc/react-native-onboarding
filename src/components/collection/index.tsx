import { CollectionPropType } from '../../types';
import { View } from 'react-native';
import React from 'react';
import Slide from '../slide';

type Props = CollectionPropType & {
  onAllStoriesEnd?: (collectionId: string) => void;
  index: number;
};

const Collection: React.FC<Props> = ({ slides = [], index = 0 }) => {
  const ids = React.useMemo(() => {
    return slides.map((_, i) => i);
  }, [slides]);

  return (
    <View>
      <Slide
        ids={ids}
        source={slides[index].source}
        renderBottomBar={slides[index].renderBottomBar}
      />
    </View>
  );
};

export default Collection;
