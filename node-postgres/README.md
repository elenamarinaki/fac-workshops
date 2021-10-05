# Postgres with Node

[Workshop](https://learn.foundersandcoders.com/workshops/node-postgres/)

how to use a Postgres database on a Node server

`/database/connection.js`
exports a _pool_ of connections for our app to use

---

#### The connection string

URL pointing to your exact Postgres DB, including the user and password.

```
postgres://username:password@localhost:5432/database_name
```

➼ Since DB queries return promises we need to make sure we send our response inside the `.then` callback.

---

#### Safely handling user input

```sql
db.query("INSERT INTO users(username) VALUES($1)", [username]);
```

We use _$1, $2 etc as placeholders, then pass our values in an array as the second argument to query_. pg will insert each value from the array into its corresponding place in the SQL command (after ensuring it doesn’t contain any SQL).
