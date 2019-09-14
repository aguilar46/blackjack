//3rd Party
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

//local
import Button from './Button';

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
  const { onCancel, onNameChange } = props;

  const [name, setName] = useState(currentName);

  return (
    <TopContainer>
      <StyledInput
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
        autoFocus
      />
      <Button onClick={() => onNameChange(name)}>Save</Button>
      <Button onClick={() => onCancel()}>Cancel</Button>
    </TopContainer>
  );
};

export default EditName;
