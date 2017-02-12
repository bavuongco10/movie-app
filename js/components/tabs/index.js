import React from 'react';
import { Tabs } from 'native-base';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import ImageSwiper from '../imageSwiper';
import TabTwo from '../tabs/tabTwo';
import CustomTabBar from '../customTabBar';

export default () => (
  <ScrollableTabView
    renderTabBar={()=><CustomTabBar/>}
  >
    <ImageSwiper tabLabel="Now Playing"/>
    <TabTwo tabLabel="Coming Soon"/>
  </ScrollableTabView>
);