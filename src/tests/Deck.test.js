const Deck = require('../Deck');
const Card = require('../Card');

describe('Deck', () => {
    it('Should be defined', () => {
        const deck = new Deck();
        expect(deck).toBeDefined();
    });
    it('Should be able to draw a card', () => {
        const deck = new Deck(40);
        const card = deck.draw();
        expect(card).toBeDefined();
        expect(card).toBeInstanceOf(Card);
        expect(deck.cards.length).toBe(39);
    });
    it('Should start with 40 cards', () => {
        const deck = new Deck();
        expect(deck.cards.length).toBe(40);
    });
});