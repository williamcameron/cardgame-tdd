const Player = require('../src/Player');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe('Player', () => {
    it('Should be defined', () => {
        const player = new Player();
        expect(player).toBeDefined();
    });
    it('Should have a deck', () => {
        const player = new Player();
        expect(player.deck).toBeDefined();
        expect(player.deck).toBeInstanceOf(Deck);
    });
    it('Should have an empty hand', () => {
        const player = new Player();
        expect(player.hand).toBeDefined();
        expect(player.hand.length).toBe(0);
    });

    it('Should have a hand of 7 cards on game initilise', () => {
        const game = new Game();
        const player = game.players[0];
        game.start();
        expect(player.hand.length).toBe(7);
    });

    it('Should have a pokemon in opening hand', () => {
        const game = new Game();
        const player = game.players[0];
        game.start();
        expect(player.hand).toContainEqual(expect.objectContaining({name:'Pikachu', type:'Pokemon'}));
    });

});