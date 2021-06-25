import * as React from 'react';
import { Collections } from './interfaces';
import Collection from './components/collection';

type Props = {
  duration?: number;
  data: Collections;
};

const Onboarding: React.FC<Props> = ({ data }) => {
  return <Collection slides={data[0]?.slides || []} />;
};

export default Onboarding;
