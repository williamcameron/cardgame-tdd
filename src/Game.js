const Player = require('./Player');

class Game {
    constructor() {
        this.players = [new Player(), new Player()];
        this.started = false;
    }
    start() {
        this.players.forEach((player) => {
            player.setup();
        });
        this.started = true;
    }
}

module.exports = Game;