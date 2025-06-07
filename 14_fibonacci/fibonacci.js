const fibonacci = function(num) {

  // Check if its a string
  if (typeof num === "string") {
    num = parseInt(num);
  }

  // Check if its a negative value
  if (num < 0) {
    return "OOPS";
  }

  // Base cases when fibonacci(0) = 0 and fibonacci(1) = 1
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }

  // recursive step
  return fibonacci(num-1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
