var name1 = 'John';
var name2 = 'Alice';
console.log(name1 === 'John'); // True (name1 is equal to 'John')
console.log(name1 !== name2); // True (name1 is not equal to name2)
// Tests using the lower case function
var message = 'Hello World';
console.log(message.toLowerCase() === 'hello world'); // True (the lower case version matches)
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var age = 25;
console.log(age === 25); // True (age is equal to 25)
console.log(age !== 30); // True (age is not equal to 30)
console.log(age > 20); // True (age is greater than 20)
console.log(age < 30); // True (age is less than 30)
console.log(age >= 25); // True (age is greater than or equal to 25)
console.log(age <= 30); // True (age is less than or equal to 30)
// Tests using "and" and "or" operators
var isStudent = true;
var isEmployee = false;
console.log(isStudent && isEmployee); // False (both conditions are not true)
console.log(isStudent || isEmployee); // True (at least one condition is true)
// Test whether an item is in an array
var favoriteFruits = ['apple', 'banana', 'orange'];
console.log(favoriteFruits.includes('banana')); // True ('banana' is in the array)
console.log(favoriteFruits.includes('grapes')); // False ('grapes' is not in the array)
// Test whether an item is not in an array
console.log(!favoriteFruits.includes('kiwi')); // True ('kiwi' is not in the array)
console.log(!favoriteFruits.includes('apple')); // False ('apple'
