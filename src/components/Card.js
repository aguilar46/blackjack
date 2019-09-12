//3rd Party
import React from 'react';
import styled from 'styled-components';

//Local
import { getSuit, getValue } from '../util/deck';

const StyledImage = styled.img`
  height: 200px;
  margin: 12px;
`;

const CardCt = (props) => {
  const card = props.card;
  const suit = getSuit(card);
  const value = getValue(card);

  const imageName = `${value}${suit}`;
  return (
    <StyledImage src={require(`../images/${imageName}.png`)} alt={imageName} />
  );
};

export default CardCt;
