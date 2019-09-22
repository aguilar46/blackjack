import { modes } from '../util/app-modes';

export const CHANGE_MODE = 'change-mode';
export const UPDATE_NAME = 'update-name';

const goHome = () => ({
  type: CHANGE_MODE,
  payload: modes.HOME
});

const newGame = () => ({
  type: CHANGE_MODE,
  payload: modes.GAME
});

const editName = () => ({
  type: CHANGE_MODE,
  payload: modes.EDIT_NAME
});

const updateName = (name) => ({
  type: UPDATE_NAME,
  payload: name
});

export default {
  goHome,
  newGame,
  editName,
  updateName
};
