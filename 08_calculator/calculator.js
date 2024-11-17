const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
  return a-b
};

const sum = function(arr) {
	return arr.reduce(
    (a,b) => a+b, 0
  )
};

const multiply = function(arr) {
  return arr.reduce(
    (a,b) => a*b, 1
  )
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
  out = 1
  for (let i=1; i <= a; i++){
    out = out * i
    
  }
  return out
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
