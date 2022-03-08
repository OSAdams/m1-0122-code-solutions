console.log('Lodash is loaded:', typeof _ !== 'undefined');
// function Card(value, score, suit) {
//   this.value = value;
//   this.score = score;
//   this.suit = suit;
// }

function createDeck() {
  // const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  // const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  // let addToIndex = 2;
  // const kOrA = ['K', 'A'];
  // const fullDeck = [];
  // for (const i in suits) {
  //   for (let j = 0; j < values.length; j++) {
  //     kOrA.includes(values[j]) // instead of assining an array to a variable, i can use score.slice(-2).includes(score[j]) - which is better?
  //       ? addToIndex = -1
  //       : values[j] === 'J'
  //         ? addToIndex = 1
  //         : values[j] === 'Q'
  //           ? addToIndex = 0
  //           : addToIndex = 2;
  //     fullDeck.push(new Card(values[j], parseInt(j + addToIndex), suits[i]));
  //   }
  // }
  // return fullDeck;
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  const scores = { J: 10, Q: 10, K: 10, A: 11 };
  const deck = [];
  for (const suitIndex in suits) {
    const suit = suits[suitIndex];
    console.log(suit);
    for (const valueIndex in values) {
      const value = values[valueIndex];
      let score = parseInt(value);
      console.log(score);
      if (score) {
        score = scores.valueIndex;
      }
      const card = { score, value, suit };
      deck.push(card);
    }
  }
  return deck;
}

const shuffledDeck = _.shuffle(createDeck());

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

function decideWinner(para) {
  const tieBreaker = [

  ];
  let lastIndexOfDeck = 8;
  let winner = null;
  let score = 0;
  for (const i in para) {
    if (para[i].finalScore > score) {
      winner = para[i].name;
      score = para[i].finalScore;
    }
  }
  for (const l in para) {
    if (para[l].finalScore === score) {
      tieBreaker.push(para[l]);
    }
  }
  /*
    If we have a tie, we will push shuffledDeck[8] to players hands. We are going
    to use tieBreaker for maths. WIP
  */
  if (tieBreaker.length > 1) {
    for (const i in tieBreaker) {
      tieBreaker[i].hand.push(shuffledDeck[lastIndexOfDeck]);
      tieBreaker[i].finalScore += tieBreaker[i].hand[tieBreaker[i].hand.length - 1].score;
      if (tieBreaker[i].finalScore > score) {
        winner = tieBreaker[i].name;
        score = tieBreaker[i].finalScore;
      }
      lastIndexOfDeck++;
    }
  } else {
    return `${winner} has won the draw with a score of ${score}`;
  }
}

console.log(decideWinner(players));
