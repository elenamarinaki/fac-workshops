const dogs = require('../dogs.js');

function get(req, res) {
  const input = req.query.input || '';

  const dogsArray = Object.values(dogs);
  let listItems = '';

  for (const dog of dogsArray) {
    const match = dog.name.toLowerCase().includes(input.toLowerCase());
    if (!input || match) {
      listItems += `
      <li>
        <span>${dog.name}</span>
        <form action='/delete-dog' method='POST'>
          <button name="dogName" value=${dog.name} aria-label="Delete ${dog.name}">Delete</button>
        </form>
      </li>
      `;
    }
  }

  const dogList = `<ul>${listItems}</ul>`;

  const html = ` <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Dogs!</title>
    </head>
    <body>
      <h2>Search</h2>
      <ul>${dogList}</ul>
        <form>
            <input name='input' />
            <button>Submit</button>
        </form>

        <h2><a href='/add-dog'> Add dog</a></h2>
    </body>
  </html>
  `;
  res.send(html);
}

module.exports = { get };
