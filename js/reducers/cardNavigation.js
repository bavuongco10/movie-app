import { cardStackReducer } from 'react-native-navigation-redux-helpers';
import {
  HOME,
} from '../constants/route';
const initialState = {
  key: 'global',
  index: 0,
  routes: [
    {
      key: HOME,
      index: 0,
    },
  ],
};

export default cardStackReducer(initialState);
