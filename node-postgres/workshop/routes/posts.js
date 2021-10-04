const db = require('../database/connection');

function get(request, response) {
  db.query(
    /*sql*/
    `SELECT blog_posts.text_content, users.username FROM blog_posts INNER JOIN users ON users.id = blog_posts.user_id`
  ).then((result) => {
    const posts = result.rows;
    const postItems = posts
      .map((post) => `<li>${post.username} : ${post.text_content}</li>`)
      .join('');
    response.send(`<ul>${postItems}</ul>`);
  });
}

module.exports = { get };
