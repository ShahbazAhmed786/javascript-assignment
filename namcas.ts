function NameFormats(name: string): void {
  console.log(`Lowercase: ${name.toLowerCase()}`);
  console.log(`Uppercase: ${name.toUpperCase()}`);
  console.log(`Title Case: ${titleCase(name)}`);
}

function titleCase(str: string): string {
  return str.replace(/\b\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}

const personName: string = "Shahbaz Ahmed";
NameFormats(personName);