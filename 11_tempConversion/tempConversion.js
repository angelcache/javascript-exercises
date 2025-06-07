const convertToCelsius = function(fahrenheit) {
  celcius = ((fahrenheit - 32) * (5/9))
  return celcius === 0? 0: celcius.toFixed(1);
};

const convertToFahrenheit = function(celcius) {
  fahrenheit = (celcius * (9/5) + 32).toFixed(1);
  return fahrenheit === 0? 0: fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
