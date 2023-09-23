// Define a callback function type
type CallbackFunction = (num: number) => void;

// Function that processes data using a callback
function processData(data: number[], callback: CallbackFunction) {
  for (const item of data) {
    callback(item);
  }
}

// Callback function that logs each number to the console
function logNumber(num: number) {
  console.log(`Number: ${num}`);
}

// Example usage: Process an array of numbers using the callback function
const numbers = [1, 2, 3, 4, 5];
processData(numbers, logNumber);