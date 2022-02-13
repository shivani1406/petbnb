-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email TEXT,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  avatar_url TEXT
);
