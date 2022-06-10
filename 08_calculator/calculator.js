const add = function(x, y) {
  return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(values) {
	const sum = values.reduce((total, value) => {
    return total + value
  }, 0)

  return sum
};

const multiply = function(values) {
  const multiplyAll = values.reduce((total, value) => {
    return total * value
  }, 1)

  return multiplyAll
};

const power = function(x, y) {
	return Math.pow(x, y)
};

const factorial = function(factorialNum) {
  let factorialCountDown = factorialNum
  let array = []

  if (factorialNum == 0 || factorialNum == 1) return 1

  while(factorialCountDown > 1) {
    array.push(factorialCountDown)
    factorialCountDown--
  }

  const final = array.reduce((total, value) => {
    return total * value
  }, 1)

  return final
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
