class Card {
    constructor(info={}) {
        this.name = info.name || 'Grass';
        this.type = info.type || 'Energy';
    }
}
module.exports = Card;