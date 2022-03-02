/* exported firstChars */
function firstChars(length, string) {
  if (!parseInt(length) || typeof string !== 'string') {
    return { error: 'Invalid arguments passed. First argument must be a number, second argument must be a string' };
  }
  if (length > string.length) {
    return string;
  }
  let result = '';
  for (let i = 0; i < length; i++) {
    result += string[i];
  }
  return result;
}
