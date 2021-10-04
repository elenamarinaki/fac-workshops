# SQL Fundamentals 🧱

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
