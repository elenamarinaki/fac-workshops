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

function deleteUser(user) {
  const { id } = user;
  return db
    .query(/*sql*/ `DELETE FROM users WHERE id = $1`, [id])
    .then((result) => result.rows);
}

function getPosts() {
  return db
    .query(/*sql*/ `SELECT blog_posts.text_content FROM blog_posts`)
    .then((result) => result.rows);
}

module.exports = { getUsers, createUser, deleteUser, getPosts };
