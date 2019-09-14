import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

const formatMoney = (money) => `$${money}.00`;

const HeaderCt = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row;

  border-top: solid 2px black;
  background-color: ${colors.complementary.red.dark};

  & > div {
    margin: 24px;
    margin-left: 36px;
    font-size: 24px;
    color: white;
    font-weight: bold;
  }
`;

const Info = (props) => {
  const { result, money, bet, deckCount } = props;

  return (
    <HeaderCt>
      <div>Money: {formatMoney(money)}</div>
      <div>Bet: {formatMoney(bet)}</div>
      <div>Deck Count: {deckCount}</div>
      {result ? <div>Result: {result}</div> : null}
    </HeaderCt>
  );
};

export default Info;
