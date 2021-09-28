const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`
  <h1>Welcome to my site</h1>
  <nav>
    <a href="/about">About</a>
    <a href="/sign-up">Sign up</a>
  </nav>
  `);
});

server.get('/about', (req, res) => {
  res.send(`
  <title>About this site</title>
  <h1>About this site</h1>
  `);
});

server.get('/sign-up', (req, res) => {
  res.send(`
    <h1>Sign up</h1>
      <form method=POST>
        <input name='email'/>
        <input name='password'/>
        <button>Submit</button>
      </form>
  `);
});

server.post('/sign-up', (req, res) => {
  res.redirect('/welcome');
});

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
