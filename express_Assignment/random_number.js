const express = require('express');
const app = express();
const port = 4045;

// Route to generate and send a random number
app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
  res.status(200).json({ random: randomNumber });
});

// Start the server on port 4045
app.listen(port, () => {
  console.log(`Server is running on http://localhost:4045`);
});
