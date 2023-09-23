const usernames: string[] = ['admin', 'ali', 'Javad', 'Ali', 'ahmed'];

// Loop through the array and print greetings
for (const username of usernames) {
    if (username.toLowerCase() === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}




