const db = require('../database/connection');

function get(request, response) {
  response.send(/*html*/ `
    <form action="create-user" method="POST">
      <p>
        <label for="username">Username</label>
        <input id="username" name="username">
      </p>
      <p>
        <label for="age">Age</label>
        <input id="age" name="age" type="number">
      </p>
      <p>
        <button type="submit">Create user</button>
      </p>
    </form>
  `);
}

function post(request, response) {
  const name = request.body.username;
  db.query('INSERT INTO users(username) VALUES($1)', [name]).then(() => {
    response.redirect('/');
  });
  console.log(request.body); // e.g. { username: "oli", ... }
}

module.exports = { get, post };
