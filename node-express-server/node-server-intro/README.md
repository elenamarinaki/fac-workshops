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
