const removeFromArray = function(array, e1, e2, e3, e4) {
    let length = array.length
    let newArr = []

    for ( let i = 0; i < length; i++ ) {
        if ( array[i] === e1 || array[i] === e2 || array[i] === e3 || array[i] === e4 ) {
            continue
        }
        newArr.push(array[i])
    }

    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
