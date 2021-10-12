const model = require('../database/db');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

function get(request, response) {
  response.send(`
    <h1>Log in</h1>
    <form action="log-in" method="POST">
      <label for="email">Email</label>
      <input type="email" id="email" name="email">
      <label for="password">Password</label>
      <input type="password" id="password" name="password">
      <button>Log in</button>
    </form>
  `);
}

const SALT = 'sdflkjsdflkjsdf';

// function post(request, response) {
//   const { email, password } = request.body;
//   const hashedPassword = crypto
//     .createHash('sha256')
//     .update(SALT + password)
//     .digest('hex');
//   model
//     .getUser(email)
//     .then((dbUser) => {
//       if (dbUser.password !== hashedPassword) {
//         throw new Error('Password mismatch');
//       } else {
//         response.send(`<h1>Welcome back, ${email}</h1>`);
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//       response.send(`<h1>User not found</h1>`);
//     });
// }

function post(request, response) {
  const { email, password } = request.body;
  model
    .getUser(email)
    .then((dbUser) => bcrypt.compare(password, dbUser.password))
    .then((match) => {
      if (!match) throw new Error('Password mismatch');
      response.send(`<h1>Welcome back, ${email}</h1>`);
    })
    .catch((error) => {
      console.error(error);
      response.send(`<h1>User not found</h1>`);
    });
}

module.exports = { get, post };
