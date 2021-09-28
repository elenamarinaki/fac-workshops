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

### Handling requests

- The server object has methods representing all the HTTP verbs (`GET`, `POST`, etc)
- 2 arguments: the **_path to match_** and a **_handler function_**
  ```js
  server.get('/', (request, response) => {
    response.send('hello');
  });
  ```
  => we tell the server to call our function for any HTTP GET requests to our home path
- `send` method of the response object: tells `Express` to send the response.