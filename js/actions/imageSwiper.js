import axios from 'axios';
import type { Action } from './types';
import _ from 'lodash';
import {
  ITEMS_HAS_ERRORED,
  ITEMS_IS_LOADING,
  FETCH_NOW_PLAYING_SUCCESS,
  SWIPER_IMAGE_INDEX,
  ON_SWIPER_SCROLL_END_SUCCESS,
  SET_CURRENT_ITEM_ID_SUCCESS,
} from '../constants/actionType';

export function itemsHasErrored(hasErrored): Action {
  return {
    type: ITEMS_HAS_ERRORED,
    hasErrored
  };
}

export function itemsIsLoading(isLoading): Action {
  return {
    type: ITEMS_IS_LOADING,
    isLoading
  };
}

export function fetchNowPlayingSuccess(items): Action {
  return {
    type: FETCH_NOW_PLAYING_SUCCESS,
    items
  };
}

export function errorAfterFiveSeconds() {
  // We return a function instead of an action object
  return (dispatch) => {
    setTimeout(() => {
      // This function is able to dispatch other action creators
      dispatch(itemsHasErrored(true));
    }, 5000);
  };
}

export function fetchNowPlaying() {
  const uri = 'https://api.themoviedb.org/3/movie/now_playing?api_key=903aec734823b64427c405dec09fe3ee';
  return async (dispatch) => {
    try {
      dispatch(itemsIsLoading(true));
      const res = await axios.get(uri);
      if (!res.data) throw new Error();
      const items = res.data.results;
      const slicedItems = _.slice(items,3, 6);
      dispatch(fetchNowPlayingSuccess(slicedItems));
    } catch (err) {
      dispatch(itemsHasErrored(true));
    }
  }
};

export function currentSwiperIndex(currentSwiperIndex) {
  return {
    type: SWIPER_IMAGE_INDEX,
    currentSwiperIndex
  };
}

export function onSwiperScrollEndSuccess(swiperState) {
  return {
    type: ON_SWIPER_SCROLL_END_SUCCESS,
    swiperState
  }
}

export function onSwiperScrollEnd(state) {
  return( dispatch => {
    dispatch(currentSwiperIndex(state.index));
    dispatch(onSwiperScrollEndSuccess(state));
  });
}


export function setcurrentItemIdSuccess(itemId) {
  return {
    type: SET_CURRENT_ITEM_ID_SUCCESS,
    itemId,
  }
}

export function setCurrentItemId(id) {
  return (dispatch => dispatch(setcurrentItemIdSuccess(id)))
}