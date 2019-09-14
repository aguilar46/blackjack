//3rd Party
import React from 'react';
import styled from 'styled-components';

//local
import * as cardUtil from '../util/deck';
import Card from './Card';
import * as mathHelper from '../util/math';
import colors from '../styles/colors';

const CardDiv = styled.div`
  padding: 12px;
`;

const NameDiv = styled.div`
  font-size: 20px;
  color: white;
  margin: 12px;
  margin-bottom: 0;
`;

const PlayerCt = styled.div`
  border: solid 2px black;
  border-radius: 6px;
  background-color: ${colors.secondary.brown.darker};
  margin: 24px;
`;

const Player = (props) => {
  const { cards, result, isPlayer } = props;
  const shouldHideValue = !isPlayer && !result;

  const cardCts = cards.map((card, index) => (
    <Card
      key={`${cardUtil.getSuit(card)}:${cardUtil.getValue(card)}`}
      card={card}
      isCardHidden={shouldHideValue && index === 0}
    />
  ));

  const value = shouldHideValue ? '?' : mathHelper.calculateValue(props.cards);

  return (
    <PlayerCt>
      <NameDiv>
        {props.name} ({value})
      </NameDiv>
      <CardDiv>{cardCts}</CardDiv>
    </PlayerCt>
  );
};

export default Player;
