// Create an array
const numbers: number[] = [1, 2, 3, 4, 5];

// 1. push: Adds one or more elements to the end of an array and returns the new length.
numbers.push(6); // [1, 2, 3, 4, 5, 6]

// 2. pop: Removes the last element from an array and returns it.
const lastNumber = numbers.pop(); // 6

// 3. unshift: Adds one or more elements to the beginning of an array and returns the new length.
numbers.unshift(0); // [0, 1, 2, 3, 4, 5]

// 4. shift: Removes the first element from an array and returns it.
const firstNumber = numbers.shift(); // 0

// 5. concat: Combines two or more arrays.
const moreNumbers: number[] = [6, 7, 8];
const combinedNumbers = numbers.concat(moreNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]

// 6. slice: Returns a shallow copy of a portion of an array.
const slicedNumbers = numbers.slice(2, 4); // [3, 4]

// 7. splice: Changes the contents of an array by removing, replacing, or adding elements.
numbers.splice(2, 2, 9, 10); // [1, 2, 9, 10, 5]

// 8. forEach: Executes a provided function once for each array element.
numbers.forEach((num) => console.log(num));

// 9. map: Creates a new array with the results of calling a provided function on every element.
const doubledNumbers = numbers.map((num) => num * 2);

// 10. filter: Creates a new array with all elements that pass the test provided by a function.
const evenNumbers = numbers.filter((num) => num % 2 === 0);

// 11. find: Returns the first element in an array that satisfies a provided testing function.
const foundNumber = numbers.find((num) => num > 3);

// 12. every: Tests whether all elements in an array pass the test provided by a function.
const allGreaterThanZero = numbers.every((num) => num > 0);

// 13. some: Tests whether at least one element in an array passes the test provided by a function.
const someGreaterThanThree = numbers.some((num) => num > 3);

// 14. reduce: Applies a function against an accumulator and each element in the array (from left to right).
const sum = numbers.reduce((acc, num) => acc + num, 0);

// 15. reduceRight: Applies a function against an accumulator and each element in the array (from right to left).
const reversedSum = numbers.reduceRight((acc, num) => acc + num, 0);

// 16. includes: Checks if an array includes a certain element.
const includesFive = numbers.includes(5);

// 17. indexOf: Returns the first index at which a given element can be found in the array, or -1 if it is not present.
const indexOfFive = numbers.indexOf(5);

// 18. lastIndexOf: Returns the last index at which a given element can be found in the array, or -1 if it is not present.
const lastIndexOfFive = numbers.lastIndexOf(5);

// 19. sort: Sorts the elements of an array in place and returns the sorted array.
const sortedNumbers = numbers.sort((a, b) => a - b);

// 20. reverse: Reverses the elements of an array in place.
numbers.reverse();

// Note: Many of these methods modify the original array. Make sure to create a copy if needed.
