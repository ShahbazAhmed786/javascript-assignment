let dinnerGuests: string[] = ['Ali Ahmed', 'Shahbaz khan', 'Sheraz Ahmed'];

// Print an invitation message to each person
for (let i = 0; i < dinnerGuests.length; i++) {
  const guest: string = dinnerGuests[i];
  console.log(`Dear ${guest}, you are invited to dinner. It would be an honor to have you join us.`);
}

// Assume one of the guests can't make it
const unableToAttend: string = dinnerGuests[1];
console.log(`Unfortunately, ${unableToAttend} cannot make it to dinner.`);

// Send a new invitation to someone else
const newGuest: string = 'Shehryar';
dinnerGuests[1] = newGuest;

// Print a new invitation message to the replacement guest
console.log(`Dear ${newGuest}, you are invited to dinner. We would love to have you join us as ${dinnerGuests[1]} cannot attend.`);