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
  if (number < 5) {
    return true;
  }
  return false;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  }
  return false;
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  }
  return false;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  }
  if (pH >= 0 && pH < 7) {
    return 'acid';
  }
  if (pH <= 14 && pH > 7) {
    return 'base';
  }
  return 'invalid pH level';
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
