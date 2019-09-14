//3rd Party
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

//local
import Home from './Home';
import appColors from '../styles/colors';
import { useEnum } from '../util/hooks';
import Game from './Game';
import colors from '../styles/colors';
import EditName from './EditName';

const ViewPort = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${appColors.primary.green.normal};
`;

const modes = {
  HOME: 'home',
  GAME: 'game',
  EDIT_NAME: 'edit name'
};

const HeaderDiv = styled.div`
  font-size: 30px;
  background-color: ${colors.complementary.red.dark};
  border-bottom: solid 2px black;
  text-align: center;
  padding: 12px;
`;

const App = (props) => {
  const [mode, setMode] = useEnum(modes, modes.HOME);
  const [playerName, setPlayerName] = useState('Player');

  const onNameChange = (name) => {
    setPlayerName(name);
    setMode(modes.HOME);
  };

  return (
    <ViewPort>
      <HeaderDiv>Black Jack</HeaderDiv>
      {mode === modes.HOME ? (
        <Home
          onNewGameClick={() => setMode(modes.GAME)}
          onChangeName={() => setMode(modes.EDIT_NAME)}
        />
      ) : null}
      {mode === modes.GAME ? (
        <Game playerName={playerName} onQuitClick={() => setMode(modes.HOME)} />
      ) : null}
      {mode === modes.EDIT_NAME ? (
        <EditName
          currentName={playerName}
          onNameChange={(name) => onNameChange(name)}
          onCancel={() => setMode(modes.HOME)}
        />
      ) : null}
    </ViewPort>
  );
};

export default App;
