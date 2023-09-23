// Make a list of current users and new users
var current_users = ['ali', 'Ahmed', 'Mialk', 'Shahid'];
var new_users = ['javed', 'Moheet', 'Moiz', 'Chand', 'Ali'];
var _loop_1 = function (new_user) {
    // Convert the new username to lowercase for case-insensitive comparison
    var lowercase_new_user = new_user.toLowerCase();
    // Check if the new username is already in the current_users list (case-insensitive)
    if (current_users.some(function (user) { return user.toLowerCase() === lowercase_new_user; })) {
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
};
// Loop through the new_users list to check if each username is unique
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
