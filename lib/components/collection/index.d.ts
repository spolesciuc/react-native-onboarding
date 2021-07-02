import * as React from 'react';
import {CollectionPropType} from '../onboarding/types';

declare type Props = CollectionPropType & {
    onAllStoriesEnd?: (collectionId: string) => void;
    index: number;
};
declare const Collection: React.FC<Props>;
export default Collection;
