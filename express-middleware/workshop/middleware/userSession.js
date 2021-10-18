let sessions = require('../sessions.js');

const userSession = (req, res, next) => {
  const sid = req.signedCookies.sid;
  const user = sessions[sid];
  if (user) {
    req.session = user;
    console.log(req.session);
  }
  next();
};

module.exports = userSession;
