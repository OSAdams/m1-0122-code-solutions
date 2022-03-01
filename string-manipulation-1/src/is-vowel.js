/* exported isVowel */
function isVowel(char) {
  const charLower = char.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (charLower === vowels[i]) {
      return true;
    }
  }
  return false;
}
