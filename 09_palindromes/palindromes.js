const palindromes = function (str) {
    //lowercase string
    const lowerStr = str.toLowerCase()

    //spread the string into an array
    const strArray = [...lowerStr]

    //filters characters that arent letters
    const filteredArr = strArray.filter(char => char.match(/[a-z]/))

    //create an empty array to store reversed string
    let reversedArr = []

    //declare reverse counter
    let rvrsCount = filteredArr.length - 1

    //store reversed string in array and check if beginning = end
    for (let i = 0; i < filteredArr.length; i++) {
        
        reversedArr.push(filteredArr[rvrsCount])
        rvrsCount--
        if (!(filteredArr[i] === reversedArr[i])) {
            return false
        }
    }

    return true
};

// Do not edit below this line
module.exports = palindromes;
