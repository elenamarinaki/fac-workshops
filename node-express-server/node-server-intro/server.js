const express = require('express');

const server = express();

// server.get('/', (request, response) => {
//   // response.send('hello').status(404);
//   // response.status(404).send('hello');
//   // response
//   //   .set({ header: 'greeting Danilo', header_2: 'test header' })
//   //   .send('hi Danilo!');
//   response.set('header', 'using html tags').send('<h1>Hi all!</h1>');
// });

// server.get('/', (request, response) => {
//   const time = new Date().toLocaleTimeString();
//   response.send(`<h1>Hello, it's ${time}</h1>`);
// });

server.get('/redirects', (request, response) => {
  response.redirect('/json');
});

// Visit http://localhost:3000/json and you should see a JSON object with a message property.
server.get('/json', (request, response) => {
  response.send({ message: 'Hello' });
});

server.get('/users/:name', (request, response) => {
  const name = request.params.name;
  response.send(`<h1>Hello ${name}</h1>`);
});

// server.use((request, response) => {
//   response.status(404).send('<h1>Not found</h1>');
// });

// server.get('/', (request, response, next) => {
//   console.log(request.method + ' ' + request.url);
//   next();
// });

// server.get('/', (request, response) => {
//   response.send('<h1>Hello</h1>');
// });

function logger(request, response, next) {
  console.log(request.method + ' ' + request.url);
  next();
}

server.get('/', logger, (request, response) => {
  response.send('<h1>Hello</h1>');
});

// STATIC FILES
const staticHandler = express.static('public');

server.use(staticHandler);

server.post('/submit', (request, response) => {
  console.log('posted');
  response.send('thanks for submitting');
});

// const bodyParser = express.urlencoded();

// server.post('/submit', bodyParser, (request, response) => {
//   console.log(request.body);
//   response.send('thanks for submitting');
// });

const PORT = 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
