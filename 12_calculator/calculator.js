const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(arr) {
	return arr.reduce((sum, currVal) => sum += currVal, 0);
};

const multiply = function(arr) {
  return arr.reduce((multiply, val) => multiply *= val, 1);
};

const power = function(first, second) {
  return first ** second;
};

const factorial = function(val) {
  let fact = 1;
  for (i = val; i > 0; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
