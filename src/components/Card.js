//3rd Party
import React from 'react';
import styled from 'styled-components';

//Local
import { getSuit, getValue } from '../util/deck';
import cardBack from '../images/red_back.png';

const StyledImage = styled.img`
  height: 100px;
  margin: 12px;
`;

const CardCt = (props) => {
  const { card, isCardHidden } = props;
  const suit = getSuit(card);
  const value = getValue(card);

  const imageName = `${value}${suit}`;

  if (isCardHidden) {
    return <StyledImage src={cardBack} alt="Unknown Card" />;
  }

  return (
    <StyledImage src={require(`../images/${imageName}.png`)} alt={imageName} />
  );
};

export default CardCt;
