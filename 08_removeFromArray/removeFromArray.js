const removeFromArray = function(array, val) {
  for (i = 0; i <= array.length; i++) {
    if (array[i] === val) {
      array.splice(i, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
