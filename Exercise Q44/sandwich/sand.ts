// Define the function that prints the sandwich summary
function orderSandwich(...items: string[]): void {
  console.log('Sandwich Order Summary:');
  console.log('Bread with:');
  for (const item of items) {
    console.log(`- ${item}`);
  }
  console.log('Sandwich is ready!');
  console.log('-------------------------');
}

// Call the function three times with different number of arguments
orderSandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
orderSandwich('Turkey', 'Swiss Cheese');
orderSandwich('Peanut Butter', 'Jelly', 'Banana');