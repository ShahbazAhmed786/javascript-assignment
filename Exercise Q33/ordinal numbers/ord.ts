const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array and print the numbers with proper ordinal endings
for (const num of numbers) {
  let ordinal: string;

  // Use an if-else chain to determine the proper ordinal ending
  if (num === 1) {
    ordinal = 'st';
  } else if (num === 2) {
    ordinal = 'nd';
  } else if (num === 3) {
    ordinal = 'rd';
  } else {
    ordinal = 'th';
  }

  console.log(`${num}${ordinal}`);
}