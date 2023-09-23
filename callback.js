// Function that processes data using a callback
function processData(data, callback) {
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        callback(item);
    }
}
// Callback function that logs each number to the console
function logNumber(num) {
    console.log("Number: ".concat(num));
}
// Example usage: Process an array of numbers using the callback function
var numbers = [1, 2, 3, 4, 5];
processData(numbers, logNumber);
