const removeFromArray = function(...args) {
    let array = args[0]
    let newArr = []

    array.forEach(e => {
        if (!e.includes(args)) {
            newArr.push(e)
        }
    })

    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
