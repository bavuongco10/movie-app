import {
  FETCH_MOVIE_DETAILS_SUCCESS,
  ITEM_IS_LOADING,
} from '../constants/actionType';

export function item(state = {}, action) {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return action.details;
    default:
      return state;
  }
}

export function itemIsLoading(state = true, action) {
  switch (action.type) {
    case ITEM_IS_LOADING:
      return action.itemIsLoading;
    default:
      return state;
  }
}