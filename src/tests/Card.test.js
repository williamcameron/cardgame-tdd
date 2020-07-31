const Card = require('../Card');

describe('Card', () => {
    it('Should be defined', () => {
        const card = new Card();
        expect(card).toBeDefined();
    });
    it('should have a name', () => {
        const card = new Card({name: "Pikachu", type:'Pokemon'});
        expect(card.name).toBe("Pikachu");
    })
    it('should have a type', () => {
        const card = new Card({name: "Pikachu", type:'Pokemon'});
        expect(card.type).toBe("Pokemon");
    })
    it('should have default type of energy if none specified', () => {
        const card = new Card();
        expect(card.type).toBe("Energy");
    })
    it('should have default name of grass if none specified', () => {
        const card = new Card();
        expect(card.name).toBe("Grass");
    })
});