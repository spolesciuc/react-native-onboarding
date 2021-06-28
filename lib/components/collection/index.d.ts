import { CollectionPropType } from '../../types';
import React from 'react';
declare type Props = CollectionPropType & {
    onAllStoriesEnd?: (collectionId: string) => void;
};
declare const Collection: React.FC<Props>;
export default Collection;
