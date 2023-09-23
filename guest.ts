// Start with the array of guests from Exercise 16
let guests: string[] = ['Ali', 'Bilal', 'Chand', 'Dawood', 'ahmed'];

// Print a message saying you can only invite two people for dinner
console.log("Due to limited space, I can invite only two people for dinner.");

// Remove guests from the list one at a time until only two names remain
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}

// Print a message to each of the two people still on your list, letting them know they're still invited
console.log(`${guests[0]} and ${guests[1]}, you're still invited to dinner!`);

// Remove the last two names from your list to have an empty list
guests.pop();
guests.pop();

// Print your list to make sure you have an empty list at the end of your program
console.log("Final list of guests:", guests);

// You found a bigger dinner table and can invite three more guests
console.log("\nGood news! I found a bigger dinner table, so I can invite more guests!");

// Add one new guest to the beginning of your array
guests.unshift('Grace');

// Add one new guest to the middle of your array
guests.splice(2, 0, 'Frank');

// Use append() to add one new guest to the end of your list
guests.push('Hannah');

// Print a new set of invitation messages, one for each person in your list
console.log("\nNew Invitation Messages:");
guests.forEach((guest) => {
    console.log(`Dear ${guest}, you're invited to dinner. See you there!`);
});
