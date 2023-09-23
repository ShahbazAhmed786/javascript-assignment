function NameWithWhitespace(name: string): void {
  console.log(`Name with whitespace: \n\t${name}\n`);
}

function NameStrippedWhitespace(name: string): void {
  const strippedName = name.trim();
  console.log(`Name without whitespace: ${strippedName}`);
}

const personNameWithWhitespace: string = "\t   Shahbaz Ahmed  \n";
NameWithWhitespace(personNameWithWhitespace);
NameStrippedWhitespace(personNameWithWhitespace);