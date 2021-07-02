import * as React from 'react';
import { CollectionPropType } from '../onboarding/types';
import { View } from 'react-native';
import Slide from '../slide';
import styles from './styles';

type Props = CollectionPropType & {
  onAllStoriesEnd?: (collectionId: string) => void;
  index: number;
};

const Collection: React.FC<Props> = ({ slides = [], index = 0 }) => {
  const ids = React.useMemo(() => {
    return slides.map((_, i) => i);
  }, [slides]);

  return (
    <View style={styles.wrapper}>
      <Slide
        key={index}
        stepIds={ids}
        source={slides[index].source}
        renderBottomBar={slides[index].renderBottomBar}
      />
    </View>
  );
};

export default Collection;
