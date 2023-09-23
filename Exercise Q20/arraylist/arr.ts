const countries: string[] = ['United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Japan'];

// Displaying the list of countries
console.log('List of Countries:');
countries.forEach((country, index) => {
    console.log(`${index + 1}. ${country}`);
});