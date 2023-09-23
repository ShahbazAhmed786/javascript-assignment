// Define a callback function type
type CallbackFunction = (data: number) => void;

// Function that processes data using a callback
function processData(data: number[], callback: CallbackFunction) {
  for (const item of data) {
    callback(item);
  }
}

// Callback function that doubles the number and logs it
function doubleAndLog(num: number) {
  const doubled = num * 2;
  console.log(`Doubled: ${doubled}`);
}

// Example usage: Process an array of numbers using the callback function
const numbers = [1, 2, 3, 4, 5];

// Using a callback function
processData(numbers, doubleAndLog);

// Transform the array using a promise
function doubleAsync(num: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 1000); // Simulating an asynchronous operation
  });
}

async function processArrayAsync(numbers: number[]): Promise<number[]> {
  const doubledArray = await Promise.all(numbers.map(doubleAsync));
  return doubledArray;
}

// Example usage: Transform an array of numbers using promises
processArrayAsync(numbers)
  .then((doubledNumbers) => {
    console.log("Doubled Numbers (Async):", doubledNumbers);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
