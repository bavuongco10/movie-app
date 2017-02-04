import React from 'react';
import { Tabs } from 'native-base';

import TabOne from '../tabs/tabOne';
import TabTwo from '../tabs/tabTwo';

// tabs base on react-native-scrollable-tab-view
export default () => (
  <Tabs>
    <TabOne tabLabel="Features"/>
    <TabTwo tabLabel="About"/>
  </Tabs>
);