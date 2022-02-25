/* exported oddOrEven */
function oddOrEven(numbers) {
  if (!Array.isArray(numbers)) {
    return 'Error: argument must be an array';
  }
  const resultArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      resultArr.push('even');
    }
    if (numbers[i] % 2 !== 0) {
      resultArr.push('odd');
    }
  }
  return resultArr;
}

// yes
