import path from 'path';
import axios from 'axios';
import type { Action } from './types';
import _ from 'lodash';
export const FETCH_NOW_PLAYING_SUCCESS = 'FETCH_NOW_PLAYING_SUCCESS';

export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';

export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';

export const ON_SWIPER_SCROLL_END_SUCCESS = 'ON_SWIPER_SCROLL_END_SUCCESS';

export const SWIPER_IMAGE_INDEX = 'SWIPER_IMAGE_INDEX';

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
      const items = res.data.results.map(item => path.join('https://image.tmdb.org/t/p/w780/', item.poster_path));
      const slicedItems = _.slice(items,0, 7);
      dispatch(fetchNowPlayingSuccess(slicedItems));
    } catch (err) {
      dispatch(itemsHasErrored(true));
    }
  }
};

export function swiperImageIndex(swiperIndex) {
  return {
    type: SWIPER_IMAGE_INDEX,
    swiperIndex
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
    dispatch(swiperImageIndex(state.index));
    dispatch(onSwiperScrollEndSuccess(state));
  });
}
