// Implement a function to calculate the total price of products in the cart
function calculateTotalPrice(cart) {
    var totalPrice = 0;
    for (var _i = 0, cart_1 = cart; _i < cart_1.length; _i++) {
        var product = cart_1[_i];
        totalPrice += product.price;
    }
    return totalPrice;
}
// Example usage:
var customer = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
};
var cart = [
    {
        id: 1,
        name: "Product 1",
        price: 10,
        category: "Category A",
    },
    {
        id: 2,
        name: "Product 2",
        price: 20,
        category: "Category B",
    },
    {
        id: 3,
        name: "Product 3",
        price: 15,
        category: "Category A",
    },
];
var order = {
    customer: customer,
    cart: cart,
};
var totalPrice = calculateTotalPrice(order.cart);
console.log("Total Price: $".concat(totalPrice));
