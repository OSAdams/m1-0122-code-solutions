console.log('Lodash is loaded:', typeof _ !== 'undefined');
function BuildCards(value, score, suit) {
  this.value = value;
  this.score = score;
  this.suit = suit;
}

function deck() {
  const value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  let addToIndex = 2;
  const kOrA = ['K', 'A'];
  const fullDeck = [];
  for (const i in suit) {
    for (let j = 0; j < value.length; j++) {
      kOrA.includes(value[j]) // instead of assining an array to a variable, i can use score.slice(-2).includes(score[j]) - which is better?
        ? addToIndex = -1
        : value[j] === 'J'
          ? addToIndex = 1
          : value[j] === 'Q'
            ? addToIndex = 0
            : addToIndex = 2;
      fullDeck.push(new BuildCards(parseInt(value[j], j + addToIndex), suit[i]));
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
