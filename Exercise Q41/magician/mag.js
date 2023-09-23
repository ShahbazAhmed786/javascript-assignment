function show_magicians(names) {
    console.log("Magicians:");
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
    console.log("-------------------------");
}
// Array of magician's names
var magicians = ["ali", "ahmed", "Hamza", "Hairs"];
// Call the show_magicians function with the array of names
show_magicians(magicians);
