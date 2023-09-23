function NameFormats(name) {
    console.log("Lowercase: ".concat(name.toLowerCase()));
    console.log("Uppercase: ".concat(name.toUpperCase()));
    console.log("Title Case: ".concat(titleCase(name)));
}
function titleCase(str) {
    return str.replace(/\b\w+/g, function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); });
}
var personName = "Shahbaz Ahmed";
NameFormats(personName);
