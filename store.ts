// Define an interface for Product
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
  }
  
  // Create a type for Cart
  type Cart = Product[];
  
  // Define an interface for Customer
  interface Customer {
    id: number;
    name: string;
    email: string;
  }
  
  // Create a type for Order
  type Order = {
    customer: Customer;
    cart: Cart;
  };
  
  // Implement a function to calculate the total price of products in the cart
  function calculateTotalPrice(cart: Cart): number {
    let totalPrice = 0;
  
    for (const product of cart) {
      totalPrice += product.price;
    }
  
    return totalPrice;
  }
  
  // Example usage:
  const customer: Customer = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  };
  
  const cart: Cart = [
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
  
  const order: Order = {
    customer,
    cart,
  };
  
  const totalPrice = calculateTotalPrice(order.cart);
  console.log(`Total Price: $${totalPrice}`);