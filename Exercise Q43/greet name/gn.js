var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Call the function to create three dictionaries representing different albums
var album1 = make_album('Artist 1', 'Album 1', 10);
var album2 = make_album('Artist 2', 'Album 2');
var album3 = make_album('Artist 3', 'Album 3', 15);
// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
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
var originalMagicians = ["Moiz", "faraz", "Hamza", "Hairs"];
// Make a copy of the original array
var copiedMagicians = __spreadArray([], originalMagicians, true);
// Call make_great() to modify the copied array of magicians' names
var greatMagicians = make_great(copiedMagicians);
// Display the original array of names
show_magicians(originalMagicians);
// Display the updated array of names with "the Great" added
show_magicians(greatMagicians);
