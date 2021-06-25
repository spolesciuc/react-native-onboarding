import * as React from 'react';
import Collection from './components/collection';
const Onboarding = ({ data }) => {
    return React.createElement(Collection, { slides: data[0]?.slides || [] });
};
export default Onboarding;
