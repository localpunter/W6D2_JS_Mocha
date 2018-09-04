const assert = require('assert');
const Card = require('../card.js');
const Player = require('../player.js');
const Game = require('../game.js');

describe('Game', function () {

  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let card6;
  let alan;
  let rachel;
  let players;
  let game;

  beforeEach(function () {
    card1 = new Card({
      name: 'Superman',
      intelligence: 6,
      strength: 9,
      agility: 7
    });

    card2 = new Card({
      name: 'Scarlet Witch',
      intelligence: 7,
      strength: 10,
      agility: 5
    });

    card3 = new Card({
      name: 'Black Widow',
      intelligence: 8,
      strength: 6,
      agility: 9
    });

    card4 = new Card({
      name: 'The Flash',
      intelligence: 7,
      strength: 4,
      agility: 10
    });

    card5 = new Card({
      name: 'Wonder Woman',
      intelligence: 8,
      strength: 7,
      agility: 5
    });

    card6 = new Card({
      name: 'Batman',
      intelligence: 10,
      strength: 5,
      agility: 6
    });


    it("should have a deck", function() {
      const actual = game.deck;
      assert.deepStrictEqual(actual, cards);
    });

    it("should have two players", function() {
      const actual = game.players;
    });

    it('should be able to deal one card to a player', function () {
      game.dealCard(card1);
      const actual = alan.hand[0];
      assert.deepStrictEqual(actual, card1);
    });

    it('should be able to deal deck to players', function () {
      game.dealDeck();
      assert.deepStrictEqual(alan.hand, [card1, card3, card5]);
      assert.deepStrictEqual(rachel.hand, [card2, card4, card6]);
    });

    it('should be able to find the winner of the turn', function () {
      game.dealDeck();
      game.playCards();
      alan.selectCategory('strength');
      game.calculateWinnerOfTurn();
      const actual = game.players[0];
      assert.deepStrictEqual(actual, rachel);
    });

});
