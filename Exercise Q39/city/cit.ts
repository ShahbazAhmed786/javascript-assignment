function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

// Call the function with three different city-country pairs and print the returned value
const location1 = city_country('Lahore', 'Pakistan');
const location2 = city_country('Istanbul', 'Turkey');
const location3 = city_country('Delhi', 'India');

console.log(location1);
console.log(location2);
console.log(location3);