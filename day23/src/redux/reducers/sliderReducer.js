import { SET_SLIDER_VALUE } from '../actionTypes';

export default (state = 0, action) => {
  switch (action.type) {
    case SET_SLIDER_VALUE:
      return action.payload.value;
    default:
      return state;
  }
};
