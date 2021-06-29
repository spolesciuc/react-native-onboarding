import {Collections} from '../../types';
import React from 'react';

declare type Props = {
    duration: number;
    collectionId: string | undefined;
    collections: Collections;
};
declare const CollectionProvider: React.FC<Props>;
export default CollectionProvider;
