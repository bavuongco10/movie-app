import React from 'react';
import {
  Tabs
} from 'native-base';
import Info from '../detailInfo';
import Trailers from '../detailTrailers';
import Reviews from '../detailReviews';
import myTheme from '../../themes/base-theme';

export default ({item}) => (
  <Tabs theme={myTheme}>
    <Info tabLabel="Info"/>
    <Trailers tabLabel="Trailers"/>
    <Reviews tabLabel="Reviews"/>
  </Tabs>
)