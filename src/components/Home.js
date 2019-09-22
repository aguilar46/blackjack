//3rd Party
import React from 'react';
import styled from 'styled-components';

//local
import Button from './Button';
import appActions from '../actions';

const TopContainer = styled.div`
  height: calc(100%-48px);
  display: grid;
  justify-content: center;
  align-content: start;
  row-gap: 24px;
  padding: 24px;
`;

const Home = (props) => {
  const { dispatch } = props;

  return (
    <TopContainer>
      <Button onClick={() => dispatch(appActions.newGame())}>New Game</Button>
      <Button onClick={() => dispatch(appActions.editName())}>
        Change Name
      </Button>
    </TopContainer>
  );
};

export default Home;
