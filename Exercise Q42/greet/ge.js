function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with three different city-country pairs and print the returned value
var location1 = city_country('Lahore', 'Pakistan');
var location2 = city_country('New York', 'United States');
var location3 = city_country('Tokyo', 'Japan');
console.log(location1);
console.log(location2);
console.log(location3);
// Function to modify the array of magicians by adding "the Great" to each name
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var name_1 = magicians_1[_i];
        var greatName = name_1 + " the Great";
        greatMagicians.push(greatName);
    }
    return greatMagicians;
}
// Function to display the magicians' names
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var name_2 = magicians_2[_i];
        console.log(name_2);
    }
    console.log("-------------------------");
}
// Original array of magicians' names
var magicians = ["Moiz", "faraz", "Hamza", "Hairs"];
// Call make_great() to modify the array of magicians' names
var greatMagicians = make_great(magicians);
// Display the updated array of names with "the Great" added
show_magicians(greatMagicians);
