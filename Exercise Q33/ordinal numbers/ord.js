var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array and print the numbers with proper ordinal endings
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    var ordinal = void 0;
    // Use an if-else chain to determine the proper ordinal ending
    if (num === 1) {
        ordinal = 'st';
    }
    else if (num === 2) {
        ordinal = 'nd';
    }
    else if (num === 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log("".concat(num).concat(ordinal));
}
