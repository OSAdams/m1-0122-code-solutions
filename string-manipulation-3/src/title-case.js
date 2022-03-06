/* exported titleCase */
function titleCase(string) {
  if (typeof string !== 'string') {
    return { error: 'Invalid argument passed. Argument must be a string' };
  }
  const lwrArray = string.toLowerCase().split(' ');
  const result = [];
  for (let i = 0; i < lwrArray.length; i++) {
    result.push(lwrArray[i].charAt(0).toUpperCase() + lwrArray[i].slice(1).toLowerCase());
    if (result[i] === 'The' || result[i] === 'Of' || result[i] === 'And' || result[i] === 'In' || result[i] === 'To' || result[i] === 'On' || result[i] === 'For') {
      result[i] = result[i].charAt(0).toLowerCase() + result[i].slice(1);
    }
    if (result[i] === 'Javascript') {
      result[i] = 'JavaScript';
    } else if (result[i] === 'Javascript:') {
      result[i] = 'JavaScript:';
    }
    if (result[i] === 'Api') {
      result[i] = 'API';
    }
  }
  return result.join(' ');
}
