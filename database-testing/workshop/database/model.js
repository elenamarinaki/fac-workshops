const db = require('./connection.js');

function getUsers() {
  return db.query('SELECT * FROM users').then((result) => result.rows);
}

function createUser(user) {
  const { username, age, location } = user;
  return db
    .query(
      /*sql*/ `INSERT INTO users (username, age, location) VALUES ($1, $2, $3) `,
      [username, age, location]
    )
    .then((result) => result.rows);
}

module.exports = { getUsers, createUser };
