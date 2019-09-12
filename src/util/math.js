import * as cardUtil from './deck';

export const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const stringToValueMap = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  J: 10,
  Q: 10,
  K: 10,
  A: 11
};

const getBlackJackValue = (card) => stringToValueMap[cardUtil.getValue(card)];

const getNumAces = (cards) =>
  cards.reduce((total, card) => {
    if (cardUtil.getValue(card) === cardUtil.values.ACE) {
      return total + 1;
    }
    return total;
  }, 0);

export const calculateValue = (cards) => {
  let total = cards.reduce((total, card) => total + getBlackJackValue(card), 0);

  if (total > 21) {
    const numAces = getNumAces(cards);

    for (let i = 0; total > 21 && i < numAces; i++) {
      total -= 10;
    }
  }

  return total;
};
