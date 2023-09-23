const alienColor: string = 'yellow';

// Switch statement to determine points earned based on the alien's color
switch (alienColor) {
    case 'green':
        console.log("Player earned 5 points.");
        break;
    case 'yellow':
        console.log("Player earned 10 points.");
        break;
    case 'red':
        console.log("Player earned 15 points.");
        break;
    default:
        console.log("Unknown alien color. No points earned.");
}