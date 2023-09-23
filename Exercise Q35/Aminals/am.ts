const animals: string[] = ['dog', 'cat', 'rabbit'];

// Print out the name of each animal and a statement about each animal
for (const animal of animals) {
  switch (animal) {
    case 'dog':
      console.log(`A ${animal} would make a great pet.`);
      break;
    case 'cat':
      console.log(`A ${animal} would be a wonderful companion.`);
      break;
    case 'rabbit':
      console.log(`A ${animal} is adorable and fun to have as a pet.`);
      break;
    default:
      console.log(`A ${animal} could be a lovely addition to your family.`);
  }
}

// Print a statement about what these animals have in common
console.log('Any of these animals would make a great pet!');