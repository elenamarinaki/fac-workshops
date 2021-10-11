const express = require('express');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');

const server = express();

server.use(cookieParser('thisisaveryrandomstring'));

let sessions = {};

server.get('/', (request, response) => {
  const sid = request.signedCookies.sid;
  if (sid) {
    const userInfo = sessions[sid];
    console.log(userInfo);
  }

  response.send('<h1>Hello</h1>');
});

server.get('/login', (request, response) => {
  const sid = crypto.randomBytes(18).toString('base64');
  sessions[sid] = { id: 1, username: 'oliverjam', admin: true };

  response.cookie('sid', sid, {
    httpOnly: true,
    maxAge: 1000 * 60,
    sameSite: 'lax',
    signed: true,
  });
  response.redirect('/');
});

server.get('/logout', (request, response) => {
  response.clearCookie('user'); //attention, we must clear the user!!!
  response.redirect('/');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
