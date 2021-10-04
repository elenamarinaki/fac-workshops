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

-----------------------------------------------

## The Schema

A “schema” represents all the different things in a database.
1. What type of data in each column
2. What columns in each table
3. How tables relate to each other