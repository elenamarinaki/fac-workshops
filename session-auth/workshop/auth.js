const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const model = require('./database/model');
const { response } = require('express');
const { userInfo } = require('os');

const COOKIE_OPTIONS = {
  httpOnly: true,
  maxAge: 600000,
  sameSite: 'strict',
  signed: true,
};

function verifyUser(email, password) {
  model
    .getUser(email)
    .then((dbUser) => bcrypt.compare(password, dbUser.password))
    .then((match) => {
      if (!match) {
        throw new Error('Password mismatch');
      } else {
        return match;
      }
    });
}

function createUser(email, password, name) {
  bcrypt
    .hash(password, 10)
    .then((hash) => model.createUser({ email, hash, name }));
}

function saveUserSession(session) {
  let sid = crypto.randomBytes(18).toString('base64');
  return model.createSession(sid, { session });
}

module.exports = { verifyUser, createUser, saveUserSession, COOKIE_OPTIONS };
