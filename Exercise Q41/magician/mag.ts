function show_magicians(names: string[]): void {
  console.log("Magicians:");
  for (const name of names) {
    console.log(name);
  }
  console.log("-------------------------");
}

// Array of magician's names
const magicians: string[] = ["ali", "ahmed", "Hamza", "Hairs"];

// Call the show_magicians function with the array of names
show_magicians(magicians);