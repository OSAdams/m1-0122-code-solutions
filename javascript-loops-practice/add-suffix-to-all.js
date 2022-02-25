/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  if (!Array.isArray(words)) {
    return 'Error: first argument must be an array';
  }
  const resultArr = [];
  for (let i = 0; i < words.length; i++) {
    words[i] += suffix;
    resultArr.push(words[i]);
  }
  return resultArr;
}
