function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

// Call the function with three different city-country pairs and print the returned value
const location1 = city_country('Lahore', 'Pakistan');
const location2 = city_country('New York', 'United States');
const location3 = city_country('Tokyo', 'Japan');

console.log(location1);
console.log(location2);
console.log(location3);

// Function to modify the array of magicians by adding "the Great" to each name
function make_great(magicians: string[]): string[] {
  const greatMagicians: string[] = [];

  for (const name of magicians) {
    const greatName = name + " the Great";
    greatMagicians.push(greatName);
  }

  return greatMagicians;
}

// Function to display the magicians' names
function show_magicians(magicians: string[]): void {
  console.log("Magicians:");
  for (const name of magicians) {
    console.log(name);
  }
  console.log("-------------------------");
}

// Original array of magicians' names
const magicians: string[] = ["Moiz", "faraz", "Hamza", "Hairs"];

// Call make_great() to modify the array of magicians' names
const greatMagicians: string[] = make_great(magicians);

// Display the updated array of names with "the Great" added
show_magicians(greatMagicians);