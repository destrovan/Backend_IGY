const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// GET request handler
app.get('/', (req, res) => {
  res.json({ message: 'Hello, this is get response' });
});

// POST request handler
app.post('/', (req, res) => {
  res.json({ message: 'Hello, this is post response' });
});

// PUT request handler
app.put('/', (req, res) => {
  res.json({ message: 'Hello, this is put response' });
});

// DELETE request handler
app.delete('/', (req, res) => {
  res.json({ message: 'Hello, this is delete response' });
});

// PATCH request handler
app.patch('/', (req, res) => {
  res.json({ message: 'Hello, this is patch response' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
