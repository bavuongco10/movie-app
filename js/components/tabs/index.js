import React from 'react';
import { Tabs } from 'native-base';

import ImageSwiper from '../imageSwiper';
import TabTwo from '../tabs/tabTwo';

export default () => (
  <Tabs>
    <ImageSwiper tabLabel="Now Playing"/>
    <TabTwo tabLabel="Coming Soon"/>
  </Tabs>
);