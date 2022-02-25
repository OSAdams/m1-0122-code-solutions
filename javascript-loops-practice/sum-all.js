/* exported sumAll */

function sumAll(numbers) {
  let resultNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      return 'Error: Values inside of the array must be an integer';
    }
    resultNum += numbers[i];
  }
  return resultNum;
}
