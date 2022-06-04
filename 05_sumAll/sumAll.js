const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    }
    
    if (!(typeof num1 === 'number') || !(typeof num2 === 'number')) {
        return 'ERROR'
    }

    let sum = 0
    let min
    let max

    if (num1 >= num2) {
        min = num2
        max = num1
    } else {
        min = num1
        max = num2
    }

    for (let i = min; i <= max; i++) {
        sum += i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
