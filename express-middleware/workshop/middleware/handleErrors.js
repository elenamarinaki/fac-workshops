function handleErrors(error, req, res, next) {
  console.error(error);
  const status = error.status || 500;
  res
    .status(status)
    .send(
      /*html*/ `<h1>This is a terrible error! You should be ashamed of yourself!!</h1>`
    );
}

module.exports = handleErrors;
