// Object representing information about a car
const car: { make: string, model: string, year: number, color: string, price: number } = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2022,
    color: 'Silver',
    price: 25000
};

// Object representing information about a book
const book: { title: string, author: string, genre: string, pages: number, publicationYear: number } = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    pages: 180,
    publicationYear: 1925
};

// Object representing information about a smartphone
const smartphone: { brand: string, model: string, displaySize: number, storage: number, price: number } = {
    brand: 'Samsung',
    model: 'Galaxy S21',
    displaySize: 6.2,
    storage: 128,
    price: 800
};

// Displaying information about the car
console.log(`Car: ${car.make} ${car.model}, Year: ${car.year}, Color: ${car.color}, Price: $${car.price}`);

// Displaying information about the book
console.log(`Book: ${book.title} by ${book.author}, Genre: ${book.genre}, Pages: ${book.pages}, Publication Year: ${book.publicationYear}`);

// Displaying information about the smartphone
console.log(`Smartphone: ${smartphone.brand} ${smartphone.model}, Display Size: ${smartphone.displaySize} inches, Storage: ${smartphone.storage} GB, Price: $${smartphone.price}`);