const convertToCelsius = function(ctemp) {
  let total = ((ctemp - 32) * 5/9)
  return Number(total.toFixed(1))
};

const convertToFahrenheit = function(ftemp) {
  let total = ((ftemp * 9/5) + 32)
  return Number(total.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
