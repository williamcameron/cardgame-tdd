const Deck = require("./Deck");

class Player {
    constructor() {
        this.deck = new Deck();
        this.hand = [];
    }

    setup() {
        this.hand = this.deck.draw(7);
    }
}

module.exports = Player;