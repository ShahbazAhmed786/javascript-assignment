// Store a list of people to invite to dinner
var dinnerGuests = ['Ali Ahmed', 'Sheraz Ahmed', 'Shahbaz Khan'];
// Print an invitation message to each person
for (var i = 0; i < dinnerGuests.length; i++) {
    var guest = dinnerGuests[i];
    console.log("Dear ".concat(guest, ", you are invited to dinner. It would be an honor to have you join us."));
}
