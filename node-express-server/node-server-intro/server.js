const express = require('express');

const server = express();

server.get('/', (request, response) => {
  // response.send('hello').status(404);
  // response.status(404).send('hello');
  response.set({'header': 'greeting Danilo', 'header_2': 'test header'}).send('hi Danilo!');
});

const PORT = 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
