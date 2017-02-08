
import { combineReducers } from 'redux';

import drawer from './drawer';
import cardNavigation from './cardNavigation';
import list from './list';
import {
  items,
  itemsHasErrored,
  itemsIsLoading,
  currentSwiperIndex,
  swiperScrollEnd
} from './imageSwiper';
export default combineReducers({
  drawer,
  list,
  cardNavigation,
  items,
  itemsHasErrored,
  itemsIsLoading,
  currentSwiperIndex,
  swiperScrollEnd,
});
