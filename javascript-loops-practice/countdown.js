/* exported countdown */

function countdown(number) {
  if (typeof number !== 'number' || number < 0) {
    return 'Please pass a positive integer as an argument';
  }
  const cdResult = [];
  while (number >= 0) {
    cdResult.push(number);
    number--;
  }
  return cdResult;
}
