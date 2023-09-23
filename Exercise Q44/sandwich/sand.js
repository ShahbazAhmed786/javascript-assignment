// Define the function that prints the sandwich summary
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Sandwich Order Summary:');
    console.log('Bread with:');
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log('Sandwich is ready!');
    console.log('-------------------------');
}
// Call the function three times with different number of arguments
orderSandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
orderSandwich('Turkey', 'Swiss Cheese');
orderSandwich('Peanut Butter', 'Jelly', 'Banana');
