# SQL Fundamentals 🧱

[Workshop](https://learn.foundersandcoders.com/workshops/sql-intro/)

- To create a database use:

```sql
CREATE DATABASE blog_workshop;
```

- List all databases on our machine:

```terminal
\connect blog_workshop
```

- Use \include to run some SQL directly from a file:

```terminal
\include init.sql
```

- See all the database tables:

```terminal
\dt
```

---

### The Schema

A “schema” represents all the different things in a database.

1. What type of data in each column
2. What columns in each table
3. How tables relate to each other

It is represented by the **_initial SQL_** used to create the tables (here inside the `init.sql` file)

#### Data types

`SERIAL`
An auto-incrementing number. Useful for IDs where each new entry needs a unique value. SQL will automatically create this when you insert an entry.

`VARCHAR(255)`
A variable-length string. The number in brackets specifies the maximum number of characters.

`TEXT`
A string of any length.

`INTEGER`
A whole number (like 20). No fractions allowed.

#### Constraints

`NOT NULL`
This value is required and must always be set.

`PRIMARY KEY`
This value is the unique identifier for this entry into the table. Often a `SERIAL` so you don’t have to worry about creating unique IDs yourself.

`REFERENCES`
This value must match one in another table, like users(id). Used to link tables together so you can find related information (e.g. which user wrote this blog post).

---

### Retrieving data

`SELECT`

```sql
SELECT first_name FROM users;
```

`*` character to _select all columns_

`WHERE`

```sql
SELECT first_name FROM users WHERE id = 1;
```

`AND`, `OR` and `NOT`

```sql
SELECT first_name FROM users WHERE id = 1 OR id = 2;
```

`IN`

```sql
SELECT first_name FROM users WHERE id IN (1, 2);
```

---

➼ _example 1_
Using `SELECT` and `WHERE`, retrieve every column for all users who are older than 40.

```sql
SELECT * FROM users
  WHERE age > 40;
```

➼ _example 2_
Using `SELECT` and `WHERE`, retrieve the first, last name and location of the user who lives in Saxilby, UK and is older than 40.

```sql
SELECT first_name, last_name, location FROM users
  WHERE location = 'Saxilby, UK' AND age > 40;
```

➼ _example 3_
Using WHERE and IN, retrieve the user ID and text content columns for posts created by users with IDs of 2 or 3.

```sql
SELECT user_id, text_content FROM blog_posts
  WHERE user_id IN (2, 3);
```

---

### Creating and updating data

`INSERT INTO`

```sql
INSERT INTO users (username, first_name) VALUES ('oliverjam', 'oli');
```

`UPDATE`

```sql
UPDATE users SET first_name = 'oliver' WHERE username = 'oliverjam';
```

`RETURNING`

```sql
INSERT INTO users (username, first_name) VALUES ('oliverjam', 'oli')
  RETURNING id, username;
```

---

### Combining tables

`INNER JOIN`

```sql
SELECT users.username, blog_posts.text_content
  FROM users INNER JOIN blog_posts
    ON users.id = blog_posts.user_id;
```

`LEFT JOIN` / `RIGHT JOIN`

```sql
SELECT users.username, blog_posts.text_content
  FROM users LEFT JOIN blog_posts
    ON users.id = blog_posts.user_id;
```

- _when joining more than 2 columns_

```sql
SELECT blog_posts.text_content, post_comments.text_content, users.username
  FROM blog_posts
  INNER JOIN post_comments ON blog_posts.id = post_comments.post_id
  INNER JOIN users ON users.id = post_comments.user_id;
```

---

### Sub queries

This:

```sql
SELECT * FROM dogs WHERE owner = (SELECT name FROM humans WHERE id = 1)
```

is equivalent of:

```sql
SELECT * FROM dogs WHERE owner = 'oli';
```
