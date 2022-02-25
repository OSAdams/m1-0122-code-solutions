/* exported countdown */

function countdown(number) {
  if (typeof number !== 'number' || number < 0) {
    return 'Error: argument must be a positive integer';
  }
  const cdResult = [];
  while (number >= 0) {
    cdResult.push(number);
    number--;
  }
  return cdResult;
}
