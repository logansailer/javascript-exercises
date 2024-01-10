const sumAll = function(first, second) {
    let start;
    let end;
    //checks variables are within the possibility of the function (non-negative and integers)
    if (Number.isInteger(first) == false || Number.isInteger(second) == false || Math.sign(first) == -1 || Math.sign(second) == -1) {
        return "ERROR"
    //finds which argument is greater
    } else if (first < second) {
        start = first;
        end = second
    } else if (second < first) {
        start = second;
        end = first;
    }
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
