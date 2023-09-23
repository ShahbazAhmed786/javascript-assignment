function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
  const album: { artist: string, title: string, tracks?: number } = {
    artist,
    title,
  };

  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  return album;
}

// Call the function to create three dictionaries representing different albums
const album1 = make_album('Artist 1', 'Album 1', 10);
const album2 = make_album('Artist 2', 'Album 2');
const album3 = make_album('Artist 3', 'Album 3', 15);

// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);

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
const originalMagicians: string[] = ["Moiz", "faraz", "Hamza", "Hairs"];

// Make a copy of the original array
const copiedMagicians: string[] = [...originalMagicians];

// Call make_great() to modify the copied array of magicians' names
const greatMagicians: string[] = make_great(copiedMagicians);

// Display the original array of names
show_magicians(originalMagicians);

// Display the updated array of names with "the Great" added
show_magicians(greatMagicians);