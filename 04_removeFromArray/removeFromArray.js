const removeFromArray = function(arr, ...args) {
    //iterates over each element of the given array, if it matches an element that is supposed to be removed (arg) it splices it out
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === args[i]) {
                arr.splice(j, 1);
            }
        }
    }
    return (arr)
};

// Do not edit below this line
module.exports = removeFromArray;
