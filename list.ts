// Store a list of people to invite to dinner
const dinnerGuests: string[] = ['Ali Ahmed', 'Sheraz Ahmed', 'Shahbaz Khan'];

// Print an invitation message to each person
for (let i = 0; i < dinnerGuests.length; i++) {
  const guest: string = dinnerGuests[i];
  console.log(`Dear ${guest}, you are invited to dinner. It would be an honor to have you join us.`);
}