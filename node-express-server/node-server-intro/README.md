# Node and Express HTTP server 🚪

Using `Node` and `Express` to create HTTP servers

### Initialize project & install `Express` ✏️

```
mkdir [folder_name]
cd [folder_name]
npm init -y
npm install express
code .
```

### Create a server 💡

```js
const express = require('express');

const server = express();
```

### Handling requests 🛠️

- The server object has methods representing all the HTTP verbs (`GET`, `POST`, etc)
- 2 arguments: the **_path to match_** and a **_handler function_**
  ```js
  server.get('/', (request, response) => {
    response.send('hello');
  });
  ```
  => we tell the server to call our function for any HTTP GET requests to our home path
- `send` method of the response object: tells `Express` to send the response.

### Starting the server 🚗

- The server is functional but to make it work, it has to **_listen for requests_**.
- Servers need to connect to the internet and listen for incoming HTTP requests on **_via a `port`_**.
- We use the listen method of the server object. This takes the port number to listen on, and an optional callback to run when it starts listening. This callback is a good place to log something so you know the server has started.

```js
const PORT = 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
```

- Finally, to start the server:
  ```
  node server.js
  ```

### The response 📲

1. Status code
2. Headers: Express will automatically set some headers describing the response.
3. Body

### Dynamic route paths 🛣️

- When we don't know in advance all the routes we need.

```js
server.get('/users/:name', (request, response) => {
  const name = request.params.name;
  response.send(`<h1>Hello ${name}</h1>`);
});
```

### Middleware 🪢

- Route handlers don't have to send a response.
- They can receive a third argument: the `next` function.
- It moves to the next handler registered for the route.
- We can have multiple handler functions:

```js
function logger(request, response, next) {
  console.log(request.method + ' ' + request.url);
  next();
}

server.get('/', logger, (request, response) => {
  response.send('<h1>Hello</h1>');
});
```

then...

```js
server.use(logger);
```

So, when we load any page we’ll get a helpful log like `GET /`.

### Static Files 🗄

- We can have static files that don’t change for each request.
- `express.static`

```js
const staticHandler = express.static('public');

server.use(staticHandler);
```

- The server will now handle requests to _http://localhost:3000/style.css_ and respond with the file contents. Note that there is no public in the final URL: Express serves the files from the root of the site.
