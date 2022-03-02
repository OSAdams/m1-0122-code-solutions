/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  // removed error catch -- !parseInt(0) returns true ??????
  // Too much to fix
  var result = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      result += string[secondIndex];
    } else if (i === secondIndex) {
      result += string[firstIndex];
    } else {
      result += string[i];
    }
  }
  return result;
}

// comment to remove
