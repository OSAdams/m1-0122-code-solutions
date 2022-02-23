/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  return number < 5;
}

function isEven(number) {
  return number % 2 === 0;
}

function startsWithJ(string) {
  return string[0] === 'J';
}

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH < 0 || pH > 14) {
    return 'invalid pH level';
  }
  if (pH > 7) return 'acid';
  if (pH < 7) return 'base';
  return 'neutral';
}

function introduceWarnerBro(name) {
  if (name === 'dot') {
    return 'I\'m cute~';
  }
  if (name === 'yakko' || name === 'wakko') {
    return 'We\'re the warner brothers!';
  }
  return 'Goodnight everybody!';
}
