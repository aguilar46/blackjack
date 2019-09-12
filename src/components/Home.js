import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const TopContainer = styled.div`
  height: calc(100%-48px);
  display: grid;
  justify-content: center;
  align-content: start;
  padding: 24px;
`;

const Home = (props) => {
  return (
    <TopContainer className="top-container">
      <Button className="btn" onClick={() => props.onNewGameClick()}>
        New Game
      </Button>
    </TopContainer>
  );
};

export default Home;
