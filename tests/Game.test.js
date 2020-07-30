/// <reference types="jest" />

const Game = require('../src/Game');

describe('Game', () => {
    it('Should load a Game', () => {
        const game = new Game();
        expect(game).toBeDefined();
    });
    it('Should have 2 players', () => {
        const game = new Game();
        expect(game.players.length).toEqual(2);
    });
    it('Should become started when running start', () => {
        const game = new Game();
        expect(game.started).toBeFalsy();
        game.start();
        expect(game.started).toBeTruthy();
    });
});