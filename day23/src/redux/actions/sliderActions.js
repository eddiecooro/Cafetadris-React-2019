import { SET_SLIDER_VALUE } from '../actionTypes';

export const setSliderValue = newValue => ({
  type: SET_SLIDER_VALUE,
  payload: {
    value: newValue
  }
});
