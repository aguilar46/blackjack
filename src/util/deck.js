import { getRndInteger } from './math';

export const suits = {
  HEARTS: 'H',
  DIAMONDS: 'D',
  SPADES: 'S',
  CLUBS: 'C'
};

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((values, number) => {
  const strNum = number.toString();
  values[strNum] = strNum;

  return values;
}, {});
const faceCardVales = {
  ACE: 'A',
  KING: 'K',
  QUEEN: 'Q',
  JACK: 'J'
};

export const values = {
  ...faceCardVales,
  ...numbers
};

const createCards = () => {
  const cards = [];
  Object.values(values).forEach((value) => {
    Object.values(suits).forEach((suit) => {
      cards.push({
        suit,
        value
      });
    });
  });
  return cards;
};

const swapCards = (cards, idx1, idx2) => {
  const temp = cards[idx1];
  cards[idx1] = cards[idx2];
  cards[idx2] = temp;
};

export const createDeck = () => ({
  currentCardIdx: 0,
  cards: createCards(),
  getRemainingCards() {
    const me = this;
    return me.cards.length - me.currentCardIdx;
  },
  shuffle(recreateCards) {
    const me = this;

    if (recreateCards) {
      me.cards = createCards();
      me.currentCardIdx = 0;
    }
    me.cards.forEach((card, idx) => {
      swapCards(me.cards, idx, getRndInteger(0, me.cards.length));
    });
    return this;
  },
  drawCard() {
    const me = this;
    const idx = me.currentCardIdx;

    me.currentCardIdx = (idx + 1) % me.cards.length;

    return me.cards[idx];
  }
});

export const getSuit = (card) => card.suit;
export const getValue = (card) => card.value;
