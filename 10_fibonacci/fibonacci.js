const fibonacci = function(num) {
    let numInt = parseInt(num)

    if (numInt <= 0) return 'OOPS'
    if (numInt == 1 || numInt == 2) return 1

    const firstNum = 1
    const secondNum = 1

    let previous = firstNum
    let current = secondNum
    let temp

    for(let i = 2; i < numInt; i++) {
        temp = current
        current = current + previous
        previous = temp
    }

    return current
};

// Do not edit below this line
module.exports = fibonacci;
