//3rd Party
import React from 'react';
import { useState } from 'react';
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

const StyledInput = styled.input`
  font-size: 20px;
  padding: 12px;
  border: solid 2px black;
`;
const EditName = (props) => {
  const { currentName } = props;
  const { dispatch } = props;

  const [name, setName] = useState(currentName);

  const onSaveClick = () => {
    dispatch(appActions.updateName(name));
    dispatch(appActions.goHome());
  };

  return (
    <TopContainer>
      <StyledInput
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
        autoFocus
      />
      <Button onClick={() => onSaveClick()}>Save</Button>
      <Button onClick={() => dispatch(appActions.goHome())}>Cancel</Button>
    </TopContainer>
  );
};

export default EditName;
