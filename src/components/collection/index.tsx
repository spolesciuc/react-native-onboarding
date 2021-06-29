import { CollectionPropType } from '../../types';
import { View } from 'react-native';
import React from 'react';
import Slide from '../slide';

type Props = CollectionPropType & {
  onAllStoriesEnd?: (collectionId: string) => void;
};

const Collection: React.FC<Props> = ({ slides = [] }) => {
  const ids = React.useMemo(() => {
    return slides.map((_, i) => i);
  }, [slides]);

  return (
    <View>
      <Slide
        ids={ids}
        source={slides[0].source}
        renderBottomBar={slides[0].renderBottomBar}
      />
    </View>
  );
};

export default Collection;
