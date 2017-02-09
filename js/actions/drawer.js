import type { Action } from './types';
import { OPEN_DRAWER, CLOSE_DRAWER } from '../constants/actionType';
export function openDrawer():Action {
  return {
    type: OPEN_DRAWER,
  };
}

export function closeDrawer():Action {
  return {
    type: CLOSE_DRAWER,
  };
}
