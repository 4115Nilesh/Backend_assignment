const http = require('http');

// Sample data for Men and Women products
const menProducts = [
  { id: 1, name: "Men's Jacket", price: 49.99 },
  { id: 2, name: "Men's Shoes", price: 39.99 },
  { id: 3, name: "Men's T-Shirt", price: 19.99 },
  { id: 4, name: "Men's Jeans", price: 29.99 },
  { id: 5, name: "Men's Watch", price: 99.99 },
  { id: 6, name: "Men's Hat", price: 14.99 },
  { id: 7, name: "Men's Hoodie", price: 59.99 },
  { id: 8, name: "Men's Sunglasses", price: 29.99 },
  { id: 9, name: "Men's Belt", price: 24.99 },
  { id: 10, name: "Men's Sneakers", price: 49.99 }
];

const womenProducts = [
  { id: 1, name: "Women's Dress", price: 69.99 },
  { id: 2, name: "Women's Skirt", price: 39.99 },
  { id: 3, name: "Women's Blouse", price: 29.99 },
  { id: 4, name: "Women's Shoes", price: 59.99 },
  { id: 5, name: "Women's Purse", price: 89.99 },
  { id: 6, name: "Women's Jacket", price: 79.99 },
  { id: 7, name: "Women's Scarf", price: 19.99 },
  { id: 8, name: "Women's Sunglasses", price: 29.99 },
  { id: 9, name: "Women's Hat", price: 14.99 },
  { id: 10, name: "Women's Sweater", price: 49.99 }
];

// Create HTTP server
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  
  if (req.url === '/') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "Welcome to Men & Women Dummy Data" }));
  } else if (req.url === '/men') {
    res.statusCode = 200;
    res.end(JSON.stringify(menProducts));
  } else if (req.url === '/women') {
    res.statusCode = 200;
    res.end(JSON.stringify(womenProducts));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Page not found" }));
  }
});

// Set the server to listen on port 3001
server.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
