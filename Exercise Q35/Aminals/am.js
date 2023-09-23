var animals = ['dog', 'cat', 'rabbit'];
// Print out the name of each animal and a statement about each animal
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    switch (animal) {
        case 'dog':
            console.log("A ".concat(animal, " would make a great pet."));
            break;
        case 'cat':
            console.log("A ".concat(animal, " would be a wonderful companion."));
            break;
        case 'rabbit':
            console.log("A ".concat(animal, " is adorable and fun to have as a pet."));
            break;
        default:
            console.log("A ".concat(animal, " could be a lovely addition to your family."));
    }
}
// Print a statement about what these animals have in common
console.log('Any of these animals would make a great pet!');
