const db = require('../database/connection.js');

function get(request, response) {
  db.query(/*sql*/ `SELECT username FROM users`).then((result) => {
    const users = result.rows;
    console.log(`these are ROWS: ${users}`);
    const userList = users.map((user) => `<li>${user.username}</li>`).join('');
    response.send(`<ul>${userList}</ul>`);
  });
}

module.exports = { get };
