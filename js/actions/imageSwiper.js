import path from 'path';
import axios from 'axios';
import type { Action } from './types';

export const FETCH_NOW_PLAYING_SUCCESS = 'FETCH_NOW_PLAYING_SUCCESS';

export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';

export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';

export function itemsHasErrored(bool): Action {
  return {
    type: ITEMS_HAS_ERRORED,
    hasErrored: bool
  };
}

export function itemsIsLoading(bool): Action {
  return {
    type: ITEMS_IS_LOADING,
    isLoading: bool
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
      dispatch(fetchNowPlayingSuccess(items));
    } catch (err) {
      dispatch(itemsHasErrored(true));
    }
  }
};
