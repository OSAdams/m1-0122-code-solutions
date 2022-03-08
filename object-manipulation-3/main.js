console.log('Lodash is loaded:', typeof _ !== 'undefined');

function createDeck() {
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  // eslint-disable-next-line
  const scores = { 'J': 10, 'Q': 10, 'K': 10, 'A': 11 };
  const deck = [];
  for (const suitIndex in suits) {
    const suit = suits[suitIndex];
    for (const valueIndex in values) {
      const value = values[valueIndex];
      let score = parseInt(value);
      if (isNaN(value)) {
        score = scores[value];
      }
      const card = { score, value, suit };
      deck.push(card);
    }
  }
  console.log(deck);
  return deck;
}

const shuffledDeck = _.shuffle(createDeck());

const players = [
  { name: 'Elliot Alderson', hand: [], finalScore: 0 },
  { name: 'James McGill', hand: [], finalScore: 0 },
  { name: 'Tyrell Welick', hand: [], finalScore: 0 },
  { name: 'Kim Wexler', hand: [], finalScore: 0 }
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
  const tieBreaker = [];
  let lastIndexOfDeck = 8;
  let winner = null;
  let score = 0;
  for (const player in para) {
    if (para[player].finalScore > score) {
      winner = para[player].name;
      score = para[player].finalScore;
    }
  }
  for (const l in para) {
    if (para[l].finalScore === score) {
      tieBreaker.push(para[l]);
    }
  }
  if (tieBreaker.length > 1) {
    for (const player in tieBreaker) {
      tieBreaker[player].hand.push(shuffledDeck[lastIndexOfDeck]);
      tieBreaker[player].finalScore += tieBreaker[player].hand[tieBreaker[player].hand.length - 1].score;
      if (tieBreaker[player].finalScore > score) {
        winner = tieBreaker[player].name;
        score = tieBreaker[player].finalScore;
      }
      lastIndexOfDeck++;
    }
  }
  return `${winner} has won the draw with a score of ${score}`;
}

console.log(decideWinner(players));

// const players = [
//   { name: 'Ada Lovelace', hand: [] },
//   { name: 'Grace Hopper', hand: [] },
//   { name: 'Barbara Liskov', hand: [] },
//   { name: 'Joyce Aylard', hand: [] }
// ];

// const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
// const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
// const deck = _.flatMap(suits, suit => {
//   return _.map(ranks, rank => {
//     return {
//       rank: rank,
//       suit: suit
//     };
//   });
// });

// const CARDS_PER_HAND = 2;
// const deal = _.take(_.shuffle(deck), players.length * CARDS_PER_HAND);

// _.forEach(deal, (card, cardIndex) => {
//   const playerIndex = cardIndex % players.length;
//   players[playerIndex].hand.push(card);
// });

// const winner = _.maxBy(players, player => {
//   return _.reduce(player.hand, (score, card) => {
//     if (card.rank === 'ace') return score + 11;
//     if (_.isString(card.rank)) return score + 10;
//     return score + card.rank;
//   }, 0);
// });

// console.log('winner:', winner.name, winner.hand);
