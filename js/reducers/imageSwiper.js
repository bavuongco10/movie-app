import {
  ITEMS_HAS_ERRORED,
  ITEMS_IS_LOADING,
  FETCH_NOW_PLAYING_SUCCESS,
  ON_SWIPER_SCROLL_END_SUCCESS,
  SWIPER_IMAGE_INDEX,
} from '../actions/imageSwiper';

export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case ITEMS_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case ITEMS_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function items(state = [], action) {
  switch (action.type) {
    case FETCH_NOW_PLAYING_SUCCESS:
      return action.items;
    default:
      return state;
  }
}

export function swiperImageIndex(state = 0, action) {
  switch (action.type) {
    case SWIPER_IMAGE_INDEX:
      return action.swiperIndex;
    default:
      return state;
  }
};

export function swiperScrollEnd(state = {}, action) {
  switch (action.type) {
    case ON_SWIPER_SCROLL_END_SUCCESS:
      return action.swiperState;
    default:
      return state;
  }

}