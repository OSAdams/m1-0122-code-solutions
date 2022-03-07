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
      fullDeck.push(new BuildCards(value[j], parseInt(j + addToIndex), suit[i]));
    }
  }
  return fullDeck;
}

const shuffledDeck = _.shuffle(deck());

const players = [
  {
    name: 'Elliot Alderson',
    hand: [],
    finalScore: 0
  },
  {
    name: 'James McGill',
    hand: [],
    finalScore: 0
  },
  {
    name: 'Tyrell Welick', // fuck
    hand: [],
    finalScore: 0
  },
  {
    name: 'Kim Wexler',
    hand: [],
    finalScore: 0
  }
];

function dealCards() {
  let playersIndex = 0;
  for (let i = 0; i < players.length * 2; i++) {
    if (playersIndex > 3) {
      playersIndex = 0;
    }
    players[playersIndex].hand.push(shuffledDeck[i]);
    const handShort = players[playersIndex].hand.length - 1;
    players[playersIndex].finalScore += players[playersIndex].hand[handShort].score;
    playersIndex++;
  }
}

dealCards();
