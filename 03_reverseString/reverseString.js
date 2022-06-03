const reverseString = function(str) {
    let reverse = ''
    let newRvrsChar = ''
    let length = str.length

    for(let i = length - 1; i >= 0; i--) {
        newRvrsChar = str.charAt(i)
        reverse += newRvrsChar
    }

    return reverse
};

// Do not edit below this line
module.exports = reverseString;
