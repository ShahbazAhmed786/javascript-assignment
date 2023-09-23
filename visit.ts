// Array representing places to visit
const placesToVisit: string[] = ['Japan', 'Iceland', 'New Zealand', 'Egypt', 'Brazil'];

// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

// Show that the array is still in its original order by printing it again
console.log("\nOriginal Order (Unchanged):");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

// Show that the array is still in its original order by printing it again
console.log("\nOriginal Order (Unchanged):");
console.log(placesToVisit);

// Reverse the order of the list and print the array to show that its order has changed
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order of the list again and print the array to show it’s back to its original order
placesToVisit.reverse();
console.log("\nOriginal Order (Restored):");
console.log(placesToVisit);

// Sort the array so it’s stored in alphabetical order and print the array to show that its order has been changed
console.log("\nAlphabetical Order (Sorted):");
console.log(placesToVisit.sort());

// Sort the array to change its order to reverse alphabetical
console.log("\nReverse Alphabetical Order (Sorted):");
console.log(placesToVisit.sort().reverse());
