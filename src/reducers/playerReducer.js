import * as appActions from '../actions';

export default (state, action) => {
  switch (action.type) {
    case appActions.UPDATE_NAME:
      return action.payload;
    default:
      return state;
  }
};
