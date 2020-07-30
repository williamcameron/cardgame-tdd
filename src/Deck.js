const Card = require("./Card");

class Deck {
    constructor(size=40) {
        this.cards = [];
        for (let i = 0; i < size; i++) {
            this.cards.push(new Card());
        }
    }

    draw(num=1) {
        const cards = [];
        for (let i = 0; i < num; i++) {
            cards.push(this.cards.pop());
        }
        if(num == 1) { return cards[0]; }
        return cards;
    }
}

module.exports = Deck;