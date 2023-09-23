// Sample list of users
var users = [];
// Check if the list of users is empty
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop through the list of users and print a greeting for each user (won't enter this block if the list is empty)
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        console.log("Hello, ".concat(user, "!"));
    }
}
// Clear the list of users
users = [];
// Check if the list of users is empty after clearing it
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop through the list of users and print a greeting for each user (won't enter this block if the list is empty)
    for (var _a = 0, users_2 = users; _a < users_2.length; _a++) {
        var user = users_2[_a];
        console.log("Hello, ".concat(user, "!"));
    }
}
