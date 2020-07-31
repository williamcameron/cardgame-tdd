const Card = require("./Card");
const POKEMON = require('./constants/pokemon');

class Deck {
    constructor(size=40) {
        this.cards = [];
        for (let i = 0; i < size; i++) {
            this.cards.push(new Card(POKEMON.Pikachu));
            //this.cards.push(new Card({name: 'Grass', type:'Energy'}));
            
        }
    }

    draw(num=1) {
        if(num == 1){
            const card = this.cards.pop();
            return card;
        } 
        const cards = [];
        for (let i = 0; i < num; i++) {
            cards.push(this.cards.pop());
        }
        return cards;
    }
}

module.exports = Deck;