import * as React from 'react';
import { Dimensions, Image, View } from 'react-native';
const Slide = ({ source }) => {
    return (React.createElement(View, null,
        React.createElement(Image, { source: source, style: {
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
            } })));
};
export default Slide;
