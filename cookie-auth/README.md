# Cookie Intro 🍪

### What is a cookie?

- HTTP headers
- `set-cookie` header

```html
HTTP/1.1 200 Ok content-type: text/html set-cookie: userid=1234

<h1>Hello</h1>
```

- This cookie is then sent on all future requests to this domain via the `cookie` request header.

```html
GET /about HTTP/1.1 accept: text/html cookie: userid=1234
```

## Cookie attributes

Cookies support extra attributes to customize their behaviour.

```html
set-cookie: userid=1234; Max-Age=60; HttpOnly; SameSite=Lax
```

### Expiry

- `Session cookie`: until the user closes all the tabs => **_default behaviour_**.
- `Max-Age` attribute
- `Expires` attribute

### Security 🔒

- Cookie is basically a _password_ with an expiration date.
- **`HttpOnly`**: stops client-side JS from accessing cookies. For example preventing a browser extension from reading your cookies => “Cross-site Scripting” or XSS
- `Same-Site`: stops the cookie from being sent on requests made from other domains => “Cross-site Request Forgery” or CSRF
  - `Same-Site=Lax` (check this!!)
- `Secure` option: cookie is only set for secure encrypted (`https`) connections.
  - You shouldn’t use this in development (since your localhost server doesn’t use `https`) but _it’s a very good idea in production_.

## Storage Mechanism

### Stateless authentication

- ***not keeping anything on the server*** => **stateless**
- but very easy to fake :(

### Signed cookies

- cryptographic technic => values we can re-produce later
- `hash` function: operation that takes a value and a secret and returns a `hash`. Only way to re-produce a value is to know the secret.
- we are using this to `sign` our cookies.
- hash function happens on the server
- _don't write_ your own hash function!!

## Downsides to stateless auth

- cookie size: 4kb
- server cannot control who is logged in

### Session based authentication

- opposite of stateless auth => bare minimum on a cookie, rest on the server
- cookie looks a lot simpler

### Session security

- session ID is basically a password - so they must be difficult to guess!
- they should be signed with a `hash`

### Reading a cookie with `express` 🌪️

- ```terminal
  npm install cookie-parser
  ```

- _Middleware_

```javascript
const cookieParser = require('cookie-parser');
server.use(cookieParser());
```
