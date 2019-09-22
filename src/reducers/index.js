import combineReducers from '../util/combineReducer';
import playerReducer from './playerReducer';
import modeReducer from './modeReducer';

const reducer = combineReducers({
  playerName: playerReducer,
  mode: modeReducer
});

export default reducer;
