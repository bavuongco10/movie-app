import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import ImageSwiper from '../imageSwiper';
import TabTwo from '../tabs/tabTwo';
import CustomTabBar from '../customTabBar';
import {
  ScrollView,
} from 'react-native';

export default () => (
  <ScrollableTabView
    renderTabBar={()=><CustomTabBar/>}
  >
    <ScrollView tabLabel="Now Playing">
      <ImageSwiper/>
    </ScrollView>

    <ScrollView tabLabel="Coming Soon">
      <TabTwo />
    </ScrollView>

  </ScrollableTabView>
);