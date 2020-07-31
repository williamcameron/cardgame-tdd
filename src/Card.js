class Card {
    constructor(info={}) {
        this.name = info.name || 'Grass';
        this.cardtype = info.cardtype || 'Energy';
    }
}
module.exports = Card;