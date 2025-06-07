const palindromes = function (str) {
  let right = 0
  let left = str.length - 1

  while (right < left) {
    // Check if it's letter or a digit
    if (!isAlphaorDigit(str[right])) {
      right++;
    } else if (!isAlphaorDigit(str[left])) {
      left--;
    } else {
      if (str[right].toLowerCase() != str[left].toLowerCase()) {
        return false;
      }
      right++;
      left--;
    }
  }
  return true;

  function isAlphaorDigit(str) {
    return /^[a-zA-Z0-9]$/.test(str);
  }
};

// Do not edit below this line
module.exports = palindromes;
