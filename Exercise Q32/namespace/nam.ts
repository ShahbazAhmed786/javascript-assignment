// Make a list of current users and new users
const current_users: string[] = ['ali', 'Ahmed', 'Mialk', 'Shahid'];
const new_users: string[] = ['javed', 'Moheet', 'Moiz', 'Chand', 'Ali'];

// Loop through the new_users list to check if each username is unique
for (const new_user of new_users) {
  // Convert the new username to lowercase for case-insensitive comparison
  const lowercase_new_user = new_user.toLowerCase();

  // Check if the new username is already in the current_users list (case-insensitive)
  if (current_users.some(user => user.toLowerCase() === lowercase_new_user)) {
    console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${new_user}' is available.`);
  }
}



