import * as React from 'react';
import { View } from 'react-native';
import Slide from '../slide';
const Collection = ({ slides }) => {
    return (React.createElement(View, null,
        React.createElement(Slide, { source: slides[0].source })));
};
export default Collection;
