import * as cardsHelper from '../../src/util/deck';
import { calculateValue } from '../../src/util/math';

describe('can calculate scores correctly', () => {
  test('for hands that have aces', () => {
    const allAcesHand = cardsHelper
      .createDeck()
      .cards.filter(
        (card) => cardsHelper.getValue(card) === cardsHelper.values.ACE
      );

    expect(calculateValue(allAcesHand)).toBe(14);
  });
});
