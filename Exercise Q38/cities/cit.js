function describe_city(city, country) {
    if (country === void 0) { country = 'Unknown'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities, with at least one in a different country
describe_city('Karachi', 'Pakistan');
describe_city('Istanbul', 'Turkey');
describe_city('Delhi', 'India');
