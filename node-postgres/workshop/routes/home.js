const db = require('../database/connection.js');

// function get(request, response) {
//   response.send(`<h1>Hello world</h1>`);
// }

// function get(request, response) {
//   db.query('SELECT * FROM users').then((result) => {
//     console.log(result);
//   });
//   response.send('<h1>Hello world</h1>');
// }

// function get(request, response) {
//   db.query('SELECT * FROM users').then((result) => {
//     const users = result.rows;
//     const userList = users.map((user) => `<li>${user.username}</li>`).join('');
//     response.send(`<ul>${userList}</ul>`);
//   });
// }

function get(request, response) {
  db.query('SELECT username FROM users').then((result) => {
    const users = result.rows;
    response.send(users);
  });
}

module.exports = { get };
