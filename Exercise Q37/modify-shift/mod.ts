function make_shirt(size: string = "large", message: string = "I love Pakistan"): void {
  console.log(`Size: ${size}, Message: ${message}`);
}

// Call the function to create shirts with different sizes and messages
make_shirt(); // Large shirt with the default message
make_shirt("medium"); // Medium shirt with the default message
make_shirt("small", "Hello World!"); // Small shirt with a different message