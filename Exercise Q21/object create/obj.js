// Object representing information about a car
var car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2022,
    color: 'Silver',
    price: 25000
};
// Object representing information about a book
var book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    pages: 180,
    publicationYear: 1925
};
// Object representing information about a smartphone
var smartphone = {
    brand: 'Samsung',
    model: 'Galaxy S21',
    displaySize: 6.2,
    storage: 128,
    price: 800
};
// Displaying information about the car
console.log("Car: ".concat(car.make, " ").concat(car.model, ", Year: ").concat(car.year, ", Color: ").concat(car.color, ", Price: $").concat(car.price));
// Displaying information about the book
console.log("Book: ".concat(book.title, " by ").concat(book.author, ", Genre: ").concat(book.genre, ", Pages: ").concat(book.pages, ", Publication Year: ").concat(book.publicationYear));
// Displaying information about the smartphone
console.log("Smartphone: ".concat(smartphone.brand, " ").concat(smartphone.model, ", Display Size: ").concat(smartphone.displaySize, " inches, Storage: ").concat(smartphone.storage, " GB, Price: $").concat(smartphone.price));
