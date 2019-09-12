import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import appColors from '../styles/colors';
import { useEnum } from '../util/hooks';
import Game from './Game';
import colors from '../styles/colors';

// const ViewPort = styled.div`
//   display: grid;
//   // grid-template-columns: 1fr 1fr;
//   grid-template-rows: auto;
//   grid-column-gap: 24px;
//   grid-row-gap: 24px;
//   height: calc(100% - 48px);
//   overflow-y: hidden;
//   padding: 24px;
// `;

const ViewPort = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${appColors.primary.green.normal};
`;

const modes = {
  HOME: 'Home',
  GAME: 'Game'
};

const HeaderDiv = styled.div`
  font-size: 30px;
  background-color: ${colors.complementary.red.dark};
  border-bottom: solid 2px black;
  text-align: center;
  padding: 12px;
`;

const App = (props) => {
  const [mode, setMode] = useEnum(modes, modes.GAME);

  return (
    <ViewPort>
      <HeaderDiv>Black Jack</HeaderDiv>
      {mode === modes.HOME ? (
        <Home onNewGameClick={() => setMode(modes.GAME)} />
      ) : null}
      {mode === modes.GAME ? (
        <Game onQuitClick={() => setMode(modes.HOME)} />
      ) : null}
    </ViewPort>
  );
};

export default App;
