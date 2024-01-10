const reverseString = function(string) {
    let reversed = []
    for (i = 0; i < string.length; i++) {
        reversed.unshift(string[i])
    }
    return reversed.join("")
};

// Do not edit below this line
module.exports = reverseString;
