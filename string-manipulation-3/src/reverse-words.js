/* exported reverseWords */
function reverseWords(string) {
  if (typeof string !== 'string') {
    return { error: 'Invalid argument passed. Argument must be a string' };
  }
  const holder = string.split(' ');
  const result = [];
  for (const i in holder) {
    const temp = holder[i].split('').reverse().join('');
    result.push(temp);
  }
  return result.join(' ');
}
