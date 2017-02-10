import axios from 'axios';
import Config from 'react-native-config';
import path from 'path';

import {
  FETCH_MOVIE_DETAILS_SUCCESS,
  ITEM_IS_LOADING,
} from '../constants/actionType';

export const fetchMovieDetailsSuccess = res => ({
  type: FETCH_MOVIE_DETAILS_SUCCESS,
  details: res.data
});

export const fetchMovieDetails = movieId =>
  async dispatch => {
    try {
      const uri = path.join(
        Config.TMDB_URL,
        'movie',
        `${movieId}?api_key=${Config.TMDB_API_KEY}&append_to_response=casts,images,videos`);
      const res = await axios.get(uri);
      await dispatch(fetchMovieDetailsSuccess(res));
    }
    catch (error) {
      console.log('Movie Details', error);
    }
  }

export const itemIsLoading = itemIsLoading => ({
  type: ITEM_IS_LOADING,
  itemIsLoading,
})
