function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Size: ".concat(size, ", Message: ").concat(message));
}
// Call the function to create shirts with different sizes and messages
make_shirt(); // Large shirt with the default message
make_shirt("medium"); // Medium shirt with the default message
make_shirt("small", "Hello World!"); // Small shirt with a different message
