const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('<h1>Welcome to my site</h1>');
});

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
