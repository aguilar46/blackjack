import * as appActions from '../actions';

export default (state, action) => {
  switch (action.type) {
    case appActions.CHANGE_MODE:
      return action.payload;
    default:
      return state;
  }
};
