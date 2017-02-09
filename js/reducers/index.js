import { combineReducers } from 'redux';
import drawer from './drawer';
import cardNavigation from './cardNavigation';

import {
  items,
  itemsHasErrored,
  itemsIsLoading,
  currentSwiperIndex,
  swiperScrollEnd,
  currentItemId
} from './imageSwiper';
export default combineReducers({
  drawer,
  cardNavigation,
  items,
  itemsHasErrored,
  itemsIsLoading,
  currentSwiperIndex,
  swiperScrollEnd,
  currentItemId
});
