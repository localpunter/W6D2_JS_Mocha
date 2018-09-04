const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js');

describe('Player', function() {

  let player1;
  let card1;

  beforeEach(function() {
    player1 = new Player('Alan');

    card1 = new Card({
      name: 'The Flash',
      intelligence: 7,
      strength: 4,
      agility: 10
    });
  });

  it("should have a name", function() {
    const actual = player.name;
    assert.strictEqual('Alan', actual)
  });

  it("should have an empty hand", function() {
    const actual = player.hand;
    assert.strictEqual([], actual)
  });

  it('should be able to add a card', function () {
    player.addCard(card1);
    const actual = player.hand[0];
    assert.deepStrictEqual(actual, card1);
  });

  it('should be able to play a card', function () {
    player.addCard(card1);
    player.playCard();
    const actual = player.currentCard;
    assert.deepStrictEqual(actual, card1);
  });

  it('should be able to select a category', function () {
    player.selectCategory('intelligence');
    const actual = player.currentCategory;
    assert.strictEqual(actual, 'intelligence');
  });

  it('should have hand decreased by one after playing a card', function () {
    player.addCard(card1);
    player.playCard();
    const actual = player.countCards();
    assert.strictEqual(actual, 0);
  });
