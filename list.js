var dinnerGuests = ['Ali Ahmed', 'Shahbaz khan', 'Sheraz Ahmed'];
// Print an invitation message to each person
for (var i = 0; i < dinnerGuests.length; i++) {
    var guest = dinnerGuests[i];
    console.log("Dear ".concat(guest, ", you are invited to dinner. It would be an honor to have you join us."));
}
// Assume one of the guests can't make it
var unableToAttend = dinnerGuests[1];
console.log("Unfortunately, ".concat(unableToAttend, " cannot make it to dinner."));
// Send a new invitation to someone else
var newGuest = 'Shehryar';
dinnerGuests[1] = newGuest;
// Print a new invitation message to the replacement guest
console.log("Dear ".concat(newGuest, ", you are invited to dinner. We would love to have you join us as ").concat(dinnerGuests[1], " cannot attend."));
