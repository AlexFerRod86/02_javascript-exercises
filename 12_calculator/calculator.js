const add = function(a,b) {
  return  a + b ;
	
};

const subtract = function(a,b) {
  return a - b;
	
};

const sum = function(array) {
 let arraySum = array
 
	return arraySum.reduce((acum ,valorAct)=> acum + valorAct,0)
  
};

const multiply = function(array) {
  let arrayMultiply = array;
  return arrayMultiply.reduce((acum,valorAct)=> acum * valorAct)


};

const power = function(a,b) {return a ** b
	
};

const factorial = function(n) {
  let result = 1
  for (let i = n; i > 1 ; i--) {
    result*= i;
  }
  return result ;
	
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
