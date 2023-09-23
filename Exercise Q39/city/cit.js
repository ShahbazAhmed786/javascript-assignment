function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with three different city-country pairs and print the returned value
var location1 = city_country('Lahore', 'Pakistan');
var location2 = city_country('Istanbul', 'Turkey');
var location3 = city_country('Delhi', 'India');
console.log(location1);
console.log(location2);
console.log(location3);
