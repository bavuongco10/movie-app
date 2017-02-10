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

import {
  item,
  itemIsLoading
} from './details';

export default combineReducers({
  drawer,
  cardNavigation,
  items,
  itemsHasErrored,
  itemsIsLoading,
  currentSwiperIndex,
  swiperScrollEnd,
  currentItemId,
  item,
  itemIsLoading,
});
