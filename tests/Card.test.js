const Card = require('../src/Card');

describe('Card', () => {
    it('Should be defined', () => {
        const card = new Card();
        expect(card).toBeDefined();
    });
});