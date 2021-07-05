import * as React from 'react';
import {CollectionPropType} from '../onboarding/types';
import {SlideProps} from '../slide';

export declare type CollectionProps = CollectionPropType & SlideProps;
declare type Props = CollectionProps & {
    onAllStoriesEnd?: (collectionId: string) => void;
    index: number;
};
declare const Collection: React.FC<Props>;
export default Collection;
