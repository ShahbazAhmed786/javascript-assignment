var countries = ['United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Japan'];
// Displaying the list of countries
console.log('List of Countries:');
countries.forEach(function (country, index) {
    console.log("".concat(index + 1, ". ").concat(country));
});
