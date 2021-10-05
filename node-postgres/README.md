# Postgres with Node

how to use a Postgres database on a Node server

`/database/connection.js`
exports a _pool_ of connections for our app to use

#### The connection string

URL pointing to your exact Postgres DB, including the user and password.

```
postgres://username:password@localhost:5432/database_name
```

➼ Since DB queries return promises we need to make sure we send our response inside the `.then` callback.
