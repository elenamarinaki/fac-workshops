function checkAuth(req, res, next) {
  const user = req.session;
  if (!user) {
    res
      .status(401)
      .send(
        /*html*/ `<h1>No authorization, please login</h1> <a href='/log-in'>Login</a>`
      );
  }
  next();
}

module.exports = checkAuth;
