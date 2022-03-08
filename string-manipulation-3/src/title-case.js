/* exported titleCase */
function titleCase(string) {
  const err = { error: 'Invalid argument passed. Argument must be a string' };
  const lwrArray = string.toLowerCase().split(' ');
  const result = [];
  const exceptions = ['The', 'Of', 'And', 'In', 'To', 'On', 'For'];
  for (let i = 0; i < lwrArray.length; i++) {
    result.push(lwrArray[i].charAt(0).toUpperCase() +
      lwrArray[i].slice(1).toLowerCase());
    if (i !== 0 && exceptions.includes(result[i]) && !lwrArray[i - 1].includes(':')) {
      result[i] = result[i].charAt(0).toLowerCase() +
        result[i].slice(1);
    }
    if (result[i].includes('-')) {
      const posDash = result[i].indexOf('-');
      result[i] = result[i].slice(0, posDash + 1) +
        result[i].charAt(posDash + 1).toUpperCase() +
        result[i].slice(posDash + 2);
    }
    if (result[i] === 'Javascript') {
      result[i] = 'JavaScript';
    } else if (result[i] === 'Javascript:') {
      result[i] = 'JavaScript:';
    } else if (result[i] === 'Api') {
      result[i] = 'API';
    }
  }
  return (typeof string !== 'string') ? err : result.join(' ');
}
