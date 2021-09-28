const express = require('express');
const dogs = require('./dogs.js');
const home = require('./routes/home.js');

const server = express();

const dogsArray = Object.values(dogs);
console.log(dogsArray);

// HOMEPAGE
server.get('/', home.get);

// adding new route GET /add-dog
server.get('/add-dog', (req, res) => {
  const html = ` <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Dogs!</title>
    </head>
    <body>
      <h1>Add Dog!</h1>
        <form method='POST'>
            <input id='name' name='name' />
            <input id='breed' name='breed' />
            <button>Submit</button>
        </form>
    </body>
  </html>
  `;
  res.end(html);
});

const bodyParser = express.urlencoded({ extended: false });

server.post('/add-dog', bodyParser, (req, res) => {
  const newDog = req.body;
  console.log(newDog);
  const name = newDog.name.toLowerCase();
  dogs[name] = newDog;
  res.redirect('/');
});

server.post('/delete-dog', bodyParser, (req, res) => {
  const nameToDelete = req.body.name.toLowerCase();
  delete dogs[nameToDelete];
  res.redirect('/');
});

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
