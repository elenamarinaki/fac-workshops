const layout = require('../layout.js');

function get(request, response) {
  try {
    const html = layot(`<h1>Gonna error</h1>`);
    response.send(html);
  } catch (error) {
    console.error(error);
    response.status(500).send('<h2>Server error!</h2>');
  }
}

module.exports = { get };
