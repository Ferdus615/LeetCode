/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const word = String(x);

  let i = 0;
  let j = word.length - 1;


  while (i < j) {
    if (word[i] !== word[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
