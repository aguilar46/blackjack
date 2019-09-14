import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const TopContainer = styled.div`
  height: calc(100%-48px);
  display: grid;
  justify-content: center;
  align-content: start;
  row-gap: 24px;
  padding: 24px;
`;

const Home = (props) => {
  const { onNewGameClick, onChangeName } = props;

  return (
    <TopContainer>
      <Button onClick={() => onNewGameClick()}>New Game</Button>
      <Button onClick={() => onChangeName()}>Change Name</Button>
    </TopContainer>
  );
};

export default Home;
