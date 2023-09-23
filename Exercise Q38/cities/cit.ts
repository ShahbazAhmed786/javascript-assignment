function describe_city(city: string, country: string = 'Unknown'): void {
  console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities, with at least one in a different country
describe_city('Karachi', 'Pakistan');
describe_city('Istanbul', 'Turkey');
describe_city('Delhi','India'); 