/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  }
  return string.split(' ');
}

// do not return string.split('') for an empty array return - uses more resources bad bad
