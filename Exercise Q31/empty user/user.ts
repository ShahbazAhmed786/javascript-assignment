// Sample list of users
let users: string[] = [];

// Check if the list of users is empty
if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    // Loop through the list of users and print a greeting for each user (won't enter this block if the list is empty)
    for (const user of users) {
        console.log(`Hello, ${user}!`);
    }
}

// Clear the list of users
users = [];

// Check if the list of users is empty after clearing it
if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    // Loop through the list of users and print a greeting for each user (won't enter this block if the list is empty)
    for (const user of users) {
        console.log(`Hello, ${user}!`);
    }
}