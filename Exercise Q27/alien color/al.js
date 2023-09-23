var alienColor = 'green';
// If-else chain to determine points earned based on the alien's color
if (alienColor === 'green') {
    console.log("Player earned 5 points.");
}
else if (alienColor === 'yellow') {
    console.log("Player earned 10 points.");
}
else if (alienColor === 'red') {
    console.log("Player earned 15 points.");
}
else {
    console.log("Unknown alien color. No points earned.");
}
