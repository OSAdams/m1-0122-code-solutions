console.log('Lodash is loaded:', typeof _ !== 'undefined');
function BuildCards(value, score, suit) {
  this.value = value;
  this.score = score;
  this.suit = suit;
}

function deck() {
  this.score = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  this.suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  const fullDeck = [];
  for (const i in this.suit) {
    for (let j = 0; j < this.score.length; j++) {
      let letterValue = 0;
      // if (score[j] === 'J') {
      //   letterValue = 1;
      // } else if (score[j] === 'Q') {
      //   letterValue = 2;
      // } else if (score[j] === 'K') {
      //   letterValue = 3;
      // } else if (score[j] === 'A') {
      //   letterValue = 4;
      // } else {
      //   letterValue = 0;
      // }
      this.score[j] === 'J'
        ? letterValue = 1
        : this.score[j] === 'Q'
          ? letterValue = 2
          : this.score[j] === 'K'
            ? letterValue = 3
            : this.score[j] === 'A'
              ? letterValue = 4
              : letterValue = 0;
      fullDeck.push(new BuildCards(j + 2 + letterValue, this.score[j], this.suit[i]));
    }
  }
  return fullDeck;
}

const shuffledDeck = _.shuffle(deck());

const players = [
  {
    name: 'Elliot Alderson',
    hand: []
  },
  {
    name: 'James McGill',
    hand: []
  },
  {
    name: 'Tyrell Welick',
    hand: []
  },
  {
    name: 'Kim Wexler',
    hand: []
  }
];

console.log(shuffledDeck, players);
