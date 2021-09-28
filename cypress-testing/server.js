const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('<h1>Welcome to my site</h1>');
});

server.get('/about', (req, res) => {
  res.send('<title>About this site</title>');
});

server.get('/sign-up', (req, res) => {
  res.send('');
});

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
