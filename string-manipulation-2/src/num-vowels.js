/* exported numVowels */
function numVowels(string) {
  if (typeof string !== 'string') {
    return { error: 'Invalid argument passed. Argument must be a string' };
  }
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const lowerString = string.toLowerCase();
  let result = 0;
  for (let i = 0; i < lowerString.length; i++) {
    for (const k in vowels) {
      if (lowerString[i] === vowels[k]) {
        result++;
      }
    }
  }
  return result;
}
