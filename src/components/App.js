//3rd Party
import React from 'react';
import { useReducer } from 'react';
import styled from 'styled-components';

//local
import Home from './Home';
import appColors from '../styles/colors';
import Game from './Game';
import colors from '../styles/colors';
import EditName from './EditName';
import { modes } from '../util/app-modes';
import appReducer from '../reducers';

const ViewPort = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${appColors.primary.green.normal};
`;

const HeaderDiv = styled.div`
  font-size: 30px;
  background-color: ${colors.complementary.red.dark};
  border-bottom: solid 2px black;
  text-align: center;
  padding: 12px;
`;

const App = (props) => {
  const [store, dispatch] = useReducer(appReducer, {
    playerName: 'Player',
    mode: modes.HOME
  });

  let component;

  switch (store.mode) {
    case modes.GAME:
      component = <Game playerName={store.playerName} dispatch={dispatch} />;
      break;
    case modes.EDIT_NAME:
      component = (
        <EditName currentName={store.playerName} dispatch={dispatch} />
      );
      break;
    default:
      component = <Home dispatch={dispatch} />;
  }

  return (
    <ViewPort>
      <HeaderDiv>Black Jack</HeaderDiv>
      {component}
    </ViewPort>
  );
};

export default App;
