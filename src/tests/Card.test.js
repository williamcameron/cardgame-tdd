const Card = require('../Card');
const ENERGY = require('../constants/energy');
const POKEMON = require('../constants/pokemon');

describe('Card', () => {
    it('Should be defined', () => {
        const card = new Card();
        expect(card).toBeDefined();
    });
    it('should have a name', () => {
        const card = new Card(POKEMON.Pikachu);
        expect(card.name).toBe("Pikachu");
    });
    it('should have a type', () => {
        const card = new Card(POKEMON.Pikachu);
        expect(card.cardtype).toBe("Pokemon");
    });
    it('should have default type of energy if none specified', () => {
        const card = new Card();
        expect(card.cardtype).toBe("Energy");
    });
    it('should have default name of grass if none specified', () => {
        const card = new Card();
        expect(card.name).toBe("Grass");
    });


});