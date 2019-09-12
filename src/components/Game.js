//3rd Party
import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

//local
import Button from './Button';
import { createDeck, getValue } from '../util/deck';
import Player from './Player';
import { calculateValue } from '../util/math';
import Header from './Header';
import colors from '../styles/colors';

const ControlContainer = styled.div`
  display: flex;
  align-content: start;
  padding: 24px;
  background-color: ${colors.complementary.red.dark};
`;

const StyledBtn = styled(Button)`
  margin: 12px;
  width: 200px;
`;

const GameCt = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const deck = createDeck();

const doNewDeal = () => {
  deck.shuffle();
  return [
    [deck.drawCard(), deck.drawCard()],
    [deck.drawCard(), deck.drawCard()]
  ];
};

const calculateComputerCards = (computerCards) => {
  const newComputerCards = [...computerCards];

  //draw cards until computer is done
  while (calculateValue(newComputerCards) < 17) {
    newComputerCards.push(deck.drawCard());
  }

  return newComputerCards;
};

const Game = (props) => {
  const [money, setMoney] = useState(100);
  const [playerCards, setPlayerCards] = useState([]);
  const [computerCards, setComputerCards] = useState([]);
  const [hitStayEnabled, setHitStayEnabled] = useState(true);
  const [result, setResult] = useState();
  const [newDealEnabled, setNewDealEnabled] = useState(false);
  const [handNumber, setHandNumber] = useState(1);

  useEffect(() => {
    const [pCards, cCards] = doNewDeal();
    setPlayerCards(pCards);
    setComputerCards(cCards);
    setNewDealEnabled(false);
    setResult(null);
    setHitStayEnabled(true);
  }, [handNumber]);

  const bet = 5;

  const endGame = () => {
    setHitStayEnabled(false);
    setNewDealEnabled(true);
  };

  const doLoss = () => {
    setResult('You Lose.');
    setMoney(money - bet);
    endGame();

    if (money - bet <= 0) {
      setResult('Game Over');
      setNewDealEnabled(false);
    }
  };

  const doWin = () => {
    setResult('You Win!');
    setMoney(money + bet);
    endGame();
  };
  const doTie = () => {
    setResult(`It's a tie.`);
    endGame();
  };

  const onHitClick = () => {
    if (hitStayEnabled) {
      const newPlayersCards = [...playerCards, deck.drawCard()];
      setPlayerCards(newPlayersCards);

      const value = calculateValue(newPlayersCards);
      if (value === 21) {
        const newComputerCards = calculateComputerCards(computerCards);

        setComputerCards(newComputerCards);

        if (getValue(newComputerCards) === 21) {
          doTie();
          return;
        }
        doWin();
        return;
      }
      if (value > 21) {
        doLoss();
      }
    }
  };

  if (!result && calculateValue(computerCards) === 21) {
    if (!result && calculateValue(playerCards) === 21) {
      doTie();
    }
    doLoss();
  } else if (
    !result &&
    playerCards.length === 2 &&
    calculateValue(playerCards) === 21
  ) {
    doWin();
  }

  const onNewDealClick = () => {
    setHandNumber(handNumber + 1);
  };

  const onStayClick = () => {
    setHitStayEnabled(false);
    const playerValue = calculateValue(playerCards);
    //add computer cards/result with delay
    const newComputerCards = calculateComputerCards(computerCards);
    const computerFinalScore = calculateValue(newComputerCards);

    setComputerCards(newComputerCards);

    if (computerFinalScore > 21 || computerFinalScore < playerValue) {
      doWin();
    } else if (computerFinalScore === playerValue) {
      doTie();
    } else {
      doLoss();
    }
  };

  return (
    <GameCt>
      <Player cards={computerCards} name="Computer" />
      <Player cards={playerCards} name="Player" />
      <Header result={result} money={money} bet={bet} />
      <ControlContainer>
        {newDealEnabled ? (
          <StyledBtn onClick={() => onNewDealClick()}>New Deal</StyledBtn>
        ) : null}
        {hitStayEnabled ? (
          <>
            <StyledBtn onClick={() => onHitClick()}>Hit</StyledBtn>
            <StyledBtn onClick={() => onStayClick()}>Stay</StyledBtn>
          </>
        ) : null}
        <StyledBtn onClick={() => props.onQuitClick()}>Quit</StyledBtn>
      </ControlContainer>
    </GameCt>
  );
};

export default Game;