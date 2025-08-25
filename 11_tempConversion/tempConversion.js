const convertToCelsius = function(a) {
  let Celsius = 
  (a - 32) * (5/9)
  if (Number.isInteger(Celsius)) {
    return Celsius
    
  } else { return Number (Celsius.toFixed(1))
    
  }
    
  }


const convertToFahrenheit = function(b) {
  let Fahrenheit = 
  (b * (9/5)) + 32
  if (Number.isInteger(Fahrenheit)) {
    return Fahrenheit
    
  } else { return Number(Fahrenheit.toFixed(1))
    
  }
};

convertToCelsius(100)
convertToFahrenheit(0)

// Do not 0000000000edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
