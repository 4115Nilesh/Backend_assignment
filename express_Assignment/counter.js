const express = require('express');
const app = express();
const port = 3000;

// Initialize counter
let counter = 0;

// Define the routes

// Route to get the current counter value
app.get('/', (req, res) => {
  res.status(200).json({ counter: counter });
});

// Route to increment the counter by 1
app.get('/increment', (req, res) => {
  counter++;
  res.status(200).json({ counter: counter });
});

// Route to decrement the counter by 1
app.get('/decrement', (req, res) => {
  counter--;
  res.status(200).json({ counter: counter });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
