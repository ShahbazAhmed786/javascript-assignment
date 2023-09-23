function NameWithWhitespace(name) {
    console.log("Name with whitespace: \n\t".concat(name, "\n"));
}
function NameStrippedWhitespace(name) {
    var strippedName = name.trim();
    console.log("Name without whitespace: ".concat(strippedName));
}
var personNameWithWhitespace = "\t   Shahbaz Ahmed  \n";
NameWithWhitespace(personNameWithWhitespace);
NameStrippedWhitespace(personNameWithWhitespace);
